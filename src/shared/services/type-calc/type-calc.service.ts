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
		let superEffectives: string[] = [];

		types.forEach((type) => {
			superEffectives = superEffectives.concat(
				this.dataService.getTypeDexData(type).attack.double
			);
		});

		superEffectives = [...new Set(superEffectives)];

		superEffectives.forEach((i: string) => {
			result[i] ? (result[i] *= 2) : (result[i] = 2);
		});

		return result;
	}
}
