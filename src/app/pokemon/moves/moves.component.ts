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
				});

			this.graphqlService.getMoves().subscribe((data) => {
				common.updateDiv(pokemonMoves, '<h3>Moves:</h3>');

				raidData
					.filter((pokemon) => {
						return pokemon.name == this.pokemonList;
					})
					.forEach((pokemon) => {
						pokemon.info.moves
							.sort((a, b) => a.localeCompare(b))
							.forEach((moveName) => {
								//#region Generation 3
								if (data.generation3.dreamworldMoves) {
									data.generation3.dreamworldMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation3.eggMoves) {
									data.generation3.eggMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation3.eventMoves) {
									data.generation3.eventMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation3.tmMoves) {
									data.generation3.tmMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation3.tutorMoves) {
									data.generation3.tutorMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation3.virtualTransferMoves) {
									data.generation3.virtualTransferMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation3.levelUpMoves) {
									data.generation3.levelUpMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}
								//#endregion

								//#region Generation 4
								if (data.generation4.dreamworldMoves) {
									data.generation4.dreamworldMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation4.eggMoves) {
									data.generation4.eggMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation4.eventMoves) {
									data.generation4.eventMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation4.tmMoves) {
									data.generation4.tmMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation4.tutorMoves) {
									data.generation4.tutorMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation4.virtualTransferMoves) {
									data.generation4.virtualTransferMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation4.levelUpMoves) {
									data.generation4.levelUpMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}
								//#endregion

								//#region Generation 5
								if (data.generation5.dreamworldMoves) {
									data.generation5.dreamworldMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation5.eggMoves) {
									data.generation5.eggMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation5.eventMoves) {
									data.generation5.eventMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation5.tmMoves) {
									data.generation5.tmMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation5.tutorMoves) {
									data.generation5.tutorMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation5.virtualTransferMoves) {
									data.generation5.virtualTransferMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation5.levelUpMoves) {
									data.generation5.levelUpMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}
								//#endregion

								//#region Generation 6
								if (data.generation6.dreamworldMoves) {
									data.generation6.dreamworldMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation6.eggMoves) {
									data.generation6.eggMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation6.eventMoves) {
									data.generation6.eventMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation6.tmMoves) {
									data.generation6.tmMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation6.tutorMoves) {
									data.generation6.tutorMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation6.virtualTransferMoves) {
									data.generation6.virtualTransferMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation6.levelUpMoves) {
									data.generation6.levelUpMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}
								//#endregion

								//#region Generation 7
								if (data.generation7.dreamworldMoves) {
									data.generation7.dreamworldMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation7.eggMoves) {
									data.generation7.eggMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation7.eventMoves) {
									data.generation7.eventMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation7.tmMoves) {
									data.generation7.tmMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation7.tutorMoves) {
									data.generation7.tutorMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation7.virtualTransferMoves) {
									data.generation7.virtualTransferMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation7.levelUpMoves) {
									data.generation7.levelUpMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}
								//#endregion

								//#region Generation 8
								if (data.generation8.dreamworldMoves) {
									data.generation8.dreamworldMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation8.eggMoves) {
									data.generation8.eggMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation8.eventMoves) {
									data.generation8.eventMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation8.tmMoves) {
									data.generation8.tmMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation8.tutorMoves) {
									data.generation8.tutorMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation8.virtualTransferMoves) {
									data.generation8.virtualTransferMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}

								if (data.generation8.levelUpMoves) {
									data.generation8.levelUpMoves
										.filter((learnset) => {
											return learnset.move.name == moveName;
										})
										.forEach((move) => {
											moves.push(move.move);
										});
								}
								//#endregion

								this.graphqlService.getEvolutions().subscribe((result) => {
									if (result) {
										result.forEach((evos) => {
											if (evos.learnsets) {
												//#region Generation 3
												if (evos.learnsets.generation3.dreamworldMoves) {
													evos.learnsets.generation3.dreamworldMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation3.eggMoves) {
													evos.learnsets.generation3.eggMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation3.eventMoves) {
													evos.learnsets.generation3.eventMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation3.tmMoves) {
													evos.learnsets.generation3.tmMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation3.tutorMoves) {
													evos.learnsets.generation3.tutorMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation3.virtualTransferMoves) {
													evos.learnsets.generation3.virtualTransferMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation3.levelUpMoves) {
													evos.learnsets.generation3.levelUpMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}
												//#endregion

												//#region Generation 4
												if (evos.learnsets.generation4.dreamworldMoves) {
													evos.learnsets.generation4.dreamworldMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation4.eggMoves) {
													evos.learnsets.generation4.eggMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation4.eventMoves) {
													evos.learnsets.generation4.eventMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation4.tmMoves) {
													evos.learnsets.generation4.tmMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation4.tutorMoves) {
													evos.learnsets.generation4.tutorMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation4.virtualTransferMoves) {
													evos.learnsets.generation4.virtualTransferMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation4.levelUpMoves) {
													evos.learnsets.generation4.levelUpMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}
												//#endregion

												//#region Generation 5
												if (evos.learnsets.generation5.dreamworldMoves) {
													evos.learnsets.generation5.dreamworldMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation5.eggMoves) {
													evos.learnsets.generation5.eggMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation5.eventMoves) {
													evos.learnsets.generation5.eventMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation5.tmMoves) {
													evos.learnsets.generation5.tmMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation5.tutorMoves) {
													evos.learnsets.generation5.tutorMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation5.virtualTransferMoves) {
													evos.learnsets.generation5.virtualTransferMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation5.levelUpMoves) {
													evos.learnsets.generation5.levelUpMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}
												//#endregion

												//#region Generation 6
												if (evos.learnsets.generation6.dreamworldMoves) {
													evos.learnsets.generation6.dreamworldMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation6.eggMoves) {
													evos.learnsets.generation6.eggMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation6.eventMoves) {
													evos.learnsets.generation6.eventMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation6.tmMoves) {
													evos.learnsets.generation6.tmMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation6.tutorMoves) {
													evos.learnsets.generation6.tutorMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation6.virtualTransferMoves) {
													evos.learnsets.generation6.virtualTransferMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation6.levelUpMoves) {
													evos.learnsets.generation6.levelUpMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}
												//#endregion

												//#region Generation 7
												if (evos.learnsets.generation7.dreamworldMoves) {
													evos.learnsets.generation7.dreamworldMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation7.eggMoves) {
													evos.learnsets.generation7.eggMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation7.eventMoves) {
													evos.learnsets.generation7.eventMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation7.tmMoves) {
													evos.learnsets.generation7.tmMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation7.tutorMoves) {
													evos.learnsets.generation7.tutorMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation7.virtualTransferMoves) {
													evos.learnsets.generation7.virtualTransferMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation7.levelUpMoves) {
													evos.learnsets.generation7.levelUpMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}
												//#endregion

												//#region Generation 8
												if (evos.learnsets.generation8.dreamworldMoves) {
													evos.learnsets.generation8.dreamworldMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation8.eggMoves) {
													evos.learnsets.generation8.eggMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation8.eventMoves) {
													evos.learnsets.generation8.eventMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation8.tmMoves) {
													evos.learnsets.generation8.tmMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation8.tutorMoves) {
													evos.learnsets.generation8.tutorMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation8.virtualTransferMoves) {
													evos.learnsets.generation8.virtualTransferMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (evos.learnsets.generation8.levelUpMoves) {
													evos.learnsets.generation8.levelUpMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}
												//#endregion
											}
										});
									}
								});

								this.graphqlService.getPreEvolutions().subscribe((result) => {
									if (result) {
										result.forEach((preevos) => {
											if (preevos.learnsets) {
												//#region Generation 3
												if (preevos.learnsets.generation3.dreamworldMoves) {
													preevos.learnsets.generation3.dreamworldMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation3.eggMoves) {
													preevos.learnsets.generation3.eggMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation3.eventMoves) {
													preevos.learnsets.generation3.eventMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation3.tmMoves) {
													preevos.learnsets.generation3.tmMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation3.tutorMoves) {
													preevos.learnsets.generation3.tutorMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (
													preevos.learnsets.generation3.virtualTransferMoves
												) {
													preevos.learnsets.generation3.virtualTransferMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation3.levelUpMoves) {
													preevos.learnsets.generation3.levelUpMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}
												//#endregion

												//#region Generation 4
												if (preevos.learnsets.generation4.dreamworldMoves) {
													preevos.learnsets.generation4.dreamworldMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation4.eggMoves) {
													preevos.learnsets.generation4.eggMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation4.eventMoves) {
													preevos.learnsets.generation4.eventMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation4.tmMoves) {
													preevos.learnsets.generation4.tmMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation4.tutorMoves) {
													preevos.learnsets.generation4.tutorMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (
													preevos.learnsets.generation4.virtualTransferMoves
												) {
													preevos.learnsets.generation4.virtualTransferMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation4.levelUpMoves) {
													preevos.learnsets.generation4.levelUpMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}
												//#endregion

												//#region Generation 5
												if (preevos.learnsets.generation5.dreamworldMoves) {
													preevos.learnsets.generation5.dreamworldMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation5.eggMoves) {
													preevos.learnsets.generation5.eggMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation5.eventMoves) {
													preevos.learnsets.generation5.eventMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation5.tmMoves) {
													preevos.learnsets.generation5.tmMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation5.tutorMoves) {
													preevos.learnsets.generation5.tutorMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (
													preevos.learnsets.generation5.virtualTransferMoves
												) {
													preevos.learnsets.generation5.virtualTransferMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation5.levelUpMoves) {
													preevos.learnsets.generation5.levelUpMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}
												//#endregion

												//#region Generation 6
												if (preevos.learnsets.generation6.dreamworldMoves) {
													preevos.learnsets.generation6.dreamworldMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation6.eggMoves) {
													preevos.learnsets.generation6.eggMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation6.eventMoves) {
													preevos.learnsets.generation6.eventMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation6.tmMoves) {
													preevos.learnsets.generation6.tmMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation6.tutorMoves) {
													preevos.learnsets.generation6.tutorMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (
													preevos.learnsets.generation6.virtualTransferMoves
												) {
													preevos.learnsets.generation6.virtualTransferMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation6.levelUpMoves) {
													preevos.learnsets.generation6.levelUpMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}
												//#endregion

												//#region Generation 7
												if (preevos.learnsets.generation7.dreamworldMoves) {
													preevos.learnsets.generation7.dreamworldMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation7.eggMoves) {
													preevos.learnsets.generation7.eggMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation7.eventMoves) {
													preevos.learnsets.generation7.eventMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation7.tmMoves) {
													preevos.learnsets.generation7.tmMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation7.tutorMoves) {
													preevos.learnsets.generation7.tutorMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (
													preevos.learnsets.generation7.virtualTransferMoves
												) {
													preevos.learnsets.generation7.virtualTransferMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation7.levelUpMoves) {
													preevos.learnsets.generation7.levelUpMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}
												//#endregion

												//#region Generation 8
												if (preevos.learnsets.generation8.dreamworldMoves) {
													preevos.learnsets.generation8.dreamworldMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation8.eggMoves) {
													preevos.learnsets.generation8.eggMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation8.eventMoves) {
													preevos.learnsets.generation8.eventMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation8.tmMoves) {
													preevos.learnsets.generation8.tmMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation8.tutorMoves) {
													preevos.learnsets.generation8.tutorMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (
													preevos.learnsets.generation8.virtualTransferMoves
												) {
													preevos.learnsets.generation8.virtualTransferMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}

												if (preevos.learnsets.generation8.levelUpMoves) {
													preevos.learnsets.generation8.levelUpMoves
														.filter((learnset) => {
															return learnset.move.name == moveName;
														})
														.forEach((move) => {
															moves.push(move.move);
														});
												}
												//#endregion
											}

											if (preevos.evolutions) {
												preevos.evolutions.forEach((evos) => {
													if (evos.learnsets) {
														//#region Generation 3
														if (evos.learnsets.generation3.dreamworldMoves) {
															evos.learnsets.generation3.dreamworldMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation3.eggMoves) {
															evos.learnsets.generation3.eggMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation3.eventMoves) {
															evos.learnsets.generation3.eventMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation3.tmMoves) {
															evos.learnsets.generation3.tmMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation3.tutorMoves) {
															evos.learnsets.generation3.tutorMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (
															evos.learnsets.generation3.virtualTransferMoves
														) {
															evos.learnsets.generation3.virtualTransferMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation3.levelUpMoves) {
															evos.learnsets.generation3.levelUpMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}
														//#endregion

														//#region Generation 4
														if (evos.learnsets.generation4.dreamworldMoves) {
															evos.learnsets.generation4.dreamworldMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation4.eggMoves) {
															evos.learnsets.generation4.eggMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation4.eventMoves) {
															evos.learnsets.generation4.eventMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation4.tmMoves) {
															evos.learnsets.generation4.tmMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation4.tutorMoves) {
															evos.learnsets.generation4.tutorMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (
															evos.learnsets.generation4.virtualTransferMoves
														) {
															evos.learnsets.generation4.virtualTransferMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation4.levelUpMoves) {
															evos.learnsets.generation4.levelUpMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}
														//#endregion

														//#region Generation 5
														if (evos.learnsets.generation5.dreamworldMoves) {
															evos.learnsets.generation5.dreamworldMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation5.eggMoves) {
															evos.learnsets.generation5.eggMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation5.eventMoves) {
															evos.learnsets.generation5.eventMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation5.tmMoves) {
															evos.learnsets.generation5.tmMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation5.tutorMoves) {
															evos.learnsets.generation5.tutorMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (
															evos.learnsets.generation5.virtualTransferMoves
														) {
															evos.learnsets.generation5.virtualTransferMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation5.levelUpMoves) {
															evos.learnsets.generation5.levelUpMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}
														//#endregion

														//#region Generation 6
														if (evos.learnsets.generation6.dreamworldMoves) {
															evos.learnsets.generation6.dreamworldMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation6.eggMoves) {
															evos.learnsets.generation6.eggMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation6.eventMoves) {
															evos.learnsets.generation6.eventMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation6.tmMoves) {
															evos.learnsets.generation6.tmMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation6.tutorMoves) {
															evos.learnsets.generation6.tutorMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (
															evos.learnsets.generation6.virtualTransferMoves
														) {
															evos.learnsets.generation6.virtualTransferMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation6.levelUpMoves) {
															evos.learnsets.generation6.levelUpMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}
														//#endregion

														//#region Generation 7
														if (evos.learnsets.generation7.dreamworldMoves) {
															evos.learnsets.generation7.dreamworldMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation7.eggMoves) {
															evos.learnsets.generation7.eggMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation7.eventMoves) {
															evos.learnsets.generation7.eventMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation7.tmMoves) {
															evos.learnsets.generation7.tmMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation7.tutorMoves) {
															evos.learnsets.generation7.tutorMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (
															evos.learnsets.generation7.virtualTransferMoves
														) {
															evos.learnsets.generation7.virtualTransferMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation7.levelUpMoves) {
															evos.learnsets.generation7.levelUpMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}
														//#endregion

														//#region Generation 8
														if (evos.learnsets.generation8.dreamworldMoves) {
															evos.learnsets.generation8.dreamworldMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation8.eggMoves) {
															evos.learnsets.generation8.eggMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation8.eventMoves) {
															evos.learnsets.generation8.eventMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation8.tmMoves) {
															evos.learnsets.generation8.tmMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation8.tutorMoves) {
															evos.learnsets.generation8.tutorMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (
															evos.learnsets.generation8.virtualTransferMoves
														) {
															evos.learnsets.generation8.virtualTransferMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}

														if (evos.learnsets.generation8.levelUpMoves) {
															evos.learnsets.generation8.levelUpMoves
																.filter((learnset) => {
																	return learnset.move.name == moveName;
																})
																.forEach((move) => {
																	moves.push(move.move);
																});
														}
														//#endregion
													}
												});
											}
										});
									}
								});
							});
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
