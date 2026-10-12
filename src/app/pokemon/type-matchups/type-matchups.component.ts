import { Component, computed, inject } from '@angular/core';
import { RaidDataService } from 'src/shared/services/raid-data/raid-data.service';
import { StateService } from 'src/shared/services/state/state.service';
import { TypeCalcService } from 'src/shared/services/type-calc/type-calc.service';
@Component({
	selector: 'app-pokemon-type-matchups',
	standalone: true,
	templateUrl: './type-matchups.component.html',
})
export class TypeMatchupsComponent {
	readonly data = inject(RaidDataService);
	readonly state = inject(StateService);
	readonly typeCalc = inject(TypeCalcService);
	readonly offense = computed(() => {
		const moves = this.data.view()?.moves ?? [];
		const types = [
			...new Set(
				moves
					.filter(
						(move) => move.category !== 'Status' && move.name !== 'Tera Blast'
					)
					.map((move) => move.type)
			),
		];
		if (
			moves.some((move) => move.name === 'Tera Blast') &&
			this.state.selection().tera
		)
			types.push(this.state.selection().tera);
		return [
			...new Map(
				types
					.flatMap((type) => this.typeCalc.advantages(type))
					.map((type) => [type.name, type])
			).values(),
		].sort((a, b) => a.name.localeCompare(b.name));
	});
	readonly teraMatchups = computed(() =>
		this.typeCalc.weaknesses(this.state.selection().tera)
	);
	readonly groups = computed(() =>
		[
			{
				label: 'Weak to',
				types: this.teraMatchups().filter((type) => type.multiplier === 2),
			},
			{
				label: 'Resists',
				types: this.teraMatchups().filter((type) => type.multiplier === 0.5),
			},
			{
				label: 'Immune to',
				types: this.teraMatchups().filter((type) => type.multiplier === 0),
			},
		].filter((group) => group.types.length)
	);
	title(name: string): string {
		return name.charAt(0).toUpperCase() + name.slice(1);
	}
}
