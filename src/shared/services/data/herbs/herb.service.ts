import { Injectable } from '@angular/core';
import { Herb, HerbDex } from 'src/shared/models/herbs';

import herbData from 'src/assets/data/herbs.json';

@Injectable({
	providedIn: 'root',
})
export class HerbService {
	private _herbData: Herb = herbData;

	public getHerbData(): Herb {
		return this._herbData;
	}

	public getHerbDexData(herb: number): HerbDex {
		return this._herbData.herbDex[herb];
	}
}
