import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class StateService {
	private raidTierSource = new BehaviorSubject<string>('');
	private regionSource = new BehaviorSubject<string>('');
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

	public changeRaidTier(raidTier: string): void {
		this.raidTierSource.next(raidTier);
	}

	public changeRegionList(region: string): void {
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
