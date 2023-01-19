import { Injectable } from '@angular/core';
import type {
	PokemonEnum,
	Query,
	QueryGetPokemonArgs,
	Abilities,
	Stats,
	PokemonType,
	GenerationalPokemonLearnset,
	MovesEnum,
	QueryGetMoveArgs,
	Pokemon,
	Maybe,
} from '@favware/graphql-pokemon';
import { Apollo } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import * as query from 'src/shared/queries/queries';

type GraphQLPokemonResponse<K extends keyof Omit<Query, '__typename'>> = Record<
	K,
	Omit<Query[K], '__typename'>
>;

@Injectable({
	providedIn: 'root',
})
export class GraphqlService {
	public constructor(private apollo: Apollo) {}

	private pokemon!: Observable<GraphQLPokemonResponse<'getPokemon'>>;

	public getAbilities(): Observable<Abilities> {
		return this.pokemon.pipe(
			map((result) => {
				return result.getPokemon.abilities;
			})
		);
	}

	public getDexNumber(): Observable<number> {
		return this.pokemon.pipe(
			map((result) => {
				return result.getPokemon.num;
			})
		);
	}

	public getEvolutions(): Observable<Maybe<readonly Pokemon[]> | undefined> {
		return this.pokemon.pipe(
			map((result) => {
				return result.getPokemon.evolutions;
			})
		);
	}

	public getMove(
		move: MovesEnum
	): Observable<GraphQLPokemonResponse<'getMove'>> {
		return this.apollo
			.query<GraphQLPokemonResponse<'getMove'>, QueryGetMoveArgs>({
				query: query.getMove,
				variables: { move },
			})
			.pipe(
				map((result) => {
					return result.data;
				})
			);
	}

	public getMoves(): Observable<GenerationalPokemonLearnset> {
		return this.pokemon.pipe(
			map((result) => {
				return result.getPokemon.learnsets as GenerationalPokemonLearnset;
			})
		);
	}

	public getPokemon(pokemon: PokemonEnum) {
		this.pokemon = this.apollo
			.query<GraphQLPokemonResponse<'getPokemon'>, QueryGetPokemonArgs>({
				query: query.getPokemon,
				variables: { pokemon },
			})
			.pipe(map((result) => result.data));
	}

	public getPreEvolutions(): Observable<Maybe<readonly Pokemon[]> | undefined> {
		return this.pokemon.pipe(
			map((result) => {
				return result.getPokemon.preevolutions;
			})
		);
	}

	public getStats(): Observable<Stats> {
		return this.pokemon.pipe(
			map((result) => {
				return result.getPokemon.baseStats;
			})
		);
	}

	public getTypes(): Observable<readonly PokemonType[]> {
		return this.pokemon.pipe(
			map((result) => {
				return result.getPokemon.types;
			})
		);
	}
}
