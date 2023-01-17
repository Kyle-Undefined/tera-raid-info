import { gql } from 'apollo-angular';

export const getPokemon = gql`
	fragment GenerationalPokemonLearnsetFragment on GenerationalPokemonLearnset {
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
		move {
			...MoveFragment
		}
	}

	fragment MoveFragment on Move {
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
		num
		shinySprite
		sprite
		types {
			...PokemonTypeFragment
		}
		baseStats {
			...StatsFragment
		}
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
	}

	query GetPokemon($pokemon: PokemonEnum!) {
		getPokemon(pokemon: $pokemon) {
			...FullData
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
