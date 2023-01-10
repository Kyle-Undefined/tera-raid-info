import typeData from './data/types.json';
import { Type, Result } from './models/types';

const types: Type = typeData;

export class TypeCalc {
	weakness(type: string): Result {
		const results = {} as Result;
		const defense = types.typeDex[type].defense;

		Object.entries(defense).forEach(([key, value]) => {
			switch (key) {
				case 'double':
					value.forEach((i: string) => {
						results[i] ? (results[i] *= 2) : (results[i] = 2);
					});
					break;
				case 'half':
					value.forEach((i: string) => {
						results[i] ? (results[i] *= 0.5) : (results[i] = 0.5);
					});
					break;
				case 'zero':
					value.forEach((i: string) => {
						results[i] = 0;
					});
					break;
			}
		});

		return results;
	}

	advantage(typeArray: string[]): Result {
		const results = {} as Result;

		typeArray.forEach((type) => {
			const attack = types.typeDex[type].attack;

			Object.entries(attack).forEach(([key, value]) => {
				switch (key) {
					case 'double':
						value.forEach((i: string) => {
							results[i] ? (results[i] *= 2) : (results[i] = 2);
						});
						break;
				}
			});
		});

		return results;
	}
}
