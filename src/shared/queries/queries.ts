import { gql } from 'apollo-angular';

export const getPokemon = gql`
	query GetPokemon($pokemon: PokemonEnum!) {
		getPokemon(pokemon: $pokemon) {
			...FullData
		}
	}

	fragment GenerationalPokemonLearnsetFragment on GenerationalPokemonLearnset {
		generation3 {
			...PokemonLearnsetFragment
		}
		generation4 {
			...PokemonLearnsetFragment
		}
		generation5 {
			...PokemonLearnsetFragment
		}
		generation6 {
			...PokemonLearnsetFragment
		}
		generation7 {
			...PokemonLearnsetFragment
		}
		generation8 {
			...PokemonLearnsetFragment
		}
	}

	fragment PokemonLearnsetFragment on PokemonLearnset {
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
			...LearnsetLevelUpMoveFragment
		}
	}

	fragment LearnsetLevelUpMoveFragment on LearnsetLevelUpMove {
		generation
		level
		move {
			...MoveFragment
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

	fragment AbilitiesFragment on Abilities {
		first {
			...AbilityFragment
		}
		second {
			...AbilityFragment
		}
		hidden {
			...AbilityFragment
		}
	}

	fragment AbilityFragment on Ability {
		name
		key
		desc
		shortDesc
	}

	fragment PokemonTypeFragment on PokemonType {
		name
	}

	fragment StatsFragment on Stats {
		hp
		attack
		defense
		specialattack
		specialdefense
		speed
	}

	fragment FullDataFragmentWithoutNested on Pokemon {
		key
		forme
		num
		otherFormes
		shinySprite
		species
		sprite
		types {
			...PokemonTypeFragment
		}
		baseStats {
			...StatsFragment
		}
		baseStatsTotal
	}

	fragment FullDataFragment on Pokemon {
		abilities {
			...AbilitiesFragment
		}
		learnsets {
			...GenerationalPokemonLearnsetFragment
		}
		...FullDataFragmentWithoutNested
	}

	fragment FullData on Pokemon {
		...FullDataFragment
		evolutions {
			...FullDataFragment
			evolutions {
				...FullDataFragment
			}
			preevolutions {
				...FullDataFragment
			}
		}
		preevolutions {
			...FullDataFragment
			evolutions {
				...FullDataFragment
			}
			preevolutions {
				...FullDataFragment
			}
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
