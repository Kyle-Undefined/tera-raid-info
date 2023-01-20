import { gql } from 'apollo-angular';

export const getPokemon = gql`
	query GetPokemon($pokemon: PokemonEnum!) {
		getPokemon(pokemon: $pokemon) {
			abilities {
				first {
					name
					key
					desc
					shortDesc
				}
				second {
					name
					key
					desc
					shortDesc
				}
				hidden {
					name
					key
					desc
					shortDesc
				}
			}
			key
			num
			types {
				name
			}
			baseStats {
				hp
				attack
				defense
				specialattack
				specialdefense
				speed
			}
			learnsets {
				generation8 {
					dreamworldMoves {
						...LearnsetMoveFragment
					}
					eggMoves {
						...LearnsetMoveFragment
					}
					eventMoves {
						...LearnsetMoveFragment
					}
					tmMoves {
						...LearnsetMoveFragment
					}
					tutorMoves {
						...LearnsetMoveFragment
					}
					virtualTransferMoves {
						...LearnsetMoveFragment
					}
					levelUpMoves {
						generation
						move {
							...MoveFragment
						}
					}
				}
			}
		}
	}

	fragment MoveFragment on Move {
		key
		accuracy
		basePower
		category
		desc
		name
		pp
		priority
		shortDesc
		target
		type
	}
	fragment LearnsetMoveFragment on LearnsetMove {
		generation
		move {
			...MoveFragment
		}
	}
`;

export const getMove = gql`
	query getMove($move: MovesEnum!) {
		getMove(move: $move) {
			key
			name
			shortDesc
			type
			basePower
			pp
			category
			accuracy
			priority
			target
			desc
		}
	}
`;
