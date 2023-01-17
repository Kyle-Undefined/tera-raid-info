import { Injectable } from '@angular/core';
import { Types } from 'src/shared/models/types';

export type TypeCalcResult = {
	name: string;
	multiplier: number;
};

@Injectable({
	providedIn: 'root',
})
export class TypeCalcService {
	public advantages(typeName: string, nonEffectives = false): TypeCalcResult[] {
		const result: TypeCalcResult[] = [];

		Types.filter((type) => {
			return type.name.includes(typeName);
		}).forEach((type) => {
			const offense = type.matchup.offense;

			offense.double.forEach((type) => {
				result.push({ name: type, multiplier: 2 });
			});

			if (nonEffectives) {
				offense.resisted.forEach((type) => {
					result.push({ name: type, multiplier: 0.5 });
				});

				offense.immune.forEach((type) => {
					result.push({ name: type, multiplier: 0 });
				});
			}
		});

		return result;
	}

	public weaknesses(typeName: string): TypeCalcResult[] {
		const result: TypeCalcResult[] = [];

		Types.filter((type) => {
			return type.name.includes(typeName);
		}).forEach((type) => {
			const defense = type.matchup.defense;

			defense.double.forEach((type) => {
				result.push({ name: type, multiplier: 2 });
			});

			defense.resisted.forEach((type) => {
				result.push({ name: type, multiplier: 0.5 });
			});

			defense.immune.forEach((type) => {
				result.push({ name: type, multiplier: 0 });
			});
		});

		return result;
	}
}
