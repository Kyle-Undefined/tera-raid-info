import { Injectable } from '@angular/core';
import { Ability, AbilityDex } from 'src/shared/models/abilities';

import abilityData from 'src/assets/data/abilities.json';

@Injectable({
	providedIn: 'root',
})
export class AbilityService {
	private _abilityData: Ability = abilityData;

	public getAbilityData(): Ability {
		return this._abilityData;
	}

	public getAbilityDexData(ability: number): AbilityDex {
		return this._abilityData.abilityDex[ability];
	}
}
