import { TestBed } from '@angular/core/testing';
import { MovesEnum, PokemonEnum } from '@favware/graphql-pokemon';
import {
	ApolloTestingModule,
	ApolloTestingController,
} from 'apollo-angular/testing';
import { GraphqlService } from './graphql.service';
import { MockedPokemonData, MockedMoveData } from './mocked';
import * as query from 'src/shared/queries/queries';

const pokemon = PokemonEnum.Gengar;
const move = MovesEnum.Disable;

describe('GraphqlService', () => {
	let controller: ApolloTestingController;
	let service: GraphqlService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ApolloTestingModule],
			providers: [GraphqlService],
		});

		service = TestBed.inject(GraphqlService);
		controller = TestBed.inject(ApolloTestingController);
	});

	afterEach(() => {
		controller.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('getPokemon(pokemon: PokemonEnum) should return data', (done) => {
		service.getPokemon(pokemon).subscribe((result) => {
			expect(result.getPokemon.num).toBe(94);
			expect(result.getPokemon.key).toBe(PokemonEnum.Gengar);
		});

		controller.expectOne(query.getPokemon).flush({ data: MockedPokemonData });
		done();
	});

	it('getMove(move: MovesEnum) should return data', (done) => {
		service.getMove(move).subscribe((result) => {
			expect(result.getMove.name).toBe('Disable');
			expect(result.getMove.category).toBe('Status');
		});

		controller.expectOne(query.getMove).flush({ data: MockedMoveData });
		done();
	});

	it('getAbilities() should return data', (done) => {
		service.getPokemon(pokemon);
		service.getAbilities().subscribe((result) => {
			expect(result.first.name).toBe('Cursed Body');
		});

		controller.expectOne(query.getPokemon).flush({ data: MockedPokemonData });
		done();
	});

	it('getDexNumber() should return data', (done) => {
		service.getPokemon(pokemon);
		service.getDexNumber().subscribe((result) => {
			expect(result).toBe(94);
		});

		controller.expectOne(query.getPokemon).flush({ data: MockedPokemonData });
		done();
	});

	it('getMoves() should return data', (done) => {
		service.getPokemon(pokemon);
		service.getMoves().subscribe((result) => {
			expect(result).toBeDefined();
			expect(result.length).toBeGreaterThan(0);
		});

		controller.expectOne(query.getPokemon).flush({ data: MockedPokemonData });
		done();
	});

	it('getStats() should return data', (done) => {
		service.getPokemon(pokemon);
		service.getStats().subscribe((result) => {
			expect(result.attack).toBe(65);
			expect(result.specialattack).toBe(130);
			expect(result.hp).not.toBe(80);
		});

		controller.expectOne(query.getPokemon).flush({ data: MockedPokemonData });
		done();
	});

	it('getTypes() should return data', (done) => {
		service.getPokemon(pokemon);
		service.getTypes().subscribe((result) => {
			expect(result[0].name).toBe('Ghost');
			expect(result[1].name).toBe('Poison');
		});

		controller.expectOne(query.getPokemon).flush({ data: MockedPokemonData });
		done();
	});
});
