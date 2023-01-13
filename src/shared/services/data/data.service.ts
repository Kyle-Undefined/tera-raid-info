import { Injectable } from '@angular/core';

import { AbilityService } from './abilities/ability.service';
import { HerbService } from './herbs/herb.service';
import { MoveService } from './moves/move.service';
import { RaidService } from './raids/raid.service';
import { TypeService } from './types/type.service';

import {
	Raid,
	Pokemon,
	emptyRaid,
	emptyPokemon,
	Stats,
} from 'src/shared/models/raids';
import { Ability, AbilityDex } from 'src/shared/models/abilities';
import { Herb, HerbDex } from 'src/shared/models/herbs';
import { Move, MoveDex } from 'src/shared/models/moves';
import { Type, TypeDex } from 'src/shared/models/types';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	private _raidData: Raid = emptyRaid();
	private _pokemonData: Pokemon = emptyPokemon();

	constructor(
		private abilityService: AbilityService,
		private herbService: HerbService,
		private moveService: MoveService,
		private raidService: RaidService,
		private typeService: TypeService
	) {}

	public getAbilityData(): Ability {
		return this.abilityService.getAbilityData();
	}

	public getAbilityDexData(ability: number): AbilityDex {
		return this.abilityService.getAbilityDexData(ability - 1);
	}

	public getHerbData(): Herb {
		return this.herbService.getHerbData();
	}

	public getHerbDexData(herb: number): HerbDex {
		return this.herbService.getHerbDexData(herb);
	}

	public getMoveData(): Move {
		return this.moveService.getMoveData();
	}

	public getMoveDexData(move: number): MoveDex {
		return this.moveService.getMoveDexData(move);
	}

	public getPokemonAbilities(): number[] {
		return this._pokemonData.ability.sort();
	}

	public getPokemonData(pokemon: string): Pokemon {
		this._pokemonData = this._raidData.pokemon[pokemon];
		return this._pokemonData;
	}

	public getPokemonDexNumber(): string {
		return this._pokemonData.dex;
	}

	public getPokemonHerbs(): number[] {
		return this._pokemonData.herbs;
	}

	public getPokemonHiddenAbility(): number {
		return this._pokemonData.hiddenability as number;
	}

	public getPokemonMoves(): number[] {
		return this._pokemonData.moves;
	}

	public getPokemonStats(): Stats {
		return this._pokemonData.stats;
	}

	public getPokemonTypeNames(): string[] {
		const names: string[] = [];

		for (let i = 0; i < this._pokemonData.type.length; i++) {
			names.push(
				this.getTypeDexData(this._pokemonData.type[i].toString()).name
			);
		}

		return names;
	}

	public getRaidData(raidTier: string): Raid {
		switch (raidTier) {
			case '5':
				this._raidData = this.raidService.getFiveStarData();
				return this._raidData;
			case '6':
				this._raidData = this.raidService.getSixStarData();
				return this._raidData;
			default:
				this._raidData = emptyRaid();
				return this._raidData;
		}
	}

	public getTypeData(): Type {
		return this.typeService.getTypeData();
	}

	public getTypeDexData(type: string): TypeDex {
		return this.typeService.getTypeDexEntry(type);
	}
}
