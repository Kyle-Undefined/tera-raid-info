import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class StateService {
	private raidTierSource = new BehaviorSubject<string>('');
	private pokemonListSource = new BehaviorSubject<string>('');
	private teraTypeValueSource = new BehaviorSubject<string>('');
	private teraTypeNameSource = new BehaviorSubject<string>('');
	private moveListSource = new BehaviorSubject<string>('');

	raidTier = this.raidTierSource.asObservable();
	pokemonList = this.pokemonListSource.asObservable();
	teraTypeValue = this.teraTypeValueSource.asObservable();
	teraTypeName = this.teraTypeNameSource.asObservable();
	moveList = this.moveListSource.asObservable();

	public changeRaidTier(raidTier: string): void {
		this.raidTierSource.next(raidTier);
	}

	public changePokemon(pokemon: string): void {
		this.pokemonListSource.next(pokemon);
	}

	public changeTeraTypeValue(teraType: string): void {
		this.teraTypeValueSource.next(teraType);
	}

	public changeTeraTypeName(teraType: string): void {
		this.teraTypeNameSource.next(teraType);
	}

	public changeMoveList(moves: string): void {
		this.moveListSource.next(moves);
	}
}
