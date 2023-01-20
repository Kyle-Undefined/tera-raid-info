import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class StateService {
	private raidTierSource = new BehaviorSubject<string>('');
	private pokemonListSource = new BehaviorSubject<string>('');
	private teraTypeSource = new BehaviorSubject<string>('');
	private moveListSource = new BehaviorSubject<string>('');

	raidTier = this.raidTierSource.asObservable();
	pokemonList = this.pokemonListSource.asObservable();
	teraType = this.teraTypeSource.asObservable();
	moveList = this.moveListSource.asObservable();

	public changeRaidTier(raidTier: string): void {
		this.raidTierSource.next(raidTier);
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
}
