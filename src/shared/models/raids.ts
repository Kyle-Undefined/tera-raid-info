type Raid = {
	name: string;
	formName?: string;
	imageAlt?: string;
	region: RaidRegion;
	info: RaidInfo;
};

type RaidInfo = {
	moves: string[];
	specialMoves?: string[];
	actions: RaidAction[];
	herbs: HerbaMystica[];
};

export type RaidAction = {
	type: RaidActionType;
	threshold: number;
	action: string;
};

export enum RaidRegion {
	Paldea = 'Paldea',
	Kitakami = 'Kitakami',
	Terarium = 'Terarium',
}

enum RaidActionType {
	Time = 'Time',
	HP = 'HP',
}

export type HerbaMystica = {
	name: string;
	chance: number;
};

export const FiveStarRaids: Raid[] = [
	{
		name: 'Abomasnow',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Energy Ball',
				'Ice Punch',
				'Ice Shard',
				'Leer',
				'Blizzard',
				'Snowscape',
				'Aurora Veil',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Blizzard' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 45, action: 'Uses Snowscape' },
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Aurora Veil' },
			],
		},
	},
	{
		name: 'Altaria',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Dragon Pulse',
				'Hurricane',
				'Sing',
				'Mist',
				'Safeguard',
				'Cotton Guard',
			],
			herbs: [{ name: 'Sour', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Safeguard' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 45, action: 'Uses Cotton Guard' },
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Sing' },
			],
		},
	},
	{
		name: 'Amoonguss',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Energy Ball',
				'Sludge Bomb',
				'Spore',
				'Clear Smog',
				'Grassy Terrain',
			],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Uses Grassy Terrain',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Spore' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Spore' },
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Annihilape',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Shadow Claw',
				'Close Combat',
				'Outrage',
				'Leer',
				'Taunt',
				'Bulk Up',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Taunt' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Bulk Up' },
			],
		},
	},
	{
		name: 'Appletun',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Apple Acid',
				'Dragon Pulse',
				'Giga Drain',
				'Body Press',
				'',
				'Growth',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Growth' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Arboliva',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Energy Ball',
				'Hyper Voice',
				'Earth Power',
				'Charm',
				'Sunny Day',
				'Growth',
				'Leaf Storm',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Sunny Day' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Growth' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Leaf Storm' },
			],
		},
	},
	{
		name: 'Arcanine',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Flamethrower',
				'Crunch',
				'Extreme Speed',
				'Fire Fang',
				'Sunny Day',
				'Leer',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Sunny Day' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Leer' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Sunny Day' },
			],
		},
	},
	{
		name: 'Armarouge',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Armor Cannon',
				'Psychic',
				'Night Shade',
				'Will-O-Wisp',
				'Sunny Day',
				'Calm Mind',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 80,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Sunny Day' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Calm Mind' },
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Avalugg',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Icicle Crash',
				'Double-Edge',
				'Crunch',
				'Ice Fang',
				'Snowscape',
				'Iron Defense',
			],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Snowscape' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 45, action: 'Uses Snowscape' },
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Iron Defense' },
			],
		},
	},
	{
		name: 'Baxcalibur',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Dragon Claw',
				'Icicle Crash',
				'Ice Shard',
				'Body Press',
				'Snowscape',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Snowscape' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Snowscape' },
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Blissey',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Dazzling Gleam',
				'Hyper Voice',
				'Sing',
				'Seismic Toss',
				'Gravity',
			],
			specialMoves: ['Seismic Toss', 'Gravity'],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Gravity' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Bombirdier',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Rock Slide',
				'Sucker Punch',
				'Brave Bird',
				'Torment',
				'Knock Off',
				'Feather Dance',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Knock Off' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Uses Feather Dance',
				},
			],
		},
	},
	{
		name: 'Brambleghast',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Giga Drain',
				'Shadow Ball',
				'Power Whip',
				'Infestation',
				'Grassy Terrain',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 80,
					action: 'Uses Grassy Terrain',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Uses Grassy Terrain',
				},
			],
		},
	},
	{
		name: 'Braviary',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Acrobatics',
				'Crush Claw',
				'Superpower',
				'Air Slash',
				'Tailwind',
				'Hone Claws',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Tailwind' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 45, action: 'Uses Hone Claws' },
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Breloom',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Seed Bomb',
				'Mach Punch',
				'Worry Seed',
				'Headbutt',
				'Grassy Terrain',
				'Spore',
			],
			specialMoves: ['Spore'],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 80,
					action: 'Uses Grassy Terrain',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Spore' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Bronzong',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Flash Cannon',
				'Extrasensory',
				'Metal Sound',
				'Payback',
				'Rain Dance',
				'Calm Mind',
				'Reflect',
			],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Rain Dance' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 45, action: 'Uses Calm Mind' },
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Reflect' },
			],
		},
	},
	{
		name: 'Camerupt',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Flamethrower', 'Earth Power', 'Yawn', 'Eruption', 'Sunny Day'],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Sunny Day' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Sunny Day' },
			],
		},
	},
	{
		name: 'Ceruledge',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Bitter Blade',
				'Shadow Claw',
				'Psycho Cut',
				'Will-O-Wisp',
				'Sunny Day',
				'Swords Dance',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 80,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Sunny Day' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Swords Dance' },
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Cetitan',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Ice Spinner', 'Liquidation', 'Yawn', 'Entrainment', 'Snowscape'],
			specialMoves: ['Yawn', 'Entrainment'],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Snowscape' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Yawn' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Snowscape' },
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Clawitzer',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Water Pulse',
				'Dragon Pulse',
				'Aura Sphere',
				'Crabhammer',
				'Rain Dance',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Rain Dance' },
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Water Pulse' },
			],
		},
	},
	{
		name: 'Cloyster',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Icicle Spear',
				'Hydro Pump',
				'Ice Shard',
				'Supersonic',
				'Shell Smash',
			],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Shell Smash' },
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Coalossal',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Heat Crash',
				'Stone Edge',
				'Incinerate',
				'Ancient Power',
				'Sandstorm',
				'Tar Shot',
				'Fire Blast',
			],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Sandstorm' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Tar Shot' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Fire Blast' },
			],
		},
	},
	{
		name: 'Copperajah',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Heavy Slam',
				'Strength',
				'Curse',
				'High Horsepower',
				'Sandstorm',
				'Iron Defense',
			],
			specialMoves: ['Curse'],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Sandstorm' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Iron Defense' },
			],
		},
	},
	{
		name: 'Corviknight',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Steel Wing',
				'Drill Peck',
				'Taunt',
				'Body Press',
				'Iron Defense',
				'Hone Claws',
			],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Iron Defense' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Hone Claws' },
			],
		},
	},
	{
		name: 'Delibird',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Present', 'Drill Peck', 'Ice Punch', 'Blizzard', 'Snowscape'],
			herbs: [{ name: 'Sweet', chance: 2.36 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Snowscape' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Present' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Present' },
			],
		},
	},
	{
		name: 'Ditto',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Transform'],
			herbs: [{ name: 'Sweet', chance: 2.36 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Dondozo',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Order Up',
				'Waterfall',
				'Heavy Slam',
				'Tickle',
				'Rain Dance',
				'Stockpile',
			],
			specialMoves: ['Stockpile'],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Rain Dance' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Stockpile' },
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Dragalge',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Dragon Pulse',
				'Sludge Bomb',
				'Water Pulse',
				'Toxic',
				'Acid Spray',
				'Draco Meteor',
			],
			herbs: [{ name: 'Sour', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Acid Spray' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Draco Meteor' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Draco Meteor' },
			],
		},
	},
	{
		name: 'Dragapult',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Shadow Ball',
				'Dragon Darts',
				'Thunderbolt',
				'Hex',
				'Reflect',
				'Light Screen',
			],
			herbs: [{ name: 'Sweet', chance: 2.36 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Reflect' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Light Screen' },
			],
		},
	},
	{
		name: 'Dragonite',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Dragon Rush',
				'Aerial Ace',
				'Extreme Speed',
				'Hurricane',
				'Safeguard',
				'Dragon Dance',
				'Rain Dance',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Safeguard' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 45, action: 'Uses Dragon Dance' },
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Rain Dance' },
			],
		},
	},
	{
		name: 'Drifblim',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Hex', 'Air Slash', 'Thunder Wave', 'Shadow Ball', 'Will-O-Wisp'],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Uses Will-O-Wisp',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Eelektross',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Wild Charge',
				'Flamethrower',
				'Discharge',
				'Crush Claw',
				'Ion Deluge',
				'Thunder Wave',
				'Coil',
			],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Ion Deluge' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Thunder Wave' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Thunder Wave' },
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Coil' },
			],
		},
	},
	{
		name: 'Eevee',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Tera Blast',
				'Take Down',
				'Shadow Ball',
				'Tickle',
				'Yawn',
				'Calm Mind',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Yawn' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Calm Mind' },
			],
		},
	},
	{
		name: 'Falinks',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Megahorn', 'Reversal', 'Headbutt', 'Brick Break', 'No Retreat'],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses No Retreat' },
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Flapple',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Grav Apple',
				'Dragon Breath',
				'Dragon Rush',
				'Trailblaze',
				'Grassy Terrain',
				'Iron Defense',
				'Dragon Dance',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Uses Grassy Terrain',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Iron Defense' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Dragon Dance' },
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Florges',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Petal Dance',
				'Moonblast',
				'Psychic',
				'Safeguard',
				'Grassy Terrain',
				'Calm Mind',
			],
			herbs: [{ name: 'Sour', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Uses Grassy Terrain',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Calm Mind' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Uses Grassy Terrain',
				},
			],
		},
	},
	{
		name: 'Froslass',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Frost Breath',
				'Shadow Ball',
				'Scary Face',
				'Draining Kiss',
				'Snowscape',
				'Disable',
				'Aurora Veil',
			],
			specialMoves: ['Disable'],
			herbs: [{ name: 'Sweet', chance: 2.36 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Snowscape' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Disable' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Snowscape' },
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Aurora Veil' },
			],
		},
	},
	{
		name: 'Gallade',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Psycho Cut',
				'Brick Break',
				'Shadow Sneak',
				'Fury Cutter',
				'Hypnosis',
				'Disable',
				'Psychic Terrain',
			],
			specialMoves: ['Disable', 'Shadow Sneak'],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Hypnosis' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Disable' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Uses Psychic Terrain',
				},
			],
		},
	},
	{
		name: 'Garchomp',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Earthquake',
				'Dragon Claw',
				'Iron Head',
				'Slash',
				'Sandstorm',
				'Bulldoze',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Sandstorm' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Bulldoze' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Sandstorm' },
			],
		},
	},
	{
		name: 'Gardevoir',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Psychic',
				'Moonblast',
				'Disable',
				'Draining Kiss',
				'Misty Terrain',
				'Calm Mind',
				'Psychic Terrain',
			],
			specialMoves: ['Disable'],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Uses Misty Terrain',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Calm Mind' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 35,
					action: 'Uses Psychic Terrain',
				},
			],
		},
	},
	{
		name: 'Garganacl',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Salt Cure', 'Rock Slide', 'Hammer Arm', 'Sandstorm'],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Sandstorm' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Rock Slide' },
			],
		},
	},
	{
		name: 'Gengar',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Shadow Ball', 'Sludge Bomb', 'Confuse Ray', 'Spite', 'Hypnosis'],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Hypnosis' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Hypnosis' },
			],
		},
	},
	{
		name: 'Glalie',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Freeze-Dry',
				'Crunch',
				'Headbutt',
				'Frost Breath',
				'Snowscape',
				'Disable',
			],
			specialMoves: ['Disable'],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Snowscape' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Disable' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 85, action: 'Uses Snowscape' },
			],
		},
	},
	{
		name: 'Glimmora',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Power Gem',
				'Sludge Bomb',
				'Mortal Spin',
				'Ancient Power',
				'Sandstorm',
				'Tera Blast',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Sandstorm' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Tera Blast' },
			],
		},
	},
	{
		name: 'Goodra',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Water Pulse',
				'Dragon Pulse',
				'Sludge Bomb',
				'Power Whip',
				'Rain Dance',
				'Draco Meteor',
				'Acid Armor',
			],
			specialMoves: ['Acid Armor'],
			herbs: [{ name: 'Sour', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Rain Dance' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Draco Meteor' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Acid Armor' },
			],
		},
	},
	{
		name: 'Gothitelle',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Psychic',
				'Thunder Wave',
				'Thunderbolt',
				'Stored Power',
				'Calm Mind',
				'Light Screen',
			],
			herbs: [{ name: 'Sour', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Calm Mind' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Calm Mind' },
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Light Screen' },
			],
		},
	},
	{
		name: 'Greedent',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Body Slam',
				'Body Press',
				'Bullet Seed',
				'Tail Whip',
				'Stockpile',
			],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Stockpile' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Stockpile' },
			],
		},
	},
	{
		name: 'Grimmsnarl',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Spirit Break',
				'False Surrender',
				'Scary Face',
				'Foul Play',
				'Light Screen',
				'Bulk Up',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 80,
					action: 'Uses Light Screen',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Bulk Up' },
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Gyarados',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Aqua Tail',
				'Twister',
				'Hurricane',
				'Crunch',
				'Scary Face',
				'Taunt',
				'Dragon Dance',
				'Rain Dance',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Scary Face' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Taunt' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 45, action: 'Uses Dragon Dance' },
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Rain Dance' },
			],
		},
	},
	{
		name: 'Hariyama',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Reversal',
				'Brick Break',
				'Brine',
				'Heavy Slam',
				'Scary Face',
				'Taunt',
				'Bulk Up',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Scary Face' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Taunt' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 45, action: 'Uses Bulk Up' },
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Hatterene',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Dazzling Gleam',
				'Psychic',
				'Dark Pulse',
				'Charm',
				'Misty Terrain',
				'Calm Mind',
				'Psychic Terrain',
			],
			herbs: [{ name: 'Sour', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Uses Misty Terrain',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Calm Mind' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Calm Mind' },
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Uses Psychic Terrain',
				},
			],
		},
	},
	{
		name: 'Haxorus',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Dragon Claw',
				'Crunch',
				'Giga Impact',
				'First Impression',
				'Harden',
				'Dragon Dance',
			],
			specialMoves: ['Harden', 'First Impression'],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Harden' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Dragon Dance' },
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Hippowdon',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Earthquake', 'Yawn', 'Rock Slide', 'Body Slam', 'Stockpile'],
			specialMoves: ['Stockpile'],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Yawn' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Stockpile' },
			],
		},
	},
	{
		name: 'Honchkrow',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Night Slash', 'Hurricane', 'Haze', 'Wing Attack', 'Nasty Plot'],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Nasty Plot' },
			],
		},
	},
	{
		name: 'Houndoom',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Flamethrower',
				'Crunch',
				'Taunt',
				'Will-O-Wisp',
				'Sunny Day',
				'Howl',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Sunny Day' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Howl' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Sunny Day' },
			],
		},
	},
	{
		name: 'Hydreigon',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Dark Pulse',
				'Dragon Pulse',
				'Scary Face',
				'Dragon Rush',
				'Taunt',
				'Reflect',
				'Nasty Plot',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Taunt' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Reflect' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Nasty Plot' },
			],
		},
	},
	{
		name: 'Indeedee (Male)',
		formName: 'indeedee',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Psychic',
				'Hyper Voice',
				'Shadow Ball',
				'Trick Room',
				'Play Nice',
				'Calm Mind',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Play Nice' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Calm Mind' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Calm Mind' },
			],
		},
	},
	{
		name: 'Indeedee (Female)',
		formName: 'indeedee',
		imageAlt: '-f',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Psychic',
				'Hyper Voice',
				'Shadow Ball',
				'Trick Room',
				'Play Nice',
				'Calm Mind',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Play Nice' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Calm Mind' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Calm Mind' },
			],
		},
	},
	{
		name: 'Kingambit',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Iron Head',
				'Night Slash',
				'Torment',
				'Slash',
				'Taunt',
				'Metal Burst',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Taunt' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Torment' },
				{
					type: RaidActionType.Time,
					threshold: 15,
					action: 'Uses Metal Burst',
				},
			],
		},
	},
	{
		name: 'Krookodile',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Earthquake',
				'Crunch',
				'Sand Tomb',
				'Counter',
				'Torment',
				'Hone Claws',
			],
			specialMoves: ['Counter'],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Torment' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Hone Claws' },
			],
		},
	},
	{
		name: 'Luxray',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Crunch',
				'Wild Charge',
				'Discharge',
				'Thunder Wave',
				'Electric Terrain',
				'Leer',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Uses Electric Terrain',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Leer' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 35,
					action: 'Uses Electric Terrain',
				},
			],
		},
	},
	{
		name: 'Mabosstiff',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Crunch', 'Play Rough', 'Take Down', 'Swagger', 'Taunt'],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Taunt' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Magnezone',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Thunderbolt',
				'Flash Cannon',
				'Tri Attack',
				'Thunder Wave',
				'Magnet Rise',
				'Electric Terrain',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Uses Magnet Rise',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Uses Electric Terrain',
				},
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Mimikyu',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Play Rough',
				'Shadow Claw',
				'Will-O-Wisp',
				'Shadow Sneak',
				'Light Screen',
				'Taunt',
			],
			herbs: [{ name: 'Sour', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Uses Light Screen',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Taunt' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Will-O-Wisp' },
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Mismagius',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Mystical Fire',
				'Shadow Ball',
				'Confuse Ray',
				'Taunt',
				'Light Screen',
				'Nasty Plot',
			],
			specialMoves: ['Light Screen'],
			herbs: [{ name: 'Sour', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Uses Light Screen',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Nasty Plot' },
			],
		},
	},
	{
		name: 'Mudsdale',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'High Horsepower',
				'Body Press',
				'Rock Smash',
				'Heavy Slam',
				'Scary Face',
				'Iron Defense',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Scary Face' },
				{
					type: RaidActionType.Time,
					threshold: 75,
					action: 'Uses Iron Defense',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Noivern',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Air Slash',
				'Dragon Pulse',
				'Acrobatics',
				'Boomburst',
				'Tailwind',
			],
			herbs: [{ name: 'Sweet', chance: 2.36 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Tailwind' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 45, action: 'Uses Tailwind' },
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Oranguru',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Facade',
				'Psychic',
				'Stored Power',
				'Yawn',
				'Calm Mind',
				'Light Screen',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Calm Mind' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Light Screen' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Calm Mind' },
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Calm Mind' },
			],
		},
	},
	{
		name: 'Orthworm',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Iron Head',
				'Earthquake',
				'Stomping Tantrum',
				'Wrap',
				'Sandstorm',
				'Coil',
			],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Sandstorm' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Coil' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Sandstorm' },
			],
		},
	},
	{
		name: 'Palafin',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Liquidation',
				'Acrobatics',
				'Charm',
				'Boomburst',
				'Rain Dance',
				'Bulk Up',
			],
			specialMoves: ['Boomburst'],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 85, action: 'Uses Rain Dance' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Bulk Up' },
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Passimian',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Reversal',
				'Rock Smash',
				'Facade',
				'Gunk Shot',
				'Taunt',
				'Trailblaze',
				'Bulk Up',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Taunt' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Trailblaze' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Bulk Up' },
			],
		},
	},
	{
		name: 'Pawmot',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Wild Charge',
				'Close Combat',
				'Nuzzle',
				'Sweet Kiss',
				'Double Shock',
			],
			specialMoves: ['Sweet Kiss'],
			herbs: [{ name: 'Sweet', chance: 2.36 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Nuzzle' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Double Shock' },
			],
		},
	},
	{
		name: 'Pincurchin',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Zing Zap',
				'Thunder',
				'Surf',
				'Poison Jab',
				'Rain Dance',
				'Electric Terrain',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Rain Dance' },
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Uses Electric Terrain',
				},
			],
		},
	},
	{
		name: 'Polteageist',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Shadow Ball',
				'Mega Drain',
				'Astonish',
				'Will-O-Wisp',
				'Shell Smash',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Shell Smash' },
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Raichu',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Discharge',
				'Iron Tail',
				'Charm',
				'Nuzzle',
				'Electric Terrain',
				'Thunder Wave',
			],
			herbs: [{ name: 'Sweet', chance: 2.36 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Uses Electric Terrain',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Thunder Wave' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 35,
					action: 'Uses Electric Terrain',
				},
			],
		},
	},
	{
		name: 'Revavroom',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Spin Out',
				'Taunt',
				'Gunk Shot',
				'Overheat',
				'Scary Face',
				'Shift Gear',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Scary Face' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Shift Gear' },
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Shift Gear' },
			],
		},
	},
	{
		name: 'Rotom',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Discharge',
				'Uproar',
				'Hex',
				'Thunder Wave',
				'Charge',
				'Eerie Impulse',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Charge' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Uses Eerie Impulse',
				},
			],
		},
	},
	{
		name: 'Sableye',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Shadow Claw',
				'Foul Play',
				'Will-O-Wisp',
				'Night Shade',
				'Flatter',
				'Torment',
			],
			herbs: [{ name: 'Sweet', chance: 2.36 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Flatter' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 45, action: 'Uses Torment' },
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Salamence',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Dragon Rush',
				'Aerial Ace',
				'Hyper Voice',
				'Draco Meteor',
				'Dragon Dance',
				'Focus Energy',
			],
			specialMoves: ['Dragon Rush'],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 45, action: 'Uses Dragon Dance' },
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Focus Energy' },
			],
		},
	},
	{
		name: 'Scizor',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Iron Head',
				'X-Scissor',
				'Bullet Punch',
				'Slash',
				'Iron Defense',
				'Focus Energy',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Uses Iron Defense',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Focus Energy' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Scyther',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Aerial Ace',
				'X-Scissor',
				'Slash',
				'Agility',
				'Focus Energy',
				'Swords Dance',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Uses Focus Energy',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 45, action: 'Uses Swords Dance' },
			],
		},
	},
	{
		name: 'Slaking',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Facade', 'Shadow Claw', 'Play Rough', 'Swagger', 'Encore'],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Encore' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
			],
		},
	},
	{
		name: 'Slowbro',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Zen Headbutt', 'Liquidation', 'Yawn', 'Water Pulse', 'Curse'],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Curse' },
				{ type: RaidActionType.HP, threshold: 70, action: 'Uses Yawn' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Curse' },
			],
		},
	},
	{
		name: 'Slowking',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Psychic',
				'Surf',
				'Yawn',
				'Water Pulse',
				'Psychic Terrain',
				'Calm Mind',
			],
			herbs: [{ name: 'Sour', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Uses Psychic Terrain',
				},
				{ type: RaidActionType.HP, threshold: 70, action: 'Uses Yawn' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Calm Mind' },
			],
		},
	},
	{
		name: 'Staraptor',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Close Combat', 'Brave Bird', 'Quick Attack', 'Double-Edge'],
			specialMoves: ['Double-Edge'],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Brave Bird' },
			],
		},
	},
	{
		name: 'Talonflame',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Acrobatics',
				'Flare Blitz',
				'Steel Wing',
				'Heat Wave',
				'Bulk Up',
			],
			herbs: [{ name: 'Sweet', chance: 2.36 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Bulk Up' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Bulk Up' },
			],
		},
	},
	{
		name: 'Tatsugiri (Curly)',
		formName: 'tatsugiri',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Water Pulse',
				'Dragon Pulse',
				'Rapid Spin',
				'Counter',
				'Chilling Water',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 80,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Uses Chilling Water',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Tatsugiri (Droopy)',
		formName: 'tatsugiri',
		imageAlt: '-d',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Water Pulse',
				'Dragon Pulse',
				'Rapid Spin',
				'Counter',
				'Chilling Water',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 80,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Uses Chilling Water',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Tatsugiri (Stretchy)',
		formName: 'tatsugiri',
		imageAlt: '-s',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Water Pulse',
				'Dragon Pulse',
				'Rapid Spin',
				'Counter',
				'Chilling Water',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 80,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Uses Chilling Water',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Tauros (Fire)',
		formName: 'taurospaldeablaze',
		imageAlt: '-b',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Flare Blitz',
				'Close Combat',
				'Flamethrower',
				'Headbutt',
				'Work Up',
				'Sunny Day',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Work Up' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Sunny Day' },
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Tauros (Water)',
		formName: 'taurospaldeaaqua',
		imageAlt: '-a',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Wave Crash',
				'Close Combat',
				'Surf',
				'Headbutt',
				'Work Up',
				'Rain Dance',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Work Up' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Rain Dance' },
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Tinkaton',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Gigaton Hammer',
				'Play Rough',
				'Brutal Swing',
				'Rock Smash',
				'Misty Terrain',
				'Thunder Wave',
				'Charm',
			],
			specialMoves: ['Charm', 'Misty Terrain'],
			herbs: [{ name: 'Sour', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 80,
					action: 'Uses Misty Terrain',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Thunder Wave' },
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Charm' },
			],
		},
	},
	{
		name: 'Toxtricity (Amped)',
		formName: 'toxtricity',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Overdrive',
				'Poison Jab',
				'Nuzzle',
				'Boomburst',
				'Electric Terrain',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Uses Electric Terrain',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Uses Electric Terrain',
				},
			],
		},
	},
	{
		name: 'Toxtricity (Low Key)',
		formName: 'toxtricity',
		imageAlt: '-l',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Overdrive',
				'Poison Jab',
				'Nuzzle',
				'Boomburst',
				'Electric Terrain',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Uses Electric Terrain',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Uses Electric Terrain',
				},
			],
		},
	},
	{
		name: 'Tsareena',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'High Jump Kick',
				'Power Whip',
				'Stomp',
				'Trop Kick',
				'Reflect',
				'Grassy Terrain',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Reflect' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Uses Grassy Terrain',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Uses Grassy Terrain',
				},
			],
		},
	},
	{
		name: 'Tyranitar',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Rock Slide',
				'Crunch',
				'Screech',
				'Dark Pulse',
				'Dragon Dance',
				'Sandstorm',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 45, action: 'Uses Dragon Dance' },
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Sandstorm' },
			],
		},
	},
	{
		name: 'Volcarona',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Fire Blast',
				'Bug Buzz',
				'Hurricane',
				'Will-O-Wisp',
				'Sunny Day',
				'Quiver Dance',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Sunny Day' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Quiver Dance' },
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Quiver Dance' },
			],
		},
	},
	{
		name: 'Weavile',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Ice Punch',
				'Night Slash',
				'Taunt',
				'Facade',
				'Reflect',
				'Swords Dance',
			],
			specialMoves: ['Reflect'],
			herbs: [{ name: 'Sweet', chance: 2.36 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Reflect' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Swords Dance' },
			],
		},
	},
	{
		name: 'Zoroark',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Night Daze',
				'Shadow Claw',
				'Taunt',
				'Hyper Voice',
				'Torment',
				'Nasty Plot',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Torment' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Nasty Plot' },
			],
		},
	},
	{
		name: 'Ambipom',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Double Hit',
				'Screech',
				'Fury Swipes',
				'Knock Off',
				'Trailblaze',
				'Sand Attack',
			],
			herbs: [{ name: 'Sweet', chance: 2.36 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Trailblaze' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Sand Attack' },
				{ type: RaidActionType.HP, threshold: 15, action: 'Uses Sand Attack' },
			],
		},
	},
	{
		name: 'Basculegion (Male)',
		formName: 'basculegion',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Liquidation',
				'Aqua Jet',
				'Shadow Ball',
				'Scary Face',
				'Rain Dance',
				'Wave Crash',
			],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 100,
					action: 'Uses Rain Dance',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Rain Dance' },
				{ type: RaidActionType.HP, threshold: 10, action: 'Uses Wave Crash' },
			],
		},
	},
	{
		name: 'Basculegion (Female)',
		formName: 'basculegion',
		imageAlt: '-f',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Liquidation',
				'Aqua Jet',
				'Shadow Ball',
				'Scary Face',
				'Rain Dance',
				'Hydro Pump',
			],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 100,
					action: 'Uses Rain Dance',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Rain Dance' },
				{ type: RaidActionType.HP, threshold: 10, action: 'Uses Hydro Pump' },
			],
		},
	},
	{
		name: 'Chandelure',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Shadow Ball',
				'Heat Wave',
				'Confuse Ray',
				'Flamethrower',
				'Sunny Day',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 95, action: 'Uses Sunny Day' },
				{
					type: RaidActionType.HP,
					threshold: 80,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Sunny Day' },
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Heat Wave' },
			],
		},
	},
	{
		name: 'Conkeldurr',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Hammer Arm',
				'Stone Edge',
				'Superpower',
				'Scary Face',
				'Bulk Up',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 90,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 65,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Bulk Up' },
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Bulk Up' },
			],
		},
	},
	{
		name: 'Dusknoir',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Fire Punch',
				'Brick Break',
				'Shadow Ball',
				'Shadow Punch',
				'Trick Room',
				'Poltergeist',
			],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{ type: RaidActionType.Time, threshold: 90, action: 'Uses Trick Room' },
				{
					type: RaidActionType.HP,
					threshold: 65,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Poltergeist' },
			],
		},
	},
	{
		name: 'Gliscor',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Poison Jab',
				'Earthquake',
				'Acrobatics',
				'X-Scissor',
				'Sandstorm',
				'Swords Dance',
			],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 100, action: 'Uses Sandstorm' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Swords Dance' },
				{ type: RaidActionType.Time, threshold: 15, action: 'Uses Sandstorm' },
			],
		},
	},
	{
		name: 'Golem',
		region: RaidRegion.Kitakami,
		info: {
			moves: ['Earthquake', 'Stone Edge', 'Heavy Slam', 'Defense Curl'],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 90,
					action: 'Uses Defense Curl',
				},
				{
					type: RaidActionType.Time,
					threshold: 70,
					action: 'Uses Defense Curl',
				},
				{
					type: RaidActionType.Time,
					threshold: 50,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Earthquake' },
			],
		},
	},
	{
		name: 'Kommo-o',
		formName: 'kommoo',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Brick Break',
				'Dragon Claw',
				'Boomburst',
				'Scary Face',
				'Clangorous Soul',
			],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 60,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Uses Clangorous Soul',
				},
				{
					type: RaidActionType.HP,
					threshold: 10,
					action: 'Uses Clangorous Soul',
				},
			],
		},
	},
	{
		name: 'Ludicolo',
		region: RaidRegion.Kitakami,
		info: {
			moves: ['Energy Ball', 'Surf', 'Fake Out', 'Trailblaze', 'Rain Dance'],
			herbs: [{ name: 'Sour', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 90, action: 'Uses Rain Dance' },
				{
					type: RaidActionType.HP,
					threshold: 65,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 10, action: 'Uses Surf' },
			],
		},
	},
	{
		name: 'Mamoswine',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Earthquake',
				'Blizzard',
				'Ice Shard',
				'Ancient Power',
				'Snowscape',
				'Amnesia',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 100, action: 'Uses Snowscape' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Amnesia' },
				{ type: RaidActionType.HP, threshold: 10, action: 'Uses Earthquake' },
			],
		},
	},
	{
		name: 'Mandibuzz',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Rock Tomb',
				'Dark Pulse',
				'Toxic',
				'Foul Play',
				'Taunt',
				'Nasty Plot',
			],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{ type: RaidActionType.Time, threshold: 90, action: 'Uses Taunt' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Nasty Plot' },
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Mienshao',
		region: RaidRegion.Kitakami,
		info: {
			moves: ['Aura Sphere', 'Poison Jab', 'Taunt', 'Acrobatics', 'Bulk Up'],
			herbs: [{ name: 'Sweet', chance: 2.36 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 90, action: 'Uses Taunt' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Bulk Up' },
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Bulk Up' },
			],
		},
	},
	{
		name: 'Milotic',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Chilling Water',
				'Surf',
				'Dragon Pulse',
				'Attract',
				'Rain Dance',
				'Hydro Pump',
			],
			herbs: [{ name: 'Sour', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 90, action: 'Uses Rain Dance' },
				{
					type: RaidActionType.HP,
					threshold: 65,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 35,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Hydro Pump' },
			],
		},
	},
	{
		name: 'Ninetales',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Flamethrower',
				'Extrasensory',
				'Will-O-Wisp',
				'Hypnosis',
				'Nasty Plot',
			],
			specialMoves: ['Hypnosis'],
			herbs: [{ name: 'Sour', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Nasty Plot' },
			],
		},
	},
	{
		name: 'Politoed',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Surf',
				'Hyper Voice',
				'Weather Ball',
				'Encore',
				'Rain Dance',
				'Hydro Pump',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 90,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Rain Dance' },
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Hydro Pump' },
			],
		},
	},
	{
		name: 'Poliwrath',
		region: RaidRegion.Kitakami,
		info: {
			moves: ['Liquidation', 'Brick Break', 'Haze', 'Hydro Pump', 'Rain Dance'],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 100,
					action: 'Uses Rain Dance',
				},
				{
					type: RaidActionType.HP,
					threshold: 70,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Hydro Pump' },
			],
		},
	},
	{
		name: 'Probopass',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Body Press',
				'Power Gem',
				'Flash Cannon',
				'Harden',
				'Gravity',
				'Zap Cannon',
			],
			specialMoves: ['Harden'],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 90, action: 'Uses Gravity' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Zap Cannon' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Zap Cannon' },
			],
		},
	},
	{
		name: 'Shiftry',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Fake Out',
				'Sucker Punch',
				'Leaf Blade',
				'Extrasensory',
				'Sunny Day',
				'Leaf Storm',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 90, action: 'Uses Sunny Day' },
				{
					type: RaidActionType.HP,
					threshold: 65,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 10, action: 'Uses Leaf Storm' },
			],
		},
	},
	{
		name: 'Sinistcha',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Energy Ball',
				'Shadow Ball',
				'Stun Spore',
				'Scald',
				'Grassy Terrain',
				'Matcha Gotcha',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 85,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Uses Grassy Terrain',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Uses Grassy Terrain',
				},
				{
					type: RaidActionType.HP,
					threshold: 15,
					action: 'Uses Matcha Gotcha',
				},
			],
		},
	},
	{
		name: 'Snorlax',
		region: RaidRegion.Kitakami,
		info: {
			moves: ['Body Slam', 'Heavy Slam', 'Bite', 'Mud-Slap', 'Curse'],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{ type: RaidActionType.Time, threshold: 100, action: 'Uses Curse' },
				{
					type: RaidActionType.HP,
					threshold: 70,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Trevenant',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Wood Hammer',
				'Shadow Claw',
				'Will-O-Wisp',
				'Hex',
				'Grassy Terrain',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 100,
					action: 'Uses Grassy Terrain',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Uses Grassy Terrain',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Will-O-Wisp' },
			],
		},
	},
	{
		name: 'Victreebel',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Sludge Bomb',
				'Power Whip',
				'Acid Spray',
				'Trailblaze',
				'Sunny Day',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 90,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Sunny Day' },
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Vikavolt',
		region: RaidRegion.Kitakami,
		info: {
			moves: ['Discharge', 'Bug Buzz', 'Solar Beam', 'Zap Cannon'],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 90, action: 'Uses Discharge' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Zap Cannon' },
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Zap Cannon' },
			],
		},
	},
	{
		name: 'Yanmega',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Bug Buzz',
				'Air Slash',
				'Quick Attack',
				'Hypnosis',
				'Supersonic',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 90,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 70,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Supersonic' },
			],
		},
	},
	{
		name: 'Alcremie',
		region: RaidRegion.Terarium,
		info: {
			moves: ['Dazzling Gleam', 'Psychic', 'Encore', 'Psyshock', 'Acid Armor'],
			herbs: [{ name: 'Sour', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Encore' },
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Acid Armor' },
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Acid Armor' },
				{
					type: RaidActionType.Time,
					threshold: 30,
					action: 'Reduce Tera Orb Charge',
				},
			],
		},
	},
	{
		name: 'Duraludon',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Flash Cannon',
				'Dragon Pulse',
				'Breaking Swipe',
				'Metal Sound',
				'Light Screen',
				'Draco Meteor',
				'Iron Defense',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 99, action: 'Uses Light Screen' },
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Draco Meteor' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 30,
					action: 'Uses Iron Defense',
				},
			],
		},
	},
	{
		name: 'Electivire',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Discharge',
				'Thunder Punch',
				'Fire Punch',
				'Ice Punch',
				'Thunder Wave',
				'Electric Terrain',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Thunder Wave' },
				{
					type: RaidActionType.HP,
					threshold: 60,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Uses Electric Terrain',
				},
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Discharge' },
			],
		},
	},
	{
		name: 'Excadrill',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Drill Run',
				'Iron Head',
				'X-Scissor',
				'Rapid Spin',
				'Sandstorm',
				'Earthquake',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 100, action: 'Uses Sandstorm' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Sandstorm' },
				{ type: RaidActionType.HP, threshold: 15, action: 'Uses Earthquake' },
			],
		},
	},
	{
		name: 'Exeggutor',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Psychic',
				'Energy Ball',
				'Uproar',
				'Bulldoze',
				'Sunny Day',
				'Growth',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 99, action: 'Uses Sunny Day' },
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Growth' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
			],
		},
	},
	{
		name: 'Flygon',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Dragon Pulse',
				'Scorching Sands',
				'Earthquake',
				'Flamethrower',
				'Sandstorm',
				'Boomburst',
			],
			herbs: [{ name: 'Sweet', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 100, action: 'Uses Sandstorm' },
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Boomburst' },
				{
					type: RaidActionType.Time,
					threshold: 30,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Boomburst' },
			],
		},
	},
	{
		name: 'Golurk',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Shadow Punch',
				'Drain Punch',
				'Heavy Slam',
				'Iron Defense',
				'Gravity',
				'Reflect',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Gravity' },
				{
					type: RaidActionType.HP,
					threshold: 70,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Reflect' },
			],
		},
	},
	{
		name: 'Hitmonchan',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Mach Punch',
				'Mega Punch',
				'Thunder Punch',
				'Throat Chop',
				'Focus Energy',
				'Bulk Up',
				'Close Combat',
			],
			herbs: [{ name: 'Sour', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 95, action: 'Uses Focus Energy' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Bulk Up' },
				{ type: RaidActionType.HP, threshold: 10, action: 'Uses Close Combat' },
			],
		},
	},
	{
		name: 'Hitmonlee',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Low Sweep',
				'Mega Kick',
				'Blaze Kick',
				'Scary Face',
				'Focus Energy',
				'Bulk Up',
				'Close Combat',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 95, action: 'Uses Focus Energy' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Bulk Up' },
				{ type: RaidActionType.HP, threshold: 10, action: 'Uses Close Combat' },
			],
		},
	},
	{
		name: 'Hitmontop',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Triple Kick',
				'Sucker Punch',
				'Gyro Ball',
				'Triple Axel',
				'Focus Energy',
				'Bulk Up',
				'Close Combat',
			],
			herbs: [{ name: 'Sweet', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 95, action: 'Uses Focus Energy' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Bulk Up' },
				{ type: RaidActionType.HP, threshold: 10, action: 'Uses Close Combat' },
			],
		},
	},
	{
		name: 'Kingdra',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Dragon Pulse',
				'Hydro Pump',
				'Flash Cannon',
				'Yawn',
				'Rain Dance',
				'Focus Energy',
			],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 100,
					action: 'Uses Rain Dance',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 45, action: 'Uses Focus Energy' },
			],
		},
	},
	{
		name: 'Lapras',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Ice Beam',
				'Freeze-Dry',
				'Sparkling Aria',
				'Body Press',
				'Sing',
				'Mist',
				'Snowscape',
			],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{ type: RaidActionType.HP, threshold: 95, action: 'Uses Sing' },
				{
					type: RaidActionType.HP,
					threshold: 70,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.Time, threshold: 60, action: 'Uses Mist' },
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Snowscape' },
			],
		},
	},
	{
		name: 'Magmortar',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Flamethrower',
				'Psychic',
				'Focus Blast',
				'Clear Smog',
				'Sunny Day',
				'Will-O-Wisp',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 100, action: 'Uses Sunny Day' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Will-O-Wisp' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Malamar',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Foul Play',
				'Psycho Cut',
				'Night Slash',
				'Taunt',
				'Topsy-Turvy',
				'Superpower',
			],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{ type: RaidActionType.HP, threshold: 95, action: 'Uses Topsy-Turvy' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Superpower' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Metagross',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Zen Headbutt',
				'Meteor Mash',
				'Agility',
				'Bullet Punch',
				'Light Screen',
				'Magnet Rise',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Light Screen' },
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Magnet Rise' },
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 20,
					action: 'Reduce Tera Orb Charge',
				},
			],
		},
	},
	{
		name: 'Minior',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Power Gem',
				'Acrobatics',
				'Take Down',
				'Swift',
				'Sandstorm',
				'Shell Smash',
			],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Sandstorm' },
				{
					type: RaidActionType.HP,
					threshold: 49,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 49, action: 'Uses Shell Smash' },
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
			],
		},
	},
	{
		name: 'Porygon-Z',
		formName: 'porygonz',
		region: RaidRegion.Terarium,
		info: {
			moves: ['Tri Attack', 'Discharge', 'Agility', 'Psybeam', 'Magnet Rise'],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 100, action: 'Uses Magnet Rise' },
				{
					type: RaidActionType.HP,
					threshold: 70,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 10,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Porygon2',
		region: RaidRegion.Terarium,
		info: {
			moves: ['Tri Attack', 'Discharge', 'Agility', 'Psybeam', 'Magnet Rise'],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 100, action: 'Uses Magnet Rise' },
				{
					type: RaidActionType.HP,
					threshold: 70,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 10,
					action: 'Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Reuniclus',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Psychic',
				'Psyshock',
				'Gravity',
				'Shadow Ball',
				'Psychic Terrain',
				'Reflect',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Uses Psychic Terrain',
				},
				{
					type: RaidActionType.HP,
					threshold: 49,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Reflect' },
			],
		},
	},
	{
		name: 'Rhyperior',
		region: RaidRegion.Terarium,
		info: {
			moves: ['Earthquake', 'Rock Wrecker', 'Brick Break', 'Surf', 'Sandstorm'],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Sandstorm' },
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Rock Wrecker' },
			],
		},
	},
	{
		name: 'Skarmory',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Steel Wing',
				'Drill Peck',
				'X-Scissor',
				'Feint',
				'Iron Defense',
				'Swords Dance',
				'Tailwind',
			],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Iron Defense' },
				{ type: RaidActionType.HP, threshold: 70, action: 'Uses Swords Dance' },
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Tailwind' },
			],
		},
	},
];

export const SixStarRaids: Raid[] = [
	{
		name: 'Amoonguss',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Energy Ball',
				'Foul Play',
				'Spore',
				'Sludge Bomb',
				'Grassy Terrain',
			],
			herbs: [
				{ name: 'Spicy', chance: 3.03 },
				{ name: 'Sweet', chance: 3.03 },
				{ name: 'Salty', chance: 3.03 },
				{ name: 'Bitter', chance: 3.03 },
				{ name: 'Sour', chance: 3.03 },
			],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 90,
					action: 'Uses Grassy Terrain',
				},
				{
					type: RaidActionType.Time,
					threshold: 70,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Uses Grassy Terrain',
				},
			],
		},
	},
	{
		name: 'Annihilape',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Close Combat',
				'Shadow Claw',
				'Assurance',
				'Focus Energy',
				'Bulk Up',
				'Rage Fist',
			],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 95,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Bulk Up' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Bulk Up' },
				{ type: RaidActionType.Time, threshold: 5, action: 'Uses Rage Fist' },
			],
		},
	},
	{
		name: 'Armarouge',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Armor Cannon',
				'Psychic',
				'Night Shade',
				'Will-O-Wisp',
				'Calm Mind',
				'Sunny Day',
			],
			herbs: [{ name: 'Bitter', chance: 3.03 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 90, action: 'Uses Calm Mind' },
				{
					type: RaidActionType.Time,
					threshold: 65,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Sunny Day' },
			],
		},
	},
	{
		name: 'Avalugg',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Icicle Crash',
				'Heavy Slam',
				'Snowscape',
				'Ice Spinner',
				'Iron Defense',
			],
			herbs: [{ name: 'Salty', chance: 3.03 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 90, action: 'Uses Snowscape' },
				{
					type: RaidActionType.Time,
					threshold: 75,
					action: 'Uses Iron Defense',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Baxcalibur',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Icicle Spear', 'Dragon Rush', 'Snowscape', 'Body Press'],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Snowscape' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Snowscape' },
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Blissey',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Dazzling Gleam',
				'Hyper Voice',
				'Sing',
				'Light Screen',
				'Defense Curl',
			],
			herbs: [
				{ name: 'Spicy', chance: 3.03 },
				{ name: 'Sweet', chance: 3.03 },
				{ name: 'Salty', chance: 3.03 },
				{ name: 'Bitter', chance: 3.03 },
				{ name: 'Sour', chance: 3.03 },
			],
			actions: [
				{ type: RaidActionType.HP, threshold: 95, action: 'Uses Defense Curl' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Defense Curl' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Sing' },
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Bombirdier',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Rock Slide', 'Acrobatics', 'Knock Off', 'Feather Dance'],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Knock Off' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Uses Feather Dance',
				},
			],
		},
	},
	{
		name: 'Breloom',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Bullet Seed',
				'Low Sweep',
				'Spore',
				'Aerial Ace',
				'Grassy Terrain',
			],
			specialMoves: ['Spore'],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 80,
					action: 'Uses Grassy Terrain',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Spore' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Ceruledge',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Bitter Blade',
				'Shadow Claw',
				'Psycho Cut',
				'Will-O-Wisp',
				'Sunny Day',
			],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 65,
					action: 'Uses Will-O-Wisp',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Sunny Day' },
			],
		},
	},
	{
		name: 'Cetitan',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Ice Spinner',
				'Body Slam',
				'Snowscape',
				'Stomping Tantrum',
				'Yawn',
			],
			specialMoves: ['Yawn'],
			herbs: [
				{ name: 'Spicy', chance: 3.03 },
				{ name: 'Sweet', chance: 3.03 },
				{ name: 'Salty', chance: 3.03 },
				{ name: 'Bitter', chance: 3.03 },
				{ name: 'Sour', chance: 3.03 },
			],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 95,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.Time, threshold: 75, action: 'Uses Snowscape' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Yawn' },
			],
		},
	},
	{
		name: 'Clawitzer',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Water Pulse',
				'Dragon Pulse',
				'Aura Sphere',
				'Crabhammer',
				'Rain Dance',
			],
			herbs: [{ name: 'Bitter', chance: 3.03 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Rain Dance' },
				{
					type: RaidActionType.Time,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Water Pulse' },
			],
		},
	},
	{
		name: 'Clodsire',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Earthquake', 'Poison Jab', 'Megahorn', 'Yawn'],
			herbs: [{ name: 'Sour', chance: 3.03 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 95,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Yawn' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Earthquake' },
			],
		},
	},
	{
		name: 'Corviknight',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Iron Head',
				'Drill Peck',
				'Body Press',
				'Hone Claws',
				'Tailwind',
			],
			herbs: [{ name: 'Salty', chance: 3.03 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 90,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Hone Claws' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Tailwind' },
			],
		},
	},
	{
		name: 'Cyclizar',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Double-Edge',
				'Dragon Claw',
				'Dragon Pulse',
				'Knock Off',
				'Shift Gear',
			],
			herbs: [{ name: 'Sweet', chance: 3.03 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 95,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Knock Off' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Shift Gear' },
			],
		},
	},
	{
		name: 'Dachsbun',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Play Rough', 'Double-Edge', 'Bite', 'Baby-Doll Eyes'],
			herbs: [{ name: 'Salty', chance: 3.03 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 95,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Play Rough' },
			],
		},
	},
	{
		name: 'Ditto',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Transform'],
			herbs: [{ name: 'Sweet', chance: 3.03 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Dondozo',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Wave Crash',
				'Order Up',
				'Heavy Slam',
				'Yawn',
				'Rain Dance',
				'Curse',
			],
			herbs: [
				{ name: 'Spicy', chance: 3.03 },
				{ name: 'Sweet', chance: 3.03 },
				{ name: 'Salty', chance: 3.03 },
				{ name: 'Bitter', chance: 3.03 },
				{ name: 'Sour', chance: 3.03 },
			],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 95,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Rain Dance' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Curse' },
			],
		},
	},
	{
		name: 'Dragalge',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Dragon Pulse',
				'Sludge Bomb',
				'Water Pulse',
				'Toxic',
				'Acid Spray',
				'Draco Meteor',
			],
			herbs: [{ name: 'Bitter', chance: 3.03 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Acid Spray' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Draco Meteor' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Draco Meteor' },
			],
		},
	},
	{
		name: 'Dragapult',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Shadow Ball',
				'Dragon Pulse',
				'Thunderbolt',
				'Flamethrower',
				'Reflect',
				'Light Screen',
			],
			herbs: [{ name: 'Sweet', chance: 3.03 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Reflect' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Light Screen' },
			],
		},
	},
	{
		name: 'Dragonite',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Dragon Rush',
				'Extreme Speed',
				'Dragon Dance',
				'Aqua Tail',
				'Light Screen',
			],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 95,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 70,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 65,
					action: 'Uses Light Screen',
				},
				{
					type: RaidActionType.Time,
					threshold: 50,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Dragon Dance' },
			],
		},
	},
	{
		name: 'Espeon',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Tera Blast',
				'Psychic',
				'Psyshock',
				'Tickle',
				'Psychic Terrain',
				'Calm Mind',
			],
			specialMoves: ['Tickle'],
			herbs: [{ name: 'Bitter', chance: 3.03 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 90,
					action: 'Uses Psychic Terrain',
				},
				{
					type: RaidActionType.Time,
					threshold: 70,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Calm Mind' },
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Uses Psychic Terrain',
				},
			],
		},
	},
	{
		name: 'Farigiraf',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Twin Beam', 'Hyper Voice', 'Low Kick', 'Uproar', 'Agility'],
			specialMoves: ['Uproar'],
			herbs: [
				{ name: 'Spicy', chance: 3.03 },
				{ name: 'Sweet', chance: 3.03 },
				{ name: 'Salty', chance: 3.03 },
				{ name: 'Bitter', chance: 3.03 },
				{ name: 'Sour', chance: 3.03 },
			],
			actions: [
				{ type: RaidActionType.Time, threshold: 90, action: 'Uses Agility' },
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Uproar' },
			],
		},
	},
	{
		name: 'Flareon',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Tera Blast',
				'Flare Blitz',
				'Lava Plume',
				'Will-O-Wisp',
				'Sunny Day',
				'Curse',
			],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Sunny Day' },
				{
					type: RaidActionType.Time,
					threshold: 70,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Curse' },
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Sunny Day' },
			],
		},
	},
	{
		name: 'Frosmoth',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Blizzard', 'Bug Buzz', 'Hurricane', 'Snowscape'],
			herbs: [{ name: 'Sour', chance: 3.03 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Snowscape' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Gallade',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Psycho Cut',
				'Close Combat',
				'Will-O-Wisp',
				'Aerial Ace',
				'Hypnosis',
				'Disable',
				'Psychic Terrain',
			],
			specialMoves: ['Disable'],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Hypnosis' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Disable' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Uses Psychic Terrain',
				},
			],
		},
	},
	{
		name: 'Garchomp',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Outrage',
				'Earthquake',
				'Flamethrower',
				'Rock Slide',
				'Swords Dance',
			],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 90,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Swords Dance' },
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Gardevoir',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Moonblast',
				'Psychic',
				'Calm Mind',
				'Thunder Wave',
				'Misty Terrain',
				'Psychic Terrain',
			],
			herbs: [{ name: 'Bitter', chance: 3.03 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Uses Misty Terrain',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Calm Mind' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 35,
					action: 'Uses Psychic Terrain',
				},
			],
		},
	},
	{
		name: 'Garganacl',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Stone Edge',
				'Heavy Slam',
				'Salt Cure',
				'Hammer Arm',
				'Sandstorm',
				'Rock Slide',
			],
			herbs: [{ name: 'Salty', chance: 3.03 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Sandstorm' },
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Rock Slide' },
			],
		},
	},
	{
		name: 'Gengar',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Shadow Ball',
				'Sludge Bomb',
				'Dazzling Gleam',
				'Will-O-Wisp',
				'Hypnosis',
			],
			herbs: [{ name: 'Bitter', chance: 3.03 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Hypnosis' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Hypnosis' },
			],
		},
	},
	{
		name: 'Glaceon',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Tera Blast',
				'Ice Beam',
				'Blizzard',
				'Charm',
				'Snowscape',
				'Calm Mind',
			],
			herbs: [{ name: 'Bitter', chance: 3.03 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Snowscape' },
				{
					type: RaidActionType.Time,
					threshold: 70,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Calm Mind' },
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Snowscape' },
			],
		},
	},
	{
		name: 'Glimmora',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Power Gem',
				'Sludge Wave',
				'Hyper Beam',
				'Rock Polish',
				'Sandstorm',
			],
			herbs: [{ name: 'Bitter', chance: 3.03 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Sandstorm' },
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 55,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.Time,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
			],
		},
	},
	{
		name: 'Goodra',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Dragon Pulse',
				'Surf',
				'Sludge Bomb',
				'Power Whip',
				'Rain Dance',
			],
			herbs: [{ name: 'Sour', chance: 3.03 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Rain Dance' },
				{
					type: RaidActionType.Time,
					threshold: 70,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Rain Dance' },
			],
		},
	},
	{
		name: 'Grafaiai',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Knock Off', 'Gunk Shot', 'Take Down', 'Flatter', 'Toxic'],
			specialMoves: ['Toxic'],
			herbs: [{ name: 'Sweet', chance: 3.03 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 95,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Toxic' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Gunk Shot' },
			],
		},
	},
	{
		name: 'Gyarados',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Aqua Tail',
				'Crunch',
				'Hurricane',
				'Ice Fang',
				'Taunt',
				'Dragon Dance',
			],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 90,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 70,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Taunt' },
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Dragon Dance' },
			],
		},
	},
	{
		name: 'Haxorus',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Outrage',
				'Crunch',
				'Giga Impact',
				'First Impression',
				'Dragon Dance',
			],
			specialMoves: ['First Impression'],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 90,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 70,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Dragon Dance' },
			],
		},
	},
	{
		name: 'Heracross',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Megahorn', 'Close Combat', 'Thrash', 'Leer', 'Bulk Up'],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Bulk Up' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Hippowdon',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Earthquake', 'Ice Fang', 'Yawn', 'Rock Slide'],
			herbs: [{ name: 'Salty', chance: 3.03 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 90, action: 'Uses Yawn' },
				{
					type: RaidActionType.HP,
					threshold: 60,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Yawn' },
			],
		},
	},
	{
		name: 'Hydreigon',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Dark Pulse',
				'Dragon Pulse',
				'Crunch',
				'Taunt',
				'Work Up',
				'Nasty Plot',
			],
			herbs: [{ name: 'Bitter', chance: 3.03 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 85, action: 'Uses Taunt' },
				{ type: RaidActionType.Time, threshold: 75, action: 'Uses Work Up' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.Time, threshold: 20, action: 'Uses Nasty Plot' },
			],
		},
	},
	{
		name: 'Jolteon',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Tera Blast',
				'Thunderbolt',
				'Shadow Ball',
				'Thunder Wave',
				'Electric Terrain',
				'Calm Mind',
			],
			herbs: [{ name: 'Sweet', chance: 3.03 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 90,
					action: 'Uses Electric Terrain',
				},
				{
					type: RaidActionType.Time,
					threshold: 70,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Calm Mind' },
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Uses Electric Terrain',
				},
			],
		},
	},
	{
		name: 'Kilowattrel',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Hurricane',
				'Thunder',
				'Uproar',
				'Scary Face',
				'Charge',
				'Rain Dance',
			],
			specialMoves: ['Charge', 'Rain Dance'],
			herbs: [{ name: 'Sweet', chance: 3.03 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Charge' },
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Rain Dance' },
			],
		},
	},
	{
		name: 'Kingambit',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Iron Head',
				'Night Slash',
				'Kowtow Cleave',
				'Thunder Wave',
				'Swords Dance',
			],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 65,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Swords Dance' },
			],
		},
	},
	{
		name: 'Klawf',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Stone Edge',
				'Rock Smash',
				'X-Scissor',
				'Sandstorm',
				'Knock Off',
				'Iron Defense',
			],
			herbs: [{ name: 'Salty', chance: 3.03 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 95,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 80, action: 'Uses Knock Off' },
				{
					type: RaidActionType.HP,
					threshold: 49,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Iron Defense' },
			],
		},
	},
	{
		name: 'Leafeon',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Tera Blast',
				'Leaf Blade',
				'Double Kick',
				'Charm',
				'Sunny Day',
				'Swords Dance',
			],
			specialMoves: ['Double Kick'],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Sunny Day' },
				{
					type: RaidActionType.Time,
					threshold: 70,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Swords Dance' },
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Swords Dance' },
			],
		},
	},
	{
		name: 'Lycanroc',
		imageAlt: '-d',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Accelerock', 'Rock Slide', 'Crunch', 'Taunt', 'Sandstorm'],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Sandstorm' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Rock Slide' },
			],
		},
	},
	{
		name: 'Mabosstiff',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Crunch', 'Reversal', 'Outrage', 'Take Down', 'Taunt'],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 80, action: 'Uses Taunt' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Magnezone',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Thunder',
				'Flash Cannon',
				'Tri Attack',
				'Thunder Wave',
				'Rain Dance',
				'Iron Defense',
				'Electric Terrain',
			],
			herbs: [{ name: 'Bitter', chance: 3.03 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 80, action: 'Uses Rain Dance' },
				{
					type: RaidActionType.Time,
					threshold: 75,
					action: 'Uses Iron Defense',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Thunder Wave' },
				{
					type: RaidActionType.Time,
					threshold: 20,
					action: 'Uses Electric Terrain',
				},
			],
		},
	},
	{
		name: 'Maushold',
		imageAlt: '-f',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Play Rough', 'Take Down', 'Low Kick', 'Charm', 'Tidy Up'],
			herbs: [{ name: 'Sweet', chance: 3.03 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 95,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.Time, threshold: 75, action: 'Uses Charm' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Tidy Up' },
			],
		},
	},
	{
		name: 'Mimikyu',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Play Rough',
				'Shadow Claw',
				'Shadow Sneak',
				'Wood Hammer',
				'Misty Terrain',
				'Swords Dance',
			],
			herbs: [{ name: 'Sour', chance: 3.03 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 90,
					action: 'Uses Misty Terrain',
				},
				{
					type: RaidActionType.Time,
					threshold: 75,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Swords Dance' },
			],
		},
	},
	{
		name: 'Orthworm',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Iron Head', 'Earthquake', 'Smack Down', 'Sandstorm', 'Coil'],
			herbs: [{ name: 'Salty', chance: 3.03 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 95, action: 'Uses Coil' },
				{ type: RaidActionType.HP, threshold: 80, action: 'Uses Sandstorm' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Sandstorm' },
			],
		},
	},
	{
		name: 'Pawmot',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Wild Charge',
				'Close Combat',
				'Double Shock',
				'Nuzzle',
				'Electric Terrain',
			],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 95,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 80,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Uses Electric Terrain',
				},
			],
		},
	},
	{
		name: 'Pelipper',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Hurricane',
				'Hydro Pump',
				'Mist',
				'Supersonic',
				'Rain Dance',
				'Agility',
			],
			herbs: [{ name: 'Salty', chance: 3.03 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Rain Dance' },
				{
					type: RaidActionType.Time,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Agility' },
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Rain Dance' },
			],
		},
	},
	{
		name: 'Pincurchin',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Zing Zap',
				'Thunder',
				'Surf',
				'Poison Jab',
				'Thunder Wave',
				'Electric Terrain',
			],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 90,
					action: 'Uses Thunder Wave',
				},
				{
					type: RaidActionType.Time,
					threshold: 65,
					action: 'Uses Electric Terrain',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Uses Electric Terrain',
				},
			],
		},
	},
	{
		name: 'Revavroom',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Gunk Shot',
				'Overheat',
				'Iron Head',
				'Taunt',
				'Scary Face',
				'Shift Gear',
			],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 85, action: 'Uses Scary Face' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Shift Gear' },
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Shift Gear' },
			],
		},
	},
	{
		name: 'Salamence',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Outrage',
				'Dual Wingbeat',
				'Flamethrower',
				'Tera Blast',
				'Dragon Dance',
			],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 90,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Dragon Dance' },
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Scizor',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'X-Scissor',
				'Bullet Punch',
				'Close Combat',
				'Iron Head',
				'Iron Defense',
				'Focus Energy',
			],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Uses Iron Defense',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Focus Energy' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Slowking',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Surf',
				'Psyshock',
				'Trick Room',
				'Flamethrower',
				'Light Screen',
				'Rain Dance',
				'Calm Mind',
			],
			herbs: [{ name: 'Sour', chance: 3.03 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 70,
					action: 'Uses Light Screen',
				},
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Rain Dance' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Calm Mind' },
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Trick Room' },
			],
		},
	},
	{
		name: 'Staraptor',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Close Combat', 'Brave Bird', 'Double-Edge', 'Feather Dance'],
			specialMoves: ['Double-Edge', 'Feather Dance'],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 85,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Brave Bird' },
			],
		},
	},
	{
		name: 'Sylveon',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Tera Blast',
				'Hyper Voice',
				'Moonblast',
				'Yawn',
				'Misty Terrain',
				'Calm Mind',
			],
			specialMoves: ['Yawn'],
			herbs: [{ name: 'Bitter', chance: 3.03 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 90,
					action: 'Uses Misty Terrain',
				},
				{
					type: RaidActionType.Time,
					threshold: 70,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Calm Mind' },
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Uses Misty Terrain',
				},
			],
		},
	},
	{
		name: 'Talonflame',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Brave Bird',
				'Flare Blitz',
				'Flamethrower',
				'Tera Blast',
				'Sunny Day',
				'Swords Dance',
			],
			herbs: [{ name: 'Sweet', chance: 3.03 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Sunny Day' },
				{
					type: RaidActionType.Time,
					threshold: 70,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Swords Dance' },
			],
		},
	},
	{
		name: 'Tauros',
		formName: 'taurospaldeacombat',
		imageAlt: '-p',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Close Combat',
				'Thrash',
				'Zen Headbutt',
				'Raging Bull',
				'Bulk Up',
				'Screech',
			],
			specialMoves: ['Screech'],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 95,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Bulk Up' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Screech' },
			],
		},
	},
	{
		name: 'Tauros (Fire)',
		formName: 'taurospaldeablaze',
		imageAlt: '-b',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Flare Blitz',
				'Close Combat',
				'Flamethrower',
				'Headbutt',
				'Sunny Day',
				'Bulk Up',
			],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Sunny Day' },
				{
					type: RaidActionType.Time,
					threshold: 70,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Bulk Up' },
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Sunny Day' },
			],
		},
	},
	{
		name: 'Tauros (Water)',
		formName: 'taurospaldeaaqua',
		imageAlt: '-a',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Wave Crash',
				'Close Combat',
				'Surf',
				'Headbutt',
				'Rain Dance',
				'Bulk Up',
			],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Rain Dance' },
				{
					type: RaidActionType.Time,
					threshold: 70,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Bulk Up' },
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Rain Dance' },
			],
		},
	},
	{
		name: 'Tinkaton',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Gigaton Hammer',
				'Play Rough',
				'Knock Off',
				'Thunder Wave',
				'Misty Terrain',
				'Sweet Kiss',
			],
			specialMoves: ['Misty Terrain'],
			herbs: [{ name: 'Sour', chance: 3.03 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 90,
					action: 'Uses Misty Terrain',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Sweet Kiss' },
				{ type: RaidActionType.HP, threshold: 15, action: 'Uses Sweet Kiss' },
			],
		},
	},
	{
		name: 'Toedscruel',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Energy Ball', 'Earth Power', 'Spore', 'Hex', 'Grassy Terrain'],
			herbs: [{ name: 'Sour', chance: 3.03 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 90,
					action: 'Uses Grassy Terrain',
				},
				{ type: RaidActionType.Time, threshold: 75, action: 'Uses Spore' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Spore' },
			],
		},
	},
	{
		name: 'Torkoal',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Lava Plume',
				'Yawn',
				'Clear Smog',
				'Body Slam',
				'Sunny Day',
				'Iron Defense',
			],
			herbs: [{ name: 'Salty', chance: 3.03 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Sunny Day' },
				{
					type: RaidActionType.Time,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Yawn' },
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Iron Defense' },
			],
		},
	},
	{
		name: 'Toxapex',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Water Pulse',
				'Liquidation',
				'Poison Jab',
				'Pin Missile',
				'Chilling Water',
				'Toxic',
			],
			herbs: [{ name: 'Salty', chance: 3.03 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 95,
					action: 'Uses Chilling Water',
				},
				{ type: RaidActionType.Time, threshold: 75, action: 'Uses Toxic' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Uses Chilling Water',
				},
			],
		},
	},
	{
		name: 'Tyranitar',
		region: RaidRegion.Paldea,
		info: {
			moves: ['Stone Edge', 'Crunch', 'Screech', 'Rock Blast', 'Iron Defense'],
			herbs: [{ name: 'Spicy', chance: 3.05 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 90,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 75,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Crunch' },
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Iron Defense' },
			],
		},
	},
	{
		name: 'Umbreon',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Tera Blast',
				'Dark Pulse',
				'Foul Play',
				'Tickle',
				'Calm Mind',
				'Curse',
			],
			specialMoves: ['Curse', 'Tickle'],
			herbs: [{ name: 'Sour', chance: 3.03 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Calm Mind' },
				{
					type: RaidActionType.Time,
					threshold: 70,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Curse' },
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Calm Mind' },
			],
		},
	},
	{
		name: 'Vaporeon',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Tera Blast',
				'Surf',
				'Hyper Voice',
				'Yawn',
				'Rain Dance',
				'Calm Mind',
			],
			specialMoves: ['Yawn'],
			herbs: [
				{ name: 'Spicy', chance: 3.03 },
				{ name: 'Sweet', chance: 3.03 },
				{ name: 'Salty', chance: 3.03 },
				{ name: 'Bitter', chance: 3.03 },
				{ name: 'Sour', chance: 3.03 },
			],
			actions: [
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Rain Dance' },
				{
					type: RaidActionType.Time,
					threshold: 70,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Calm Mind' },
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Rain Dance' },
			],
		},
	},
	{
		name: 'Volcarona',
		region: RaidRegion.Paldea,
		info: {
			moves: [
				'Bug Buzz',
				'Flamethrower',
				'Hurricane',
				'Tailwind',
				'Amnesia',
				'Sunny Day',
				'Light Screen',
				'Quiver Dance',
			],
			herbs: [{ name: 'Bitter', chance: 3.03 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 85, action: 'Uses Amnesia' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Sunny Day' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Light Screen' },
				{
					type: RaidActionType.Time,
					threshold: 20,
					action: 'Uses Quiver Dance',
				},
			],
		},
	},
	{
		name: 'Ambipom',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Double Hit',
				'Ice Punch',
				'Fire Punch',
				'Thunder Punch',
				'Screech',
			],
			herbs: [{ name: 'Sweet', chance: 2.36 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 90,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 89, action: 'Uses Screech' },
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Double Hit' },
			],
		},
	},
	{
		name: 'Basculegion (Male)',
		formName: 'basculegion',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Wave Crash',
				'Aqua Jet',
				'Crunch',
				'Scary Face',
				'Icy Wind',
				'Rain Dance',
			],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{ type: RaidActionType.Time, threshold: 95, action: 'Uses Icy Wind' },
				{
					type: RaidActionType.HP,
					threshold: 80,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Rain Dance' },
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Basculegion (Female)',
		formName: 'basculegion',
		imageAlt: '-f',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Surf',
				'Aqua Jet',
				'Shadow Ball',
				'Scary Face',
				'Icy Wind',
				'Rain Dance',
			],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{ type: RaidActionType.Time, threshold: 95, action: 'Uses Icy Wind' },
				{
					type: RaidActionType.HP,
					threshold: 80,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 60,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Rain Dance' },
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Chandelure',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Flamethrower',
				'Shadow Ball',
				'Will-O-Wisp',
				'Poltergeist',
				'Heat Wave',
				'Sunny Day',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 90,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Heat Wave' },
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Sunny Day' },
				{
					type: RaidActionType.HP,
					threshold: 35,
					action: 'Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Clefable',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Moonblast',
				'Psychic',
				'Meteor Mash',
				'Encore',
				'Dazzling Gleam',
				'Calm Mind',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 95, action: 'Uses Encore' },
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Uses Dazzling Gleam',
				},
				{
					type: RaidActionType.HP,
					threshold: 41,
					action: 'Uses Dazzling Gleam',
				},
				{
					type: RaidActionType.HP,
					threshold: 60,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Calm Mind' },
			],
		},
	},
	{
		name: 'Conkeldurr',
		region: RaidRegion.Kitakami,
		info: {
			moves: ['Rock Slide', 'Close Combat', 'Mach Punch', 'Slam', 'Bulk Up'],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 90,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 89, action: 'Uses Bulk Up' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 49, action: 'Uses Bulk Up' },
				{
					type: RaidActionType.Time,
					threshold: 30,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Crawdaunt',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Aqua Jet',
				'Crabhammer',
				'Crunch',
				'Giga Impact',
				'Leer',
				'Swords Dance',
			],
			specialMoves: ['Aqua Jet'],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 90,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 65,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 60, action: 'Uses Leer' },
				{
					type: RaidActionType.Time,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Swords Dance' },
			],
		},
	},
	{
		name: 'Dusknoir',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Poltergeist',
				'Dark Pulse',
				'Will-O-Wisp',
				'Ice Punch',
				'Gravity',
				'Spite',
			],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{ type: RaidActionType.HP, threshold: 95, action: 'Uses Gravity' },
				{ type: RaidActionType.HP, threshold: 70, action: 'Uses Spite' },
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Spite' },
				{
					type: RaidActionType.HP,
					threshold: 10,
					action: 'Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Gliscor',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Acrobatics',
				'Knock Off',
				'Quick Attack',
				'Earthquake',
				'Sandstorm',
				'Swords Dance',
			],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 100, action: 'Uses Sandstorm' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Swords Dance' },
				{ type: RaidActionType.Time, threshold: 15, action: 'Uses Sandstorm' },
				{ type: RaidActionType.Time, threshold: 5, action: 'Uses Earthquake' },
			],
		},
	},
	{
		name: 'Golem',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Earthquake',
				'Rock Slide',
				'Flail',
				'Smack Down',
				'Stone Edge',
				'Iron Defense',
			],
			specialMoves: ['Flail'],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 95,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 85, action: 'Uses Stone Edge' },
				{
					type: RaidActionType.Time,
					threshold: 45,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 29, action: 'Uses Iron Defense' },
			],
		},
	},
	{
		name: 'Kommo-o',
		formName: 'kommoo',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Focus Blast',
				'Dragon Claw',
				'Iron Head',
				'Scary Face',
				'Clangorous Soul',
				'Reversal',
			],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 60,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Uses Clangorous Soul',
				},
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Uses Clangorous Soul',
				},
				{ type: RaidActionType.Time, threshold: 10, action: 'Uses Reversal' },
			],
		},
	},
	{
		name: 'Leavanny',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Leaf Blade',
				'X-Scissor',
				'Grassy Glide',
				'Sticky Web',
				'Grassy Terrain',
				'Swords Dance',
			],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 95,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 90,
					action: 'Uses Grassy Terrain',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Swords Dance' },
			],
		},
	},
	{
		name: 'Ludicolo',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Energy Ball',
				'Hydro Pump',
				'Fake Out',
				'Chilling Water',
				'Rain Dance',
				'Teeter Dance',
			],
			herbs: [{ name: 'Sour', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 100,
					action: 'Uses Rain Dance',
				},
				{
					type: RaidActionType.HP,
					threshold: 90,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 70,
					action: 'Uses Chilling Water',
				},
				{
					type: RaidActionType.Time,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.Time,
					threshold: 20,
					action: 'Uses Teeter Dance',
				},
			],
		},
	},
	{
		name: 'Mamoswine',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Icicle Crash',
				'Ice Shard',
				'Bulldoze',
				'Freeze-Dry',
				'Snowscape',
				'Amnesia',
				'Earthquake',
			],
			specialMoves: ['Freeze-Dry'],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 100, action: 'Uses Snowscape' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Amnesia' },
				{ type: RaidActionType.HP, threshold: 10, action: 'Uses Earthquake' },
				{
					type: RaidActionType.Time,
					threshold: 45,
					action: 'Reduce Tera Orb Charge',
				},
			],
		},
	},
	{
		name: 'Mandibuzz',
		region: RaidRegion.Kitakami,
		info: {
			moves: ['Dual Wingbeat', 'Dark Pulse', 'Toxic', 'Bone Rush', 'Snarl'],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 95,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Snarl' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Snarl' },
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Snarl' },
			],
		},
	},
	{
		name: 'Mienshao',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Aerial Ace',
				'Brick Break',
				'Aura Sphere',
				'Reversal',
				'Calm Mind',
			],
			herbs: [{ name: 'Sweet', chance: 2.36 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Calm Mind' },
				{
					type: RaidActionType.HP,
					threshold: 65,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Calm Mind' },
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.Time,
					threshold: 20,
					action: 'Uses Aura Sphere',
				},
			],
		},
	},
	{
		name: 'Milotic',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Dragon Pulse',
				'Water Pulse',
				'Safeguard',
				'Aqua Tail',
				'Coil',
				'Hypnosis',
				'Rain Dance',
			],
			specialMoves: ['Hypnosis'],
			herbs: [{ name: 'Sour', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 99,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Coil' },
				{ type: RaidActionType.HP, threshold: 70, action: 'Uses Hypnosis' },
				{ type: RaidActionType.Time, threshold: 60, action: 'Uses Rain Dance' },
				{ type: RaidActionType.Time, threshold: 10, action: 'Uses Hypnosis' },
			],
		},
	},
	{
		name: 'Morpeko',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Aura Wheel',
				'Lash Out',
				'Thunder Wave',
				'Torment',
				'Taunt',
				'Electric Terrain',
			],
			herbs: [{ name: 'Sour', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 100, action: 'Uses Taunt' },
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Taunt' },
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Uses Electric Terrain',
				},
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Ninetales',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Flamethrower',
				'Extrasensory',
				'Will-O-Wisp',
				'Burning Jealousy',
				'Heat Wave',
				'Sunny Day',
			],
			herbs: [{ name: 'Sour', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 90,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Heat Wave' },
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Sunny Day' },
				{ type: RaidActionType.Time, threshold: 10, action: 'Uses Heat Wave' },
			],
		},
	},
	{
		name: 'Politoed',
		region: RaidRegion.Kitakami,
		info: {
			moves: ['Chilling Water', 'Surf', 'Ice Beam', 'Encore', 'Amnesia'],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 85,
					action: 'Uses Chilling Water',
				},
				{
					type: RaidActionType.HP,
					threshold: 70,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 29, action: 'Uses Amnesia' },
			],
		},
	},
	{
		name: 'Poliwrath',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Brick Break',
				'Liquidation',
				'Focus Blast',
				'Haze',
				'Rain Dance',
				'Bulk Up',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 95, action: 'Uses Rain Dance' },
				{
					type: RaidActionType.HP,
					threshold: 70,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 45, action: 'Uses Bulk Up' },
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Bulk Up' },
			],
		},
	},
	{
		name: 'Quagsire',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Earthquake',
				'Liquidation',
				'Yawn',
				'Toxic',
				'Curse',
				'Rain Dance',
			],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 90,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 70, action: 'Uses Curse' },
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Rain Dance' },
			],
		},
	},
	{
		name: 'Shiftry',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Leaf Blade',
				'Sucker Punch',
				'Fake Out',
				'Extrasensory',
				'Sunny Day',
				'Trailblaze',
				'Swords Dance',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 100, action: 'Uses Sunny Day' },
				{
					type: RaidActionType.HP,
					threshold: 90,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 70, action: 'Uses Trailblaze' },
				{
					type: RaidActionType.Time,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 30, action: 'Uses Swords Dance' },
			],
		},
	},
	{
		name: 'Sinistcha',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Energy Ball',
				'Shadow Ball',
				'Stun Spore',
				'Scald',
				'Grassy Terrain',
				'Matcha Gotcha',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 85,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Uses Grassy Terrain',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Uses Grassy Terrain',
				},
				{
					type: RaidActionType.HP,
					threshold: 15,
					action: 'Uses Matcha Gotcha',
				},
				{
					type: RaidActionType.Time,
					threshold: 10,
					action: 'Uses Matcha Gotcha',
				},
			],
		},
	},
	{
		name: 'Sinistcha (Masterpiece)',
		formName: 'sinistchamasterpiece',
		imageAlt: '-m',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Energy Ball',
				'Shadow Ball',
				'Stun Spore',
				'Scald',
				'Grassy Terrain',
				'Matcha Gotcha',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 85,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Uses Grassy Terrain',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Uses Grassy Terrain',
				},
				{
					type: RaidActionType.HP,
					threshold: 15,
					action: 'Uses Matcha Gotcha',
				},
				{
					type: RaidActionType.Time,
					threshold: 10,
					action: 'Uses Matcha Gotcha',
				},
			],
		},
	},
	{
		name: 'Snorlax',
		region: RaidRegion.Kitakami,
		info: {
			moves: ['Facade', 'Crunch', 'Yawn', 'Heavy Slam'],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 95,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 70,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Trevenant',
		region: RaidRegion.Kitakami,
		info: {
			moves: [
				'Wood Hammer',
				'Shadow Claw',
				"Forest's Curse",
				'Will-O-Wisp',
				'Grassy Terrain',
				'Disable',
			],
			specialMoves: ['Disable'],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 100,
					action: 'Uses Grassy Terrain',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Disable' },
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Wood Hammer' },
			],
		},
	},
	{
		name: 'Yanmega',
		region: RaidRegion.Kitakami,
		info: {
			moves: ['Bug Buzz', 'Air Slash', 'Quick Attack', 'Ancient Power'],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 95,
					action: 'Uses Ancient Power',
				},
				{
					type: RaidActionType.HP,
					threshold: 85,
					action: 'Uses Ancient Power',
				},
				{
					type: RaidActionType.Time,
					threshold: 50,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 35,
					action: 'Uses Ancient Power',
				},
			],
		},
	},
	{
		name: 'Alcremie',
		region: RaidRegion.Terarium,
		info: {
			moves: ['Dazzling Gleam', 'Psychic', 'Encore', 'Psyshock', 'Acid Armor'],
			herbs: [{ name: 'Sour', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.HP, threshold: 90, action: 'Uses Encore' },
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Acid Armor' },
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Acid Armor' },
				{
					type: RaidActionType.Time,
					threshold: 30,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 20,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Dugtrio',
		formName: 'dugtrioalola',
		imageAlt: '-a',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Bulldoze',
				'Iron Head',
				'Ancient Power',
				'Metal Claw',
				'Sandstorm',
				'Earthquake',
			],
			specialMoves: ['Ancient Power'],
			herbs: [{ name: 'Sour', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 90,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 80,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Sandstorm' },
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Earthquake' },
			],
		},
	},
	{
		name: 'Duraludon',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Flash Cannon',
				'Dragon Pulse',
				'Breaking Swipe',
				'Metal Claw',
				'Stealth Rock',
				'Light Screen',
				'Reflect',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 100,
					action: 'Uses Stealth Rock',
				},
				{
					type: RaidActionType.HP,
					threshold: 80,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Light Screen' },
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Reflect' },
			],
		},
	},
	{
		name: 'Electivire',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Discharge',
				'Thunder Punch',
				'Earthquake',
				'Brick Break',
				'Electric Terrain',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 100,
					action: 'Uses Electric Terrain',
				},
				{
					type: RaidActionType.HP,
					threshold: 70,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Uses Electric Terrain',
				},
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Excadrill',
		region: RaidRegion.Terarium,
		info: {
			moves: ['Iron Head', 'Earthquake', 'Drill Run', 'Slash', 'Sandstorm'],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 100, action: 'Uses Sandstorm' },
				{
					type: RaidActionType.HP,
					threshold: 80,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Sandstorm' },
				{ type: RaidActionType.Time, threshold: 25, action: 'Uses Sandstorm' },
			],
		},
	},
	{
		name: 'Exeggutor',
		formName: 'exeggutoralola',
		imageAlt: '-a',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Dragon Hammer',
				'Extrasensory',
				'Seed Bomb',
				'Hypnosis',
				'Trick Room',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 80,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 65, action: 'Uses Hypnosis' },
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Trick Room' },
				{
					type: RaidActionType.HP,
					threshold: 33,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Flygon',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Earthquake',
				'Dragon Claw',
				'Quick Attack',
				'Breaking Swipe',
				'Dragon Dance',
				'Draco Meteor',
			],
			specialMoves: ['Quick Attack'],
			herbs: [{ name: 'Sweet', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 80,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 79, action: 'Uses Dragon Dance' },
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 45, action: 'Uses Dragon Dance' },
				{ type: RaidActionType.HP, threshold: 5, action: 'Uses Draco Meteor' },
			],
		},
	},
	{
		name: 'Golem',
		formName: 'golemalola',
		imageAlt: '-a',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Heavy Slam',
				'Body Slam',
				'Rock Slide',
				'Discharge',
				'Giga Impact',
			],
			herbs: [{ name: 'Sweet', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 90,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 80,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Rock Slide' },
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Giga Impact' },
			],
		},
	},
	{
		name: 'Golurk',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Dynamic Punch',
				'Shadow Punch',
				'Heavy Slam',
				'Ice Punch',
				'Curse',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 90,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.HP,
					threshold: 95,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Curse' },
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Curse' },
			],
		},
	},
	{
		name: 'Kingdra',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Draco Meteor',
				'Dragon Pulse',
				'Water Pulse',
				'Flash Cannon',
				'Focus Energy',
				'Rain Dance',
			],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 100,
					action: 'Uses Focus Energy',
				},
				{
					type: RaidActionType.HP,
					threshold: 65,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Rain Dance' },
				{ type: RaidActionType.HP, threshold: 5, action: 'Uses Draco Meteor' },
			],
		},
	},
	{
		name: 'Kleavor',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'X-Scissor',
				'Close Combat',
				'Air Cutter',
				'Night Slash',
				'Stone Axe',
				'Swords Dance',
			],
			specialMoves: ['Night Slash'],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{ type: RaidActionType.HP, threshold: 95, action: 'Uses Stone Axe' },
				{
					type: RaidActionType.HP,
					threshold: 75,
					action: 'Player Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Swords Dance' },
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Lapras',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Blizzard',
				'Hydro Pump',
				'Body Slam',
				'Sing',
				'Snowscape',
				'Rain Dance',
			],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{ type: RaidActionType.Time, threshold: 100, action: 'Uses Snowscape' },
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Rain Dance' },
				{
					type: RaidActionType.HP,
					threshold: 30,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Magmortar',
		region: RaidRegion.Terarium,
		info: {
			moves: ['Lava Plume', 'Psychic', 'Scorching Sands', 'Taunt', 'Sunny Day'],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 100, action: 'Uses Taunt' },
				{ type: RaidActionType.HP, threshold: 95, action: 'Uses Sunny Day' },
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 50,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Lava Plume' },
			],
		},
	},
	{
		name: 'Malamar',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Psycho Cut',
				'Night Slash',
				'Foul Play',
				'Pluck',
				'Taunt',
				'Topsy-Turvy',
			],
			herbs: [
				{ name: 'Spicy', chance: 2.4 },
				{ name: 'Sweet', chance: 2.4 },
				{ name: 'Salty', chance: 2.4 },
				{ name: 'Bitter', chance: 2.4 },
				{ name: 'Sour', chance: 2.4 },
			],
			actions: [
				{ type: RaidActionType.Time, threshold: 100, action: 'Uses Taunt' },
				{
					type: RaidActionType.HP,
					threshold: 80,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Topsy-Turvy' },
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Topsy-Turvy' },
			],
		},
	},
	{
		name: 'Metagross',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Zen Headbutt',
				'Iron Head',
				'Heavy Slam',
				'Aerial Ace',
				'Agility',
				'Hone Claws',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 100, action: 'Uses Agility' },
				{ type: RaidActionType.HP, threshold: 80, action: 'Uses Iron Head' },
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Hone Claws' },
				{ type: RaidActionType.HP, threshold: 20, action: 'Uses Hone Claws' },
			],
		},
	},
	{
		name: 'Muk',
		formName: 'mukalola',
		imageAlt: '-a',
		region: RaidRegion.Terarium,
		info: {
			moves: ['Crunch', 'Hex', 'Gunk Shot', 'Flamethrower', 'Toxic'],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 90,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 80,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Toxic' },
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Ninetales',
		formName: 'ninetalesalola',
		imageAlt: '-a',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Moonblast',
				'Blizzard',
				'Ice Shard',
				'Dazzling Gleam',
				'Aurora Veil',
				'Calm Mind',
				'Snowscape',
			],
			specialMoves: ['Moonblast'],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 100,
					action: 'Uses Aurora Veil',
				},
				{
					type: RaidActionType.HP,
					threshold: 80,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 40, action: 'Uses Calm Mind' },
				{ type: RaidActionType.HP, threshold: 24, action: 'Uses Snowscape' },
			],
		},
	},
	{
		name: 'Overqwil',
		region: RaidRegion.Terarium,
		info: {
			moves: ['Barb Barrage', 'Crunch', 'Pin Missile', 'Fell Stinger', 'Toxic'],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 100, action: 'Uses Toxic' },
				{
					type: RaidActionType.HP,
					threshold: 80,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Toxic' },
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Barb Barrage' },
			],
		},
	},
	{
		name: 'Porygon-Z',
		formName: 'porygonz',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Tri Attack',
				'Discharge',
				'Agility',
				'Psybeam',
				'Thunder Wave',
				'Trick Room',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 95,
					action: 'Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Thunder Wave' },
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Trick Room' },
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Porygon2',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Tri Attack',
				'Discharge',
				'Agility',
				'Psybeam',
				'Thunder Wave',
				'Trick Room',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.Time,
					threshold: 95,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 75, action: 'Uses Thunder Wave' },
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Trick Room' },
				{
					type: RaidActionType.HP,
					threshold: 45,
					action: 'Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Reuniclus',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Psychic',
				'Fire Punch',
				'Swift',
				'Rock Tomb',
				'Reflect',
				'Light Screen',
				'Calm Mind',
			],
			herbs: [{ name: 'Bitter', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 100, action: 'Uses Reflect' },
				{ type: RaidActionType.HP, threshold: 80, action: 'Uses Light Screen' },
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Player Stats & Status Reset',
				},
				{ type: RaidActionType.HP, threshold: 35, action: 'Uses Calm Mind' },
			],
		},
	},
	{
		name: 'Rhyperior',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Earthquake',
				'Rock Wrecker',
				'Megahorn',
				'Rock Polish',
				'Sandstorm',
				'Iron Defense',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 100, action: 'Uses Sandstorm' },
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Iron Defense' },
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 25, action: 'Uses Rock Wrecker' },
				{ type: RaidActionType.HP, threshold: 5, action: 'Uses Earthquake' },
			],
		},
	},
	{
		name: 'Sandslash',
		formName: 'sandslashalola',
		imageAlt: '-a',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Ice Spinner',
				'Iron Head',
				'Earthquake',
				'Triple Axel',
				'Snowscape',
				'Swords Dance',
			],
			herbs: [{ name: 'Spicy', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 100, action: 'Uses Snowscape' },
				{
					type: RaidActionType.HP,
					threshold: 80,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 80, action: 'Uses Swords Dance' },
				{
					type: RaidActionType.HP,
					threshold: 35,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Skarmory',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Drill Peck',
				'Steel Wing',
				'Night Slash',
				'Slash',
				'Taunt',
				'Iron Defense',
			],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 100, action: 'Uses Taunt' },
				{
					type: RaidActionType.HP,
					threshold: 80,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 45, action: 'Uses Iron Defense' },
				{
					type: RaidActionType.HP,
					threshold: 44,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Slowbro',
		formName: 'slowbrogalar',
		imageAlt: '-g',
		region: RaidRegion.Terarium,
		info: {
			moves: [
				'Shell Side Arm',
				'Zen Headbutt',
				'Chilling Water',
				'Rock Blast',
				'Toxic',
			],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 90,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 80,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Toxic' },
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Slowking',
		formName: 'slowkinggalar',
		imageAlt: '-g',
		region: RaidRegion.Terarium,
		info: {
			moves: ['Eerie Spell', 'Power Gem', 'Yawn', 'Acid Spray', 'Toxic'],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{
					type: RaidActionType.HP,
					threshold: 90,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 80,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{ type: RaidActionType.HP, threshold: 50, action: 'Uses Toxic' },
				{
					type: RaidActionType.HP,
					threshold: 25,
					action: 'Player Stats & Status Reset',
				},
			],
		},
	},
	{
		name: 'Whimsicott',
		region: RaidRegion.Terarium,
		info: {
			moves: ['Energy Ball', 'Moonblast', 'Encore', 'Hurricane', 'Taunt'],
			herbs: [{ name: 'Salty', chance: 2.4 }],
			actions: [
				{ type: RaidActionType.Time, threshold: 100, action: 'Uses Taunt' },
				{
					type: RaidActionType.HP,
					threshold: 80,
					action: 'Stats & Status Reset',
				},
				{
					type: RaidActionType.Time,
					threshold: 40,
					action: 'Reduce Tera Orb Charge',
				},
				{
					type: RaidActionType.HP,
					threshold: 40,
					action: 'Stats & Status Reset',
				},
			],
		},
	},
];
