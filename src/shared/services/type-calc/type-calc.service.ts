import { Injectable } from '@angular/core';
import { Result } from 'src/shared/models/types';
import { DataService } from '../data/data.service';

@Injectable({
	providedIn: 'root',
})
export class TypeCalcService {
	constructor(private dataService: DataService) {}

	public weakness(type: string): Result {
		const result = {} as Result;
		const defense = this.dataService.getTypeDexData(type).defense;

		Object.entries(defense).forEach(([key, value]) => {
			switch (key) {
				case 'double':
					value.forEach((i: string) => {
						result[i] ? (result[i] *= 2) : (result[i] = 2);
					});
					break;
				case 'half':
					value.forEach((i: string) => {
						result[i] ? (result[i] *= 0.5) : (result[i] = 0.5);
					});
					break;
				case 'zero':
					value.forEach((i: string) => {
						result[i] = 0;
					});
					break;
			}
		});

		return result;
	}

	public advantage(types: string[]) {
		const result = {} as Result;

		types.forEach((type) => {
			const attack = this.dataService.getTypeDexData(type).attack;

			Object.entries(attack).forEach(([key, value]) => {
				switch (key) {
					case 'double':
						value.forEach((i: string) => {
							result[i] ? (result[i] *= 2) : (result[i] = 2);
						});
						break;
				}
			});
		});

		return result;
	}
}
