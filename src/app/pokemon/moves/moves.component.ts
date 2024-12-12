import { Component, OnInit } from '@angular/core';
import { Move, MovesEnum } from '@favware/graphql-pokemon';
import { FiveStarRaids, SixStarRaids } from 'src/shared/models/raids';
import { GraphqlService } from 'src/shared/services/graphql/graphql.service';
import { StateService } from 'src/shared/services/state/state.service';
import {
	TypeCalcService,
	TypeCalcResult,
} from 'src/shared/services/type-calc/type-calc.service';
import * as common from 'src/shared/utils/common';

@Component({
	selector: 'app-pokemon-moves',
	templateUrl: './moves.component.html',
})
export class MovesComponent implements OnInit {
	constructor(
		private stateService: StateService,
		private typeCalcService: TypeCalcService,
		private graphqlService: GraphqlService
	) {}

	private raidTier = '';
	private pokemonList = '';

	public ngOnInit(): void {
		this.stateService.raidTier.subscribe((result) => {
			this.raidTier = result;
		});
		this.stateService.pokemonList.subscribe((result) => {
			this.pokemonList = result;
			this.setMoves();
		});
	}

	private setMoves(): void {
		const pokemonMoves = document.getElementById(
			'pokemonMoves'
		) as HTMLDivElement;
		const raidData = this.raidTier == '5' ? FiveStarRaids : SixStarRaids;
		const moves: Move[] = [];
		const rawMoves: string[] = [];
		const moveList: string[] = [];
		let types: string[] = [];

		if (this.pokemonList) {
			raidData
				.filter((pokemon) => {
					return pokemon.name == this.pokemonList;
				})
				.forEach((pokemon) => {
					if (pokemon.info.specialMoves) {
						pokemon.info.specialMoves
							.sort((a, b) => a.localeCompare(b))
							.forEach((moveName) => {
								rawMoves.push(moveName);

								this.graphqlService
									.getMove(
										moveName
											.toLowerCase()
											.replaceAll(' ', '')
											.replaceAll('-', '') as MovesEnum
									)
									.subscribe((data) => {
										moves.push(data.getMove);
									});
							});
					}

					pokemon.info.moves.forEach((moveName) => {
						rawMoves.push(moveName);
					});
				});

			this.graphqlService.getMoves().subscribe((data) => {
				common.updateDiv(pokemonMoves, '<h3>Moves:</h3>');

				rawMoves.forEach((moveName) => {
					moves.push(
						...data.filter((move) => {
							return move.name == moveName;
						})
					);
				});

				const uniqueMoves = [...new Map(moves.map((m) => [m.key, m])).values()];

				uniqueMoves
					.sort((a, b) => a.name.localeCompare(b.name))
					.sort((a, b) => {
						if (a.category != 'Status' && b.category == 'Status') {
							return -1;
						}
						if (b.category != 'Status' && a.category == 'Status') {
							return 1;
						}
						return 1;
					})
					.forEach((move) => {
						const moveDiv: string = this.createMoveDiv(move);

						common.updateDiv(
							document.getElementById('pokemonMoves') as HTMLDivElement,
							moveDiv
						);

						moveList.push(moveDiv);

						if (move.category != 'Status') {
							types.push(move.type);
						}
					});

				this.stateService.changeMoveList(moveList.join(''));
				types = [...new Set(types)];

				let advantages: TypeCalcResult[] = [];

				types.forEach((type) => {
					const adv: TypeCalcResult[] = this.typeCalcService.advantages(type);
					advantages = advantages.concat(adv);
				});

				const display: string[] = [];
				advantages = [...new Map(advantages.map((a) => [a.name, a])).values()];

				advantages
					.sort((a, b) => a.name.localeCompare(b.name))
					.forEach((type) => {
						display.push(common.createTypeMatchupDiv(type));
					});

				if (display.length) {
					common.updateDiv(
						document.getElementById('pokemonTypeAdvantages') as HTMLDivElement,
						'<h3>Type Advantages:</h3>' + display.join('')
					);
				}
			});
		}
	}

	private createMoveDiv(move: Move): string {
		let moveDisplay = `<div class="typeMatchupText ${move.type.toLowerCase()}">${
			move.name
		}`;
		moveDisplay += `<div class="moveStats">`;
		moveDisplay += `<div class="type">${move.category.toString()}</div>`;
		moveDisplay += `<div class="bp">Pwr: ${
			move.basePower == '0' ? '--' : move.basePower
		}</div>`;
		moveDisplay += `<div class="pp">PP: ${move.pp}</div>`;
		moveDisplay += `<div class="acc">Acc: ${move.accuracy}</div>`;
		moveDisplay += `<div class="desc">${
			move.desc == 'No additional effect.' ? move.shortDesc : move.desc
		}</div>`;

		if (move.category != 'Status') {
			const advantages: TypeCalcResult[] = this.typeCalcService.advantages(
				move.type.toString()
			);
			const display: string[] = [];

			advantages.forEach((moveName) => {
				if (moveName.multiplier == 2) {
					display.push(`${common.capitalize(moveName.name)}`);
				}
			});

			if (display.length) {
				moveDisplay += `<div class="adv">Advantages: ${display.join(
					', '
				)}</div>`;
			}
		}

		moveDisplay += '</div></div>';

		return moveDisplay;
	}
}
