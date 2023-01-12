import { Injectable } from '@angular/core';
import { StateService } from '../state/state.service';
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
} from 'src/shared/models/raids';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	private _raidData: Raid = emptyRaid();
	private _pokemonData: Pokemon = emptyPokemon();

	constructor(
		private stateService: StateService,
		private abilityService: AbilityService,
		private herbService: HerbService,
		private moveService: MoveService,
		private raidService: RaidService,
		private typeService: TypeService
	) {}

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

	public getPokemonData(pokemon: string): Pokemon {
		this._pokemonData = this._raidData.pokemon[pokemon];
		return this._pokemonData;
	}
}
