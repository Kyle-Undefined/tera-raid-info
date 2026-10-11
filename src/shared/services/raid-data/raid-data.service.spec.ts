import { TestBed } from '@angular/core/testing';
import {
	BrowserTestingModule,
	platformBrowserTesting,
} from '@angular/platform-browser/testing';
import { of, Subject, throwError } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { MockedMoveData, MockedPokemonData } from '../graphql/mocked';
import {
	GraphqlService,
	GraphQLPokemonResponse,
} from '../graphql/graphql.service';
import { StateService } from '../state/state.service';
import { RaidDataService, raidsFor } from './raid-data.service';
import { FiveStarRaids, SixStarRaids } from '../../models/raids';
import { type Move, MovesEnum, PokemonEnum } from '@favware/graphql-pokemon';
const makeMove = (name: string): Move =>
	({
		...MockedMoveData.getMove,
		name,
		key: name.toLowerCase().replace(/[^a-z0-9]/g, '') as MovesEnum,
		category: name === 'Swords Dance' ? 'Status' : 'Physical',
	}) as Move;
const allMoves = [
	...new Set(
		[...FiveStarRaids, ...SixStarRaids].flatMap((raid) => [
			...raid.info.moves,
			...(raid.info.specialMoves ?? []),
		])
	),
].map(makeMove);
describe('RaidDataService', () => {
	it('keeps all configured Pokémon and nonempty moves compatible with the API enums', () => {
		const pokemon = new Set(Object.values(PokemonEnum));
		const moves = new Set(Object.values(MovesEnum));
		for (const raid of [...FiveStarRaids, ...SixStarRaids]) {
			expect(
				pokemon.has((raid.formName || raid.name.toLowerCase()) as PokemonEnum)
			).toBe(true);
			for (const name of [
				...raid.info.moves,
				...(raid.info.specialMoves ?? []),
			].filter(Boolean))
				expect(
					moves.has(name.toLowerCase().replace(/[^a-z0-9]/g, '') as MovesEnum)
				).toBe(true);
		}
	});
	let data: RaidDataService;
	let state: StateService;
	const api = { getPokemon: vi.fn(), getMoves: vi.fn(), getMove: vi.fn() };
	beforeEach(() => {
		TestBed.resetTestEnvironment();
		TestBed.initTestEnvironment(BrowserTestingModule, platformBrowserTesting());
		TestBed.configureTestingModule({
			providers: [{ provide: GraphqlService, useValue: api }],
		});
		api.getPokemon.mockReset().mockReturnValue(of(MockedPokemonData));
		api.getMoves.mockReset().mockReturnValue(of(allMoves));
		api.getMove
			.mockReset()
			.mockImplementation((key: string) =>
				of({ getMove: allMoves.find((move) => move.key === key) })
			);
		state = TestBed.inject(StateService);
		data = TestBed.inject(RaidDataService);
	});
	it('does not request anything until a valid raid is selected', () => {
		expect(data.view()).toBeNull();
		state.changePokemon('Missing');
		expect(api.getPokemon).not.toHaveBeenCalled();
		expect(data.loading()).toBe(false);
	});
	it('filters and sorts available raids without mutating source data', () => {
		const original = SixStarRaids.map((raid) => raid.name);
		const raids = raidsFor('6', 'Kitakami');
		expect(raids.every((raid) => raid.region === 'Kitakami')).toBe(true);
		expect(raids.map((raid) => raid.name)).toEqual(
			raids.map((raid) => raid.name).sort((a, b) => a.localeCompare(b))
		);
		expect(SixStarRaids.map((raid) => raid.name)).toEqual(original);
		expect(raidsFor('7', 'Paldea')).toEqual([]);
	});
	it('deduplicates raid moves, includes special moves, and sorts status moves last', () => {
		state.changePokemon('Blissey');
		const moves = data.view()!.moves;
		const raid = data.view()!.raid;
		expect(moves.map((move) => move.name).sort()).toEqual(
			[
				...new Set([...raid.info.moves, ...(raid.info.specialMoves ?? [])]),
			].sort()
		);
		expect(new Set(moves.map((move) => move.key)).size).toBe(moves.length);
		state.changePokemon('Garchomp');
		expect(data.view()!.moves.at(-1)?.name).toBe('Swords Dance');
	});
	it('waits for missing move lookups instead of rendering an incomplete move list', () => {
		const pending = new Subject<GraphQLPokemonResponse<'getMove'>>();
		api.getMoves.mockReturnValue(
			of(allMoves.filter((move) => move.name !== 'Earthquake'))
		);
		api.getMove.mockReturnValue(pending);
		state.changePokemon('Garchomp');
		expect(data.loading()).toBe(true);
		expect(data.view()).toBeNull();
		pending.next({ getMove: makeMove('Earthquake') });
		pending.complete();
		expect(data.loading()).toBe(false);
		expect(data.view()!.moves.some((move) => move.name === 'Earthquake')).toBe(
			true
		);
		expect(api.getMove).toHaveBeenCalledWith('earthquake');
	});
	it('cancels older requests when selection changes and ignores late results', () => {
		const first = new Subject<GraphQLPokemonResponse<'getPokemon'>>();
		const second = new Subject<GraphQLPokemonResponse<'getPokemon'>>();
		api.getPokemon.mockReturnValueOnce(first).mockReturnValueOnce(second);
		state.changePokemon('Garchomp');
		state.changePokemon('Blissey');
		expect(first.observed).toBe(false);
		expect(data.loading()).toBe(true);
		first.next(MockedPokemonData);
		expect(data.view()).toBeNull();
		second.next(MockedPokemonData);
		second.complete();
		expect(data.view()?.raid.name).toBe('Blissey');
		expect(data.loading()).toBe(false);
	});
	it('reports a request failure and supports retry', () => {
		api.getPokemon.mockReturnValueOnce(throwError(() => new Error('offline')));
		state.changePokemon('Garchomp');
		expect(data.error()).toContain('Could not load');
		expect(data.loading()).toBe(false);
		expect(data.view()).toBeNull();
		data.retry();
		expect(data.error()).toBe('');
		expect(data.view()?.raid.name).toBe('Garchomp');
	});
	it('ignores empty move placeholders in the existing raid data', () => {
		const raid =
			SixStarRaids.find((raid) => raid.info.moves.includes('')) ??
			FiveStarRaids.find((raid) => raid.info.moves.includes(''))!;
		state.changeRaidTier(SixStarRaids.includes(raid) ? '6' : '5');
		state.changeRegionList(raid.region);
		state.changePokemon(raid.name);
		expect(data.view()?.raid.name).toBe(raid.name);
		expect(data.view()?.moves.some((move) => !move.name)).toBe(false);
		expect(api.getMove).not.toHaveBeenCalledWith('');
	});
	it('uses the form identifier and does not refetch for Tera changes', () => {
		state.changePokemon('Tauros (Fire)');
		expect(api.getPokemon).toHaveBeenCalledWith('taurospaldeablaze');
		state.changeTeraType('Water');
		expect(api.getPokemon).toHaveBeenCalledTimes(1);
	});
});
