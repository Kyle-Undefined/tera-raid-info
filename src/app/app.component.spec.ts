import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { RaidTierComponent } from './header/dropdowns/raid-tier/raid-tier.component';
import { RegionComponent } from './header/dropdowns/region/region.component';
import { PokemonListComponent } from './header/dropdowns/pokemon-list/pokemon-list.component';
import { TeraTypeComponent } from './header/dropdowns/tera-type/tera-type.component';
import { ShareRaidComponent } from './header/icons/share-raid/share-raid.component';
import { ImagesComponent } from './pokemon/images/images.component';
import { TypesComponent } from './pokemon/types/types.component';
import { StatsComponent } from './pokemon/stats/stats.component';
import { AbilityComponent } from './pokemon/ability/ability.component';
import { MovesComponent } from './pokemon/moves/moves.component';
import { ActionsComponent } from './pokemon/actions/actions.component';
import { HerbsComponent } from './pokemon/herbs/herbs.component';
import { TypeMatchupsComponent } from './pokemon/type-matchups/type-matchups.component';
import { By } from '@angular/platform-browser';
import { StateService } from 'src/shared/services/state/state.service';
import { GraphqlService } from 'src/shared/services/graphql/graphql.service';
import { of } from 'rxjs';
import { PokemonEnum } from '@favware/graphql-pokemon';
import {
	moveResponse,
	movesResponse,
} from 'src/shared/services/graphql/mocked';
import { beforeEach, it, expect, vi, describe } from 'vitest'
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

Object.defineProperty(window, 'caches', {
	value: {
		delete: vi.fn().mockResolvedValue(true)
	},
	writable: true
});

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	let stateService: StateService;
	let graphqlService: GraphqlService;

	beforeEach(async () => {
		TestBed.resetTestEnvironment();
  		TestBed.initTestEnvironment(BrowserTestingModule, platformBrowserTesting());

		await TestBed.configureTestingModule({
			imports: [
				AppComponent,
				RaidTierComponent,
				PokemonListComponent,
				RegionComponent,
				TeraTypeComponent,
				ShareRaidComponent,
				ImagesComponent,
				TypesComponent,
				StatsComponent,
				AbilityComponent,
				MovesComponent,
				ActionsComponent,
				HerbsComponent,
				TypeMatchupsComponent,
				ApolloTestingModule,
			],
			providers: [StateService, GraphqlService],
		}).compileComponents();

		stateService = TestBed.inject(StateService);
		graphqlService = TestBed.inject(GraphqlService);
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		stateService.changeRegionList('Paldea');
		fixture.detectChanges();
	});

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});

	it(`should have as title 'Tera Raid Info'`, () => {
		expect(component.title).toEqual('Tera Raid Info');
	});

	it('pokemonList should update state', () => {
		const element = fixture.debugElement;
		const select = element.query(By.css('#pokemonList')).nativeElement;

		stateService.changeRaidTier('6');
		select.value = select.options[2].value;
		select.dispatchEvent(new Event('change'));
		fixture.detectChanges();

		stateService.pokemonList.subscribe((result) => {
			expect(result).toBe('Annihilape');
		});
	});

	it('pokemonList should update state with pokemon form', () => {
		const element = fixture.debugElement;
		const select = element.query(By.css('#pokemonList')).nativeElement;

		stateService.changeRaidTier('5');
		select.value = select.options[57].value;
		select.dispatchEvent(new Event('change'));
		fixture.detectChanges();

		stateService.pokemonList.subscribe((result) => {
			expect(result).toBe('Indeedee (Female)');
		});
	});

	it('should auto populate raid data with one name', () => {
		const element = fixture.debugElement;

		const raidTier = element.query(By.css('#raidTier')).nativeElement;
		const regionList = element.query(By.css('#regionList')).nativeElement;
		const pokemonList = element.query(By.css('#pokemonList')).nativeElement;
		const teraList = element.query(By.css('#teraList')).nativeElement;

		component.autoPopulateSelections(
			'http://localhost/tera-raid-info/5/Paldea/Abomasnow/Electric',
			'http://localhost'
		);
		fixture.detectChanges();

		expect(raidTier.value).toBe('5');
		expect(regionList.value).toBe('Paldea');
		expect(pokemonList.value).toBe('Abomasnow');
		expect(teraList.value).toBe('Electric');
	});

	it('should auto populate raid data with spaced name', () => {
		const element = fixture.debugElement;

		const raidTier = element.query(By.css('#raidTier')).nativeElement;
		const regionList = element.query(By.css('#regionList')).nativeElement;
		const pokemonList = element.query(By.css('#pokemonList')).nativeElement;
		const teraList = element.query(By.css('#teraList')).nativeElement;

		component.autoPopulateSelections(
			'http://localhost/tera-raid-info/6/Paldea/Tauros%20(Fire)/Steel',
			'http://localhost'
		);
		fixture.detectChanges();

		expect(raidTier.value).toBe('6');
		expect(regionList.value).toBe('Paldea');
		expect(pokemonList.value).toBe('Tauros (Fire)');
		expect(teraList.value).toBe('Steel');
	});

	it('should set actions', () => {
		const element = fixture.debugElement;
		const select = element.query(By.css('#pokemonList')).nativeElement;
		const div = element.query(By.css('#pokemonActions')).nativeElement;

		stateService.changeRaidTier('5');
		select.value = select.options[3].value;
		select.dispatchEvent(new Event('change'));
		fixture.detectChanges();
		expect(div.innerHTML).toBe(
			'<h3>Actions:</h3><div class="actions time-85" data-info="85% Time Remaining">Uses Grassy Terrain</div><div class="actions hp-75" data-info="75% HP Remaining">Uses Spore</div><div class="actions hp-50" data-info="50% HP Remaining">Stats &amp; Status Reset</div><div class="actions hp-40" data-info="40% HP Remaining">Uses Spore</div><div class="actions hp-25" data-info="25% HP Remaining">Player Stats &amp; Status Reset</div>'
		);
	});

	it('should set herbs', () => {
		const element = fixture.debugElement;
		const select = element.query(By.css('#pokemonList')).nativeElement;
		const div = element.query(By.css('#pokemonHerbs')).nativeElement;

		stateService.changeRaidTier('5');
		select.value = select.options[3].value;
		select.dispatchEvent(new Event('change'));
		fixture.detectChanges();
		expect(div.innerHTML).toBe(
			'<h3>Herbs Dropped:</h3><div class="herbPill bitter">Bitter - 2.4%</div><div class="herbPill salty">Salty - 2.4%</div><div class="herbPill sour">Sour - 2.4%</div><div class="herbPill spicy">Spicy - 2.4%</div><div class="herbPill sweet">Sweet - 2.4%</div>'
		);
	});

	it('should set type matchups', () => {
		const element = fixture.debugElement;
		const pokemonList = element.query(By.css('#pokemonList')).nativeElement;
		const teraList = element.query(By.css('#teraList')).nativeElement;
		const teraWeaknesses = element.query(
			By.css('#pokemonTeraWeaknesses')
		).nativeElement;
		const teraAdvantages = element.query(
			By.css('#pokemonTeraAdvantages')
		).nativeElement;

		stateService.changeRaidTier('5');
		pokemonList.value = pokemonList.options[3].value;
		pokemonList.dispatchEvent(new Event('change'));

		teraList.value = teraList.options[1].value;
		teraList.dispatchEvent(new Event('change'));

		expect(teraWeaknesses.innerHTML).toBe(
			'<h3>Tera Weaknesses:</h3><div class="typeMatchupText fire">Fire - 2x</div><div class="typeMatchupText flying">Flying - 2x</div><div class="typeMatchupText rock">Rock - 2x</div><div class="typeMatchupText fighting">Fighting - 0.5x</div><div class="typeMatchupText grass">Grass - 0.5x</div><div class="typeMatchupText ground">Ground - 0.5x</div>'
		);

		stateService.changeMoveList(
			`<h3>Moves:</h3><div class="typeMatchupText ghost">Shadow Ball<div class="moveStats"><div class="type">Special</div><div class="bp">Pwr: 80</div><div class="pp">PP: 15</div><div class="acc">Acc: 100</div><div class="desc">Has a 20% chance to lower the target's Special Defense by 1 stage.</div><div class="adv">Advantages: Ghost, Psychic</div></div></div><div class="typeMatchupText normal">Take Down<div class="moveStats"><div class="type">Physical</div><div class="bp">Pwr: 90</div><div class="pp">PP: 20</div><div class="acc">Acc: 85</div><div class="desc">If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP.</div></div></div><div class="typeMatchupText normal">Tera Blast<div class="moveStats"><div class="type">Special</div><div class="bp">Pwr: 80</div><div class="pp">PP: 10</div><div class="acc">Acc: 100</div><div class="desc">If the user is Terastallized, this move becomes a physical attack if the user's Attack is greater than its Special Attack, including stat stage changes, and it becomes the same its the user's Tera Type.</div></div></div><div class="typeMatchupText psychic">Calm Mind<div class="moveStats"><div class="type">Status</div><div class="bp">Pwr: --</div><div class="pp">PP: 20</div><div class="acc">Acc: 100</div><div class="desc">Raises the user's Special Attack and Special Defense by 1 stage.</div></div></div><div class="typeMatchupText normal">Tickle<div class="moveStats"><div class="type">Status</div><div class="bp">Pwr: --</div><div class="pp">PP: 20</div><div class="acc">Acc: 100</div><div class="desc">Lowers the target's Attack and Defense by 1 stage.</div></div></div><div class="typeMatchupText normal">Yawn<div class="moveStats"><div class="type">Status</div><div class="bp">Pwr: --</div><div class="pp">PP: 10</div><div class="acc">Acc: 100</div><div class="desc">Causes the target to fall asleep at the end of the next turn. Fails when used if the target cannot fall asleep or if it already has a non-volatile status condition. At the end of the next turn, if the target is still active, does not have a non-volatile status condition, and can fall asleep, it falls asleep. If the target becomes affected, this effect cannot be prevented by Safeguard or a substitute, or by falling asleep and waking up during the effect.</div></div></div>`
		);

		expect(teraAdvantages.innerHTML).toBe(
			'<h3>Tera Advantages:</h3><div class="typeMatchupText dark">Dark - 2x</div><div class="typeMatchupText grass">Grass - 2x</div><div class="typeMatchupText psychic">Psychic - 2x</div>'
		);
	});

	it('should set special moves', () => {
		vi.spyOn(graphqlService, 'getMove').mockReturnValue(of(moveResponse));
		vi.spyOn(graphqlService, 'getMoves').mockReturnValue(of(movesResponse));

		const element = fixture.debugElement;
		const div = element.query(By.css('#pokemonMoves')).nativeElement;

		graphqlService.getPokemon('blissey' as PokemonEnum);
		stateService.changeRaidTier('5');
		stateService.changePokemon('Blissey');
		fixture.detectChanges();

		expect(div.innerHTML).toContain(
			'<h3>Moves:</h3><div class="typeMatchupText normal">Gravity<div'
		);
	});

	it('should set moves', () => {
		vi.spyOn(graphqlService, 'getMoves').mockReturnValue(of(movesResponse));

		const element = fixture.debugElement;
		const div = element.query(By.css('#pokemonMoves')).nativeElement;

		graphqlService.getPokemon('amoonguss' as PokemonEnum);
		stateService.changeRaidTier('6');
		stateService.changePokemon('Amoonguss');
		fixture.detectChanges();

		expect(div.innerHTML).toContain(
			'<h3>Moves:</h3><div class="typeMatchupText grass">Energy Ball<div'
		);
	});
});
