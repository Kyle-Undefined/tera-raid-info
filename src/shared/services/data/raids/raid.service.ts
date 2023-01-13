import { Injectable } from '@angular/core';
import { Raid } from 'src/shared/models/raids';

import fiveStarData from 'src/assets/data/raids/fivestar.json';
import sixStarData from 'src/assets/data/raids/sixstar.json';

@Injectable({
	providedIn: 'root',
})
export class RaidService {
	private fiveStar: Raid = fiveStarData;
	private sixStar: Raid = sixStarData;

	public getFiveStarData(): Raid {
		return this.fiveStar;
	}

	public getSixStarData(): Raid {
		return this.sixStar;
	}
}
