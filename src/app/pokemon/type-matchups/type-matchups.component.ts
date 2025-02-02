import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/shared/services/state/state.service';
import {
	TypeCalcService,
	TypeCalcResult,
} from 'src/shared/services/type-calc/type-calc.service';
import * as common from 'src/shared/utils/common';

@Component({
    selector: 'app-pokemon-type-matchups',
    templateUrl: './type-matchups.component.html',
    standalone: true,
})
export class TypeMatchupsComponent implements OnInit {
	constructor(
		private stateService: StateService,
		private typeCalcService: TypeCalcService
	) {}

	private raidTier = '';
	private pokemonList = '';
	private teraType = '';
	private moveList = '';

	public ngOnInit(): void {
		this.stateService.raidTier.subscribe((result) => {
			this.raidTier = result;
		});
		this.stateService.pokemonList.subscribe((result) => {
			this.pokemonList = result;
			this.handleChange();
		});
		this.stateService.teraType.subscribe((result) => {
			this.teraType = result;
			this.handleChange();
		});
		this.stateService.moveList.subscribe((result) => {
			this.moveList = result;
			this.handleChange();
		});
	}

	private handleChange(): void {
		if (this.pokemonList) {
			common.clearData('pokemonTeraAdvantages');
			common.clearData('pokemonTeraWeaknesses');

			if (this.pokemonList) {
				if (this.raidTier && this.teraType) {
					this.setTypeWeaknesses();
				}

				if (this.moveList && this.teraType) {
					if (this.moveList.includes('Tera Blast')) {
						this.setTeraTypeAdvantages();
					}
				}
			}

			if (this.teraType) {
				if (this.pokemonList && this.raidTier) {
					this.setTypeWeaknesses();
				}

				if (this.moveList.includes('Tera Blast')) {
					this.setTeraTypeAdvantages();
				}
			} else {
				common.clearData('pokemonTeraAdvantages');
				common.clearData('pokemonTeraWeaknesses');
			}

			this.stateService.changeLoading(false);
		}
	}

	private setTeraTypeAdvantages(): void {
		common.clearData('pokemonTeraAdvantages');

		const display: string[] = [];
		const advantages: TypeCalcResult[] = this.typeCalcService.advantages(
			this.teraType
		);

		advantages.forEach((type) => {
			display.push(common.createTypeMatchupDiv(type));
		});

		if (display.length) {
			common.updateDiv(
				document.getElementById('pokemonTeraAdvantages') as HTMLDivElement,
				'<h3>Tera Advantages:</h3>' + display.join('')
			);
		}
	}

	private setTypeWeaknesses(): void {
		common.clearData('pokemonTeraWeaknesses');

		const display: string[] = [];
		const weaknesses: TypeCalcResult[] = this.typeCalcService.weaknesses(
			this.teraType
		);

		weaknesses.forEach((type) => {
			display.push(common.createTypeMatchupDiv(type));
		});

		if (display.length) {
			common.updateDiv(
				document.getElementById('pokemonTeraWeaknesses') as HTMLDivElement,
				'<h3>Tera Weaknesses:</h3>' + display.join('')
			);
		}
	}
}
