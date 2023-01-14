import { Component, OnInit } from '@angular/core';
import { Category, MoveDex } from 'src/shared/models/moves';
import { Result } from 'src/shared/models/types';
import { DataService } from 'src/shared/services/data/data.service';
import { StateService } from 'src/shared/services/state/state.service';
import { TypeCalcService } from 'src/shared/services/type-calc/type-calc.service';
import * as common from 'src/shared/utils/common';

@Component({
	selector: 'app-pokemon-moves',
	templateUrl: './moves.component.html',
})
export class MovesComponent implements OnInit {
	constructor(
		private dataService: DataService,
		private stateService: StateService,
		private typeCalcService: TypeCalcService
	) {}

	public ngOnInit(): void {
		this.stateService.pokemonList.subscribe((result) => {
			if (result) {
				this.setMoves();
			}
		});
	}

	private setMoves(): void {
		common.updateDiv(
			document.getElementById('pokemonMoves') as HTMLDivElement,
			'<h3>Moves:</h3>'
		);

		let types: string[] = [];
		const moves: string[] = [];
		this.dataService
			.getPokemonMoves()
			.sort((a, b) => {
				if (
					this.dataService.getMoveDexData(a).category != Category.Status &&
					this.dataService.getMoveDexData(b).category == Category.Status
				) {
					return -1;
				}

				if (
					this.dataService.getMoveDexData(b).category != Category.Status &&
					this.dataService.getMoveDexData(a).category == Category.Status
				) {
					return 1;
				}

				return 1;
			})
			.forEach((moveNumber) => {
				const move: MoveDex = this.dataService.getMoveDexData(moveNumber);
				const moveDiv: string = this.createMoveDiv(move);

				common.updateDiv(
					document.getElementById('pokemonMoves') as HTMLDivElement,
					moveDiv
				);

				moves.push(moveDiv);

				if (move.category != Category.Status) {
					types.push(move.type.toString());
				}
			});

		this.stateService.changeMoveList(moves.join(''));
		types = [...new Set(types)];

		const advantages: Result = this.typeCalcService.advantage(types.sort());
		const display: string[] = common.createMatchups(advantages);

		if (display) {
			common.updateDiv(
				document.getElementById('pokemonTypeAdvantages') as HTMLDivElement,
				'<h3>Type Advantages:</h3>' + display.join('')
			);
		}
	}

	private createMoveDiv(move: MoveDex): string {
		let moveDisplay = `<div class="typeMatchupText ${this.dataService
			.getTypeDexData(move.type.toString())
			.name.toLowerCase()}">${move.name}`;
		moveDisplay += `<div class="moveStats">`;
		moveDisplay += `<div class="type">${move.category.toString()}</div>`;
		moveDisplay += `<div class="bp">Pwr: ${move.bp}</div>`;
		moveDisplay += `<div class="pp">PP: ${move.pp}</div>`;
		moveDisplay += `<div class="acc">Acc: ${move.acc}</div>`;
		moveDisplay += `<div class="desc">${move.desc}</div>`;

		if (move.category != Category.Status) {
			const advantages: Result = this.typeCalcService.advantage([
				move.type.toString(),
			]);
			const display: string[] = [];

			Object.entries(advantages)
				.sort((a, b) => b[1] - a[1])
				.forEach(([key]) => {
					display.push(`${common.capitalize(key)}`);
				});

			if (display) {
				moveDisplay += `<div class="adv">Advantages: ${display.join(
					', '
				)}</div>`;
			}
		}

		moveDisplay += '</div></div>';

		return moveDisplay;
	}
}
