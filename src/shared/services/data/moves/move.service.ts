import { Injectable } from '@angular/core';
import { Move } from 'src/shared/models/moves';

import moveData from 'src/assets/data/moves.json';

@Injectable({
	providedIn: 'root',
})
export class MoveService {
	private _moveData: Move = moveData as Move;

	public getMoveDex(): Move {
		return this._moveData;
	}
}
