import { inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import type { Move, MovesEnum, PokemonEnum } from '@favware/graphql-pokemon';
import {
	catchError,
	combineLatest,
	distinctUntilChanged,
	finalize,
	forkJoin,
	map,
	Observable,
	of,
	startWith,
	Subject,
	switchMap,
} from 'rxjs';
import {
	FiveStarRaids,
	Raid,
	RaidRegion,
	SixStarRaids,
} from '../../models/raids';
import {
	GraphqlService,
	GraphQLPokemonResponse,
} from '../graphql/graphql.service';
import { StateService } from '../state/state.service';

export function raidsFor(tier: string, region: string): Raid[] {
	return (tier === '5' ? FiveStarRaids : tier === '6' ? SixStarRaids : [])
		.filter(
			(raid) => raid.region === RaidRegion[region as keyof typeof RaidRegion]
		)
		.slice()
		.sort((a, b) => a.name.localeCompare(b.name));
}
export interface RaidView {
	raid: Raid;
	pokemon: GraphQLPokemonResponse<'getPokemon'>['getPokemon'];
	moves: Move[];
	tier: string;
	region: string;
}
@Injectable({ providedIn: 'root' })
export class RaidDataService {
	private state = inject(StateService);
	private graphql = inject(GraphqlService);
	private refresh = new Subject<void>();
	readonly loading = signal(false);
	readonly error = signal('');
	readonly view = toSignal(
		combineLatest([
			this.state.selection$.pipe(
				map(({ tier, region, pokemon }) => ({ tier, region, pokemon })),
				distinctUntilChanged(
					(a, b) =>
						a.tier === b.tier &&
						a.region === b.region &&
						a.pokemon === b.pokemon
				)
			),
			this.refresh.pipe(startWith(undefined)),
		]).pipe(
			switchMap(([selection]) => {
				const raid = raidsFor(selection.tier, selection.region).find(
					(raid) => raid.name === selection.pokemon
				);
				this.error.set('');
				if (!raid) {
					this.loading.set(false);
					return of(null);
				}
				this.loading.set(true);
				const key = (raid.formName || raid.name.toLowerCase()) as PokemonEnum;
				return this.graphql.getPokemon(key).pipe(
					switchMap((response) =>
						this.raidMoves(raid).pipe(
							map(
								(moves) =>
									({
										raid,
										pokemon: response.getPokemon,
										tier: selection.tier,
										region: selection.region,
										moves,
									}) satisfies RaidView
							)
						)
					),
					catchError(() => {
						this.error.set('Could not load this raid. Please try again.');
						return of(null);
					}),
					finalize(() => this.loading.set(false))
				);
			})
		),
		{ initialValue: null }
	);

	private raidMoves(raid: Raid): Observable<Move[]> {
		return this.graphql.getMoves().pipe(
			switchMap((learnset) => {
				// Some existing raid entries contain empty placeholders; they are not move requests.
				const names = [
					...new Set(
						[...raid.info.moves, ...(raid.info.specialMoves ?? [])].filter(
							Boolean
						)
					),
				];
				if (!names.length) return of([]);
				const available = new Map(learnset.map((move) => [move.name, move]));
				return forkJoin(
					names.map((name) => {
						const move = available.get(name);
						return move
							? of(move)
							: this.graphql
									.getMove(
										name.toLowerCase().replace(/[^a-z0-9]/g, '') as MovesEnum
									)
									.pipe(map((response) => response.getMove));
					})
				);
			}),
			map((moves) =>
				moves
					.slice()
					.sort(
						(a, b) =>
							Number(a.category === 'Status') -
								Number(b.category === 'Status') || a.name.localeCompare(b.name)
					)
			)
		);
	}
	retry(): void {
		this.refresh.next();
	}
}
