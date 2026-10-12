import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
	BrowserTestingModule,
	platformBrowserTesting,
} from '@angular/platform-browser/testing';
import { of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { AppComponent } from './app.component';
import { StateService } from 'src/shared/services/state/state.service';
import { GraphqlService } from 'src/shared/services/graphql/graphql.service';
import {
	MockedPokemonData,
	MockedMoveData,
	abilitiesSixStarResponse,
} from 'src/shared/services/graphql/mocked';
import { FiveStarRaids, SixStarRaids } from 'src/shared/models/raids';
import type { Move, MovesEnum } from '@favware/graphql-pokemon';

const names = [
	...new Set(
		[...FiveStarRaids, ...SixStarRaids].flatMap((raid) => [
			...raid.info.moves,
			...(raid.info.specialMoves ?? []),
		])
	),
];
const moves = names.map(
	(name) =>
		({
			...MockedMoveData.getMove,
			name,
			key: name.toLowerCase().replace(/[^a-z0-9]/g, '') as MovesEnum,
			type: 'Ground',
			category: name === 'Swords Dance' ? 'Status' : 'Physical',
		}) as Move
);

describe('Familiar raid view', () => {
	let fixture: ComponentFixture<AppComponent>;
	let state: StateService;
	const api = {
		getPokemon: vi.fn(() =>
			of({
				getPokemon: {
					...MockedPokemonData.getPokemon,
					num: 445,
					abilities: abilitiesSixStarResponse,
				},
			})
		),
		getMoves: vi.fn(() => of(moves)),
	};
	const el = (selector: string) =>
		fixture.nativeElement.querySelector(selector) as HTMLElement;
	const select = (id: string, value: string) => {
		const input = el(id) as HTMLSelectElement;
		input.value = value;
		input.dispatchEvent(new Event('change'));
		fixture.detectChanges();
	};
	const choose = (name = 'Garchomp', tier = '6') => {
		state.changeRaidTier(tier);
		state.changePokemon(name);
		fixture.detectChanges();
	};
	beforeEach(async () => {
		TestBed.resetTestEnvironment();
		TestBed.initTestEnvironment(BrowserTestingModule, platformBrowserTesting());
		vi.clearAllMocks();
		await TestBed.configureTestingModule({
			imports: [AppComponent],
			providers: [{ provide: GraphqlService, useValue: api }],
		}).compileComponents();
		state = TestBed.inject(StateService);
		fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
		await fixture.whenStable();
		fixture.detectChanges();
	});
	it('starts with a prompt, default selectors, and no sample raid', () => {
		expect(el('main').textContent).toContain('Choose your raid');
		expect(el('#pokemonContent')).toBeNull();
		expect((el('#raidTier') as HTMLSelectElement).value).toBe('6');
		expect((el('#regionList') as HTMLSelectElement).value).toBe('Paldea');
		expect(api.getPokemon).not.toHaveBeenCalled();
	});
	it('loads the selected raid once and displays images, stats, and types', () => {
		choose();
		expect(el('#pokemon-name').textContent).toBe('Garchomp');
		expect(el('#pokemonImageNormal img').getAttribute('src')).toBe(
			'./assets/pokemon/445.png'
		);
		expect(el('#pokemonImageShiny img').getAttribute('src')).toBe(
			'./assets/pokemon/shiny/445.png'
		);
		expect(el('#pokemonStats').textContent).toContain('130');
		expect(el('#pokemonTypes').textContent).toContain('Ghost');
		expect(api.getPokemon).toHaveBeenCalledTimes(1);
	});
	it('loads encoded regional-form links and Tera types', async () => {
		fixture.componentInstance.autoPopulateSelections(
			'https://example.test/tera-raid-info/6/Paldea/Tauros%20(Fire)/Water',
			'https://example.test'
		);
		fixture.detectChanges();
		await fixture.whenStable();
		fixture.detectChanges();
		expect(state.selection()).toEqual({
			tier: '6',
			region: 'Paldea',
			pokemon: 'Tauros (Fire)',
			tera: 'Water',
		});
		expect((el('#pokemonList') as HTMLSelectElement).value).toBe(
			'Tauros (Fire)'
		);
		expect(el('#pokemonImageNormal img').getAttribute('src')).toContain('-b');
	});
	it('ignores malformed or invalid shared links', () => {
		fixture.componentInstance.autoPopulateSelections(
			'https://example.test/tera-raid-info/8/Unknown/%ZZ/Water'
		);
		expect(state.selection().pokemon).toBe('');
		fixture.componentInstance.autoPopulateSelections(
			'https://example.test/tera-raid-info/6/Paldea/Missing/Invalid'
		);
		expect(state.selection().pokemon).toBe('');
	});
	it('clears stale details when the region or tier changes', () => {
		choose();
		select('#regionList', 'Kitakami');
		expect(el('#pokemonContent')).toBeNull();
		expect(state.selection().pokemon).toBe('');
		expect(el('main').textContent).toContain('Choose your raid');
		state.changeRegionList('Paldea');
		choose();
		select('#raidTier', '5');
		expect(el('#pokemonContent')).toBeNull();
	});
	it('shows hidden abilities for six stars and the Ditto exception', () => {
		choose('Annihilape');
		expect(el('#pokemonAbility').textContent).toContain('Defiant (H)');
		choose('Annihilape', '5');
		expect(el('#pokemonAbility').textContent).not.toContain('Defiant');
		choose('Ditto', '5');
		expect(el('#pokemonAbility').textContent).toContain('Defiant (H)');
	});
	it('supports preview, pinned ability details, closing, and Escape', () => {
		choose();
		const button = el('#pokemonAbility button');
		button.dispatchEvent(
			new PointerEvent('pointerenter', { pointerType: 'mouse' })
		);
		fixture.detectChanges();
		expect(el('#ability-detail').textContent).toContain('Vital Spirit');
		button.click();
		button.dispatchEvent(new Event('pointerleave'));
		fixture.detectChanges();
		expect(button.getAttribute('aria-pressed')).toBe('true');
		expect(el('#ability-detail')).not.toBeNull();
		el('#pokemonAbility').dispatchEvent(
			new KeyboardEvent('keydown', { key: 'Escape', bubbles: true })
		);
		fixture.detectChanges();
		expect(el('#ability-detail')).toBeNull();
		button.click();
		fixture.detectChanges();
		el('#ability-detail button').click();
		fixture.detectChanges();
		expect(el('#ability-detail')).toBeNull();
	});
	it('inspects and pins move details without replacing artwork', () => {
		choose();
		const image = el('#pokemonImageNormal img');
		const button = el('#pokemonMoves button');
		button.dispatchEvent(
			new PointerEvent('pointerenter', { pointerType: 'mouse' })
		);
		fixture.detectChanges();
		expect(el('#move-detail').textContent).toContain('PP');
		button.click();
		fixture.detectChanges();
		expect(el('#pokemonImageNormal img')).toBe(image);
		expect(button.getAttribute('aria-pressed')).toBe('true');
		button.click();
		fixture.detectChanges();
		expect(el('#move-detail')).toBeNull();
	});
	it('orders actions by percentage and allows them to collapse', () => {
		choose();
		const badges = [
			...fixture.nativeElement.querySelectorAll('.tri-threshold'),
		].map((node: HTMLElement) => node.textContent);
		expect(badges.indexOf('60% Time')).toBeLessThan(badges.indexOf('50% HP'));
		const details = el('#pokemonActions details') as HTMLDetailsElement;
		expect(details.open).toBe(true);
		details.open = false;
		expect(details.open).toBe(false);
		expect(el('#pokemonHerbs').textContent).toContain('Spicy');
	});
	it('updates Tera weaknesses, resistances and immunities without refetching', () => {
		choose();
		select('#teraList', 'Fairy');
		expect(el('#pokemonTeraWeaknesses').textContent).toContain('Poison');
		expect(el('#pokemonTeraWeaknesses').textContent).toContain('Dragon');
		expect(api.getPokemon).toHaveBeenCalledTimes(1);
		select('#teraList', '');
		expect(el('#pokemonTeraWeaknesses').textContent).toContain(
			'Choose a Tera type'
		);
	});
	it('includes the chosen type in Tera Blast advantages', () => {
		choose('Sylveon');
		select('#teraList', 'Water');
		expect(el('#pokemonTypeAdvantages').textContent).toContain('Fire');
	});
	it('returns home with no sample raid', () => {
		choose();
		fixture.componentInstance.home();
		fixture.detectChanges();
		expect(el('#pokemonContent')).toBeNull();
		expect(state.selection().tera).toBe('');
	});
});
