import { TestBed } from '@angular/core/testing';
import { StateService } from './state.service';
import { beforeEach, it, expect, describe } from 'vitest'
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

describe('StateService', () => {
	let service: StateService;

	beforeEach(() => {
		TestBed.resetTestEnvironment();
  		TestBed.initTestEnvironment(BrowserTestingModule, platformBrowserTesting());
		TestBed.configureTestingModule({});
		service = TestBed.inject(StateService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should change raid tier', () => {
		service.changeRaidTier('6');

		let raidTier: string | undefined;

		service.raidTier
			.subscribe((result) => {
				raidTier = result;
			})
			.unsubscribe();

		expect(raidTier).toBe('6');
	});

	it('should change pokemon', () => {
		service.changePokemon('Gengar');

		let pokemonList: string | undefined;

		service.pokemonList
			.subscribe((result) => {
				pokemonList = result;
			})
			.unsubscribe();

		expect(pokemonList).toBe('Gengar');
	});

	it('should change tera type', () => {
		service.changeTeraType('Steel');

		let teraType: string | undefined;

		service.teraType
			.subscribe((result) => {
				teraType = result;
			})
			.unsubscribe();

		expect(teraType).toBe('Steel');
	});

	it('should change move list', () => {
		service.changeMoveList('<h3>Moves:</h3>');

		let moveList: string | undefined;

		service.moveList
			.subscribe((result) => {
				moveList = result;
			})
			.unsubscribe();

		expect(moveList).toBe('<h3>Moves:</h3>');
	});

	it('should change loading', () => {
		service.changeLoading(true);

		let loading: boolean | undefined;

		service.loading
			.subscribe((result) => {
				loading = result;
			})
			.unsubscribe();

		expect(loading).toBe(true);
	});
});
