import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
	providedIn: 'root',
})
export class StateService {
	private raidTierSource = new BehaviorSubject<string>('6');
	private regionSource = new BehaviorSubject<string>('Paldea');
	private pokemonListSource = new BehaviorSubject<string>('');
	private teraTypeSource = new BehaviorSubject<string>('');
	private moveListSource = new BehaviorSubject<string>('');
	private loadingSource = new BehaviorSubject<boolean>(false);

	raidTier = this.raidTierSource.asObservable();
	regionList = this.regionSource.asObservable();
	pokemonList = this.pokemonListSource.asObservable();
	teraType = this.teraTypeSource.asObservable();
	moveList = this.moveListSource.asObservable();
	loading = this.loadingSource.asObservable();
	selection$ = combineLatest([
		this.raidTier,
		this.regionList,
		this.pokemonList,
		this.teraType,
	]).pipe(
		map(([tier, region, pokemon, tera]) => ({ tier, region, pokemon, tera }))
	);
	selection = toSignal(this.selection$, { requireSync: true });

	public changeRaidTier(raidTier: string): void {
		if (raidTier !== this.raidTierSource.value) this.changePokemon('');
		this.raidTierSource.next(raidTier);
	}

	public changeRegionList(region: string): void {
		if (region !== this.regionSource.value) this.changePokemon('');
		this.regionSource.next(region);
	}

	public changePokemon(pokemon: string): void {
		this.pokemonListSource.next(pokemon);
	}

	public changeTeraType(teraType: string): void {
		this.teraTypeSource.next(teraType);
	}

	public changeMoveList(moves: string): void {
		this.moveListSource.next(moves);
	}

	public changeLoading(loading: boolean): void {
		this.loadingSource.next(loading);
	}
}
