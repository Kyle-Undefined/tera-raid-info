import { Injectable } from '@angular/core';
import { Type, TypeDex } from 'src/shared/models/types';

import typeData from 'src/assets/data/types.json';

@Injectable({
	providedIn: 'root',
})
export class TypeService {
	private _typeData: Type = typeData;

	public getTypeData(): Type {
		return this._typeData;
	}

	public getTypeDexEntry(type: string): TypeDex {
		return this._typeData.typeDex[type];
	}
}
