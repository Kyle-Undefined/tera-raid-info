export interface Raid {
	pokemon: { [key: string]: Pokemon };
}

export interface Pokemon {
	type: number[];
	ability: number[];
	hiddenability?: number;
	stats: Stats;
	moves: number[];
	dex: string;
	herbs: number[];
}

export interface Stats {
	hp: number;
	attack: number;
	defense: number;
	spatk: number;
	spdef: number;
	speed: number;
}

export function emptyRaid(options?: Partial<Raid>): Raid {
	const defaults = {
		pokemon: {},
	};

	return {
		...defaults,
		...options,
	};
}

export function emptyPokemon(options?: Partial<Pokemon>): Pokemon {
	const defaults = {
		type: [],
		ability: [],
		stats: {
			hp: 0,
			attack: 0,
			defense: 0,
			spatk: 0,
			spdef: 0,
			speed: 0,
		},
		moves: [],
		dex: '',
		herbs: [],
	};

	return {
		...defaults,
		...options,
	};
}
