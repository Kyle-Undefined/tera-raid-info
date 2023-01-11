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

	raidTier = this.raidTierSource.asObservable();
	pokemonList = this.pokemonListSource.asObservable();
	teraTypeValue = this.teraTypeValueSource.asObservable();
	teraTypeName = this.teraTypeNameSource.asObservable();

	changeRaidTier(raidTier: string): void {
		this.raidTierSource.next(raidTier);
	}

	changePokemon(pokemon: string): void {
		this.pokemonListSource.next(pokemon);
	}

	changeTeraTypeValue(teraType: string): void {
		this.teraTypeValueSource.next(teraType);
	}

	changeTeraTypeName(teraType: string): void {
		this.teraTypeNameSource.next(teraType);
	}
}
