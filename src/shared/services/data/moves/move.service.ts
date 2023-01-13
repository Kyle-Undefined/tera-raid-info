import { Injectable } from '@angular/core';
import { Move, MoveDex } from 'src/shared/models/moves';

import moveData from 'src/assets/data/moves.json';

@Injectable({
	providedIn: 'root',
})
export class MoveService {
	private _moveData: Move = moveData as Move;

	public getMoveData(): Move {
		return this._moveData;
	}

	public getMoveDexData(move: number): MoveDex {
		return this._moveData.moveDex[move];
	}
}
