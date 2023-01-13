import { Component, OnInit } from '@angular/core';
import { Result } from 'src/shared/models/types';
import { StateService } from 'src/shared/services/state/state.service';
import { TypeCalcService } from 'src/shared/services/type-calc/type-calc.service';
import * as common from 'src/shared/utils/common';

@Component({
	selector: 'app-pokemon-type-matchups',
	templateUrl: './type-matchups.component.html',
})
export class TypeMatchupsComponent implements OnInit {
	constructor(
		private stateService: StateService,
		private typeCalcService: TypeCalcService
	) {}

	private raidTier = '';
	private pokemonList = '';
	private teraTypeValue = '';
	private moveList = '';

	public ngOnInit(): void {
		this.stateService.raidTier.subscribe((result) => {
			this.raidTier = result;
		});
		this.stateService.pokemonList.subscribe((result) => {
			this.pokemonList = result;
			this.handleChange();
		});
		this.stateService.teraTypeValue.subscribe((result) => {
			this.teraTypeValue = result;
			this.handleChange();
		});
		this.stateService.moveList.subscribe((result) => {
			this.moveList = result;
			this.handleChange();
		});
	}

	private handleChange(): void {
		if (this.pokemonList) {
			if (this.raidTier && this.teraTypeValue) {
				this.setTypeWeaknesses();
			}

			if (this.moveList && this.teraTypeValue) {
				if (this.moveList.includes('Tera Blast')) {
					this.setTeraTypeAdvantages();
				}
			}
		}

		if (this.teraTypeValue) {
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
	}

	private setTeraTypeAdvantages(): void {
		common.clearData('pokemonTeraAdvantages');

		const advantages: Result = this.typeCalcService.advantage([
			this.teraTypeValue,
		]);
		const display: string[] = common.createMatchups(advantages);

		if (display) {
			common.updateDiv(
				document.getElementById('pokemonTeraAdvantages') as HTMLDivElement,
				'<h3>Tera Advantages:</h3>' + display.join('')
			);
		}
	}

	private setTypeWeaknesses(): void {
		common.clearData('pokemonTeraWeaknesses');

		const weaknesses: Result = this.typeCalcService.weakness(
			this.teraTypeValue
		);
		const display: string[] = common.createMatchups(weaknesses);

		if (display) {
			common.updateDiv(
				document.getElementById('pokemonTeraWeaknesses') as HTMLDivElement,
				'<h3>Tera Weaknesses:</h3>' + display.join('')
			);
		}
	}
}
