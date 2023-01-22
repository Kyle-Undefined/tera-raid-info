import { TestBed } from '@angular/core/testing';
import { PokemonEnum } from '@favware/graphql-pokemon';
import {
	ApolloTestingModule,
	ApolloTestingController,
} from 'apollo-angular/testing';
import { GraphqlService } from './graphql.service';
import { of } from 'rxjs';
import { MockedPokemonData } from './mocked';

describe('GraphqlService', () => {
	let controller: ApolloTestingController;
	let service: GraphqlService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ApolloTestingModule],
			providers: [GraphqlService],
		});
		controller = TestBed.inject(ApolloTestingController);
		service = TestBed.inject(GraphqlService);
	});

	afterEach(() => {
		controller.verify();
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it("getPokemon('gengar') should return data", () => {
		spyOn(service, 'getPokemon').and.returnValue(of(MockedPokemonData));

		service.getPokemon('gengar' as PokemonEnum).subscribe((result) => {
			expect(result).toEqual(MockedPokemonData);
		});
	});
});
