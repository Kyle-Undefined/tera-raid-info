type Raid = {
	name: string;
	formName?: string;
	imageAlt?: string;
	info: RaidInfo;
};

type RaidInfo = {
	moves: string[];
	specialMoves?: string[];
	herbs: HerbaMystica[];
};

export type HerbaMystica = {
	name: string;
	chance: number;
};

export const FiveStarRaids: Raid[] = [
	{
		name: 'Raichu',
		info: {
			moves: [
				'Discharge',
				'Iron Tail',
				'Charm',
				'Nuzzle',
				'Electric Terrain',
				'Thunder Wave',
			],
			herbs: [
				{
					name: 'Sweet',
					chance: 10.87,
				},
			],
		},
	},
	{
		name: 'Arcanine',
		info: {
			moves: [
				'Flamethrower',
				'Crunch',
				'Extreme Speed',
				'Fire Fang',
				'Sunny Day',
				'Leer',
			],
			herbs: [
				{
					name: 'Spicy',
					chance: 10.87,
				},
			],
		},
	},
	{
		name: 'Slowbro',
		info: {
			moves: ['Zen Headbutt', 'Liquidation', 'Yawn', 'Water Pulse', 'Curse'],
			herbs: [{ name: 'Salty', chance: 10.87 }],
		},
	},
	{
		name: 'Cloyster',
		info: {
			moves: [
				'Icicle Spear',
				'Hydro Pump',
				'Ice Shard',
				'Supersonic',
				'Shell Smash',
			],
			herbs: [{ name: 'Salty', chance: 10.87 }],
		},
	},
	{
		name: 'Gengar',
		info: {
			moves: ['Shadow Ball', 'Sludge Bomb', 'Confuse Ray', 'Spite', 'Hypnosis'],
			herbs: [
				{ name: 'Spicy', chance: 10.87 },
				{ name: 'Sweet', chance: 10.87 },
				{ name: 'Salty', chance: 10.87 },
				{ name: 'Bitter', chance: 10.87 },
				{ name: 'Sour', chance: 10.879 },
			],
		},
	},
	{
		name: 'Scyther',
		info: {
			moves: [
				'Aerial Ace',
				'X-Scissor',
				'Slash',
				'Agility',
				'Focus Energy',
				'Swords Dance',
			],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Tauros (Fire)',
		formName: 'taurospaldeafire',
		imageAlt: '-b',
		info: {
			moves: [
				'Flare Blitz',
				'Close Combat',
				'Flamethrower',
				'Headbutt',
				'Work Up',
				'Sunny Day',
			],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Tauros (Water)',
		formName: 'taurospaldeawater',
		imageAlt: '-a',
		info: {
			moves: [
				'Wave Crash',
				'Close Combat',
				'Surf',
				'Headbutt',
				'Work Up',
				'Rain Dance',
			],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Gyarados',
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
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Ditto',
		info: { moves: ['Transform'], herbs: [{ name: 'Sweet', chance: 10.87 }] },
	},
	{
		name: 'Eevee',
		info: {
			moves: [
				'Tera Blast',
				'Take Down',
				'Shadow Ball',
				'Tickle',
				'Yawn',
				'Calm Mind',
			],
			herbs: [{ name: 'Bitter', chance: 10.87 }],
		},
	},
	{
		name: 'Dragonite',
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
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Slowking',
		info: {
			moves: [
				'Psychic',
				'Surf',
				'Yawn',
				'Water Pulse',
				'Psychic Terrain',
				'Calm Mind',
			],
			herbs: [{ name: 'Sour', chance: 10.87 }],
		},
	},
	{
		name: 'Scizor',
		info: {
			moves: [
				'Iron Head',
				'X-Scissor',
				'Bullet Punch',
				'Slash',
				'Iron Defense',
				'Focus Energy',
			],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Delibird',
		info: {
			moves: ['Present', 'Drill Peck', 'Ice Punch', 'Blizzard', 'Snowscape'],
			herbs: [{ name: 'Sweet', chance: 10.87 }],
		},
	},
	{
		name: 'Houndoom',
		info: {
			moves: [
				'Flamethrower',
				'Crunch',
				'Taunt',
				'Will-O-Wisp',
				'Sunny Day',
				'Howl',
			],
			herbs: [{ name: 'Bitter', chance: 10.87 }],
		},
	},
	{
		name: 'Blissey',
		info: {
			moves: ['Dazzling Gleam', 'Hyper Voice', 'Sing'],
			specialMoves: ['Seismic Toss', 'Gravity'],
			herbs: [
				{ name: 'Spicy', chance: 10.87 },
				{ name: 'Sweet', chance: 10.87 },
				{ name: 'Salty', chance: 10.87 },
				{ name: 'Bitter', chance: 10.87 },
				{ name: 'Sour', chance: 10.879 },
			],
		},
	},
	{
		name: 'Tyranitar',
		info: {
			moves: [
				'Rock Slide',
				'Crunch',
				'Screech',
				'Dark Pulse',
				'Dragon Dance',
				'Sandstorm',
			],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Gardevoir',
		info: {
			moves: [
				'Psychic',
				'Moonblast',
				'Draining Kiss',
				'Misty Terrain',
				'Calm Mind',
				'Psychic Terrain',
			],
			specialMoves: ['Disable'],
			herbs: [{ name: 'Bitter', chance: 10.87 }],
		},
	},
	{
		name: 'Breloom',
		info: {
			moves: [
				'Seed Bomb',
				'Mach Punch',
				'Worry Seed',
				'Headbutt',
				'Grassy Terrain',
			],
			specialMoves: ['Spore'],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Slaking',
		info: {
			moves: ['Facade', 'Shadow Claw', 'Play Rough', 'Swagger', 'Encore'],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Hariyama',
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
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Sableye',
		info: {
			moves: [
				'Shadow Claw',
				'Foul Play',
				'Will-O-Wisp',
				'Night Shade',
				'Flatter',
				'Torment',
			],
			herbs: [{ name: 'Sweet', chance: 10.87 }],
		},
	},
	{
		name: 'Camerupt',
		info: {
			moves: ['Flamethrower', 'Earth Power', 'Yawn', 'Eruption', 'Sunny Day'],
			herbs: [{ name: 'Bitter', chance: 10.87 }],
		},
	},
	{
		name: 'Altaria',
		info: {
			moves: ['Dragon Pulse', 'Hurricane', 'Sing', 'Mist', 'Safeguard'],
			herbs: [{ name: 'Sour', chance: 10.87 }],
		},
	},
	{
		name: 'Glalie',
		info: {
			moves: ['Freeze-Dry', 'Crunch', 'Headbutt', 'Frost Breath', 'Snowscape'],
			specialMoves: ['Disable'],
			herbs: [
				{ name: 'Spicy', chance: 10.87 },
				{ name: 'Sweet', chance: 10.87 },
				{ name: 'Salty', chance: 10.87 },
				{ name: 'Bitter', chance: 10.87 },
				{ name: 'Sour', chance: 10.879 },
			],
		},
	},
	{
		name: 'Salamence',
		info: {
			moves: [
				'Aerial Ace',
				'Hyper Voice',
				'Draco Meteor',
				'Dragon Dance',
				'Focus Energy',
			],
			specialMoves: ['Dragon Rush'],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Staraptor',
		info: {
			moves: ['Close Combat', 'Brave Bird', 'Quick Attack'],
			specialMoves: ['Double-Edge'],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Luxray',
		info: {
			moves: [
				'Crunch',
				'Wild Charge',
				'Discharge',
				'Thunder Wave',
				'Electric Terrain',
				'Leer',
			],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Drifblim',
		info: {
			moves: ['Hex', 'Air Slash', 'Thunder Wave', 'Shadow Ball', 'Will-O-Wisp'],
			herbs: [
				{ name: 'Spicy', chance: 10.87 },
				{ name: 'Sweet', chance: 10.87 },
				{ name: 'Salty', chance: 10.87 },
				{ name: 'Bitter', chance: 10.87 },
				{ name: 'Sour', chance: 10.879 },
			],
		},
	},
	{
		name: 'Mismagius',
		info: {
			moves: [
				'Mystical Fire',
				'Shadow Ball',
				'Confuse Ray',
				'Taunt',
				'Nasty Plot',
			],
			specialMoves: ['Light Screen'],
			herbs: [{ name: 'Sour', chance: 10.87 }],
		},
	},
	{
		name: 'Honchkrow',
		info: {
			moves: ['Night Slash', 'Hurricane', 'Haze', 'Wing Attack', 'Nasty Plot'],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Bronzong',
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
			herbs: [{ name: 'Salty', chance: 10.87 }],
		},
	},
	{
		name: 'Garchomp',
		info: {
			moves: [
				'Earthquake',
				'Dragon Claw',
				'Iron Head',
				'Slash',
				'Sandstorm',
				'Bulldoze',
			],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Hippowdon',
		info: {
			moves: ['Earthquake', 'Yawn', 'Rock Slide', 'Body Slam'],
			specialMoves: ['Stockpile'],
			herbs: [{ name: 'Salty', chance: 10.87 }],
		},
	},
	{
		name: 'Abomasnow',
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
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Weavile',
		info: {
			moves: ['Ice Punch', 'Night Slash', 'Taunt', 'Facade', 'Swords Dance'],
			specialMoves: ['Reflect'],
			herbs: [{ name: 'Sweet', chance: 10.87 }],
		},
	},
	{
		name: 'Magnezone',
		info: {
			moves: [
				'Thunderbolt',
				'Flash Cannon',
				'Tri Attack',
				'Thunder Wave',
				'Magnet Rise',
				'Electric Terrain',
			],
			herbs: [{ name: 'Bitter', chance: 10.87 }],
		},
	},
	{
		name: 'Gallade',
		info: {
			moves: [
				'Psycho Cut',
				'Brick Break',
				'Fury Cutter',
				'Hypnosis',
				'Psychic Terrain',
			],
			specialMoves: ['Disable', 'Shadow Sneak'],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Froslass',
		info: {
			moves: [
				'Frost Breath',
				'Shadow Ball',
				'Scary Face',
				'Draining Kiss',
				'Snowscape',
				'Aurora Veil',
			],
			specialMoves: ['Disable'],
			herbs: [{ name: 'Sweet', chance: 10.87 }],
		},
	},
	{
		name: 'Rotom',
		info: {
			moves: [
				'Discharge',
				'Uproar',
				'Hex',
				'Thunder Wave',
				'Charge',
				'Eerie Impulse',
			],
			herbs: [{ name: 'Bitter', chance: 10.87 }],
		},
	},
	{
		name: 'Krookodile',
		info: {
			moves: ['Earthquake', 'Crunch', 'Sand Tomb', 'Torment', 'Hone Claws'],
			specialMoves: ['Counter'],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Zoroark',
		info: {
			moves: [
				'Night Daze',
				'Shadow Claw',
				'Taunt',
				'Hyper Voice',
				'Torment',
				'Nasty Plot',
			],
			herbs: [{ name: 'Bitter', chance: 10.87 }],
		},
	},
	{
		name: 'Gothitelle',
		info: {
			moves: [
				'Psychic',
				'Thunder Wave',
				'Thunderbolt',
				'Stored Power',
				'Calm Mind',
				'Light Screen',
			],
			herbs: [{ name: 'Sour', chance: 10.87 }],
		},
	},
	{
		name: 'Amoonguss',
		info: {
			moves: [
				'Energy Ball',
				'Sludge Bomb',
				'Spore',
				'Clear Smog',
				'Grassy Terrain',
			],
			herbs: [
				{ name: 'Spicy', chance: 10.87 },
				{ name: 'Sweet', chance: 10.87 },
				{ name: 'Salty', chance: 10.87 },
				{ name: 'Bitter', chance: 10.87 },
				{ name: 'Sour', chance: 10.879 },
			],
		},
	},
	{
		name: 'Eelektross',
		info: {
			moves: [
				'Wild Charge',
				'Flamethrower',
				'Discharge',
				'Crush Claw',
				'Thunder Wave',
				'Coil',
			],
			herbs: [
				{ name: 'Spicy', chance: 10.87 },
				{ name: 'Sweet', chance: 10.87 },
				{ name: 'Salty', chance: 10.87 },
				{ name: 'Bitter', chance: 10.87 },
				{ name: 'Sour', chance: 10.879 },
			],
		},
	},
	{
		name: 'Haxorus',
		info: {
			moves: ['Dragon Claw', 'Crunch', 'Giga Impact', 'Dragon Dance'],
			specialMoves: ['Harden', 'First Impression'],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Braviary',
		info: {
			moves: [
				'Acrobatics',
				'Crush Claw',
				'Superpower',
				'Air Slash',
				'Tailwind',
				'Hone Claws',
			],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Hydreigon',
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
			herbs: [{ name: 'Bitter', chance: 10.87 }],
		},
	},
	{
		name: 'Volcarona',
		info: {
			moves: [
				'Fire Blast',
				'Bug Buzz',
				'Hurricane',
				'Will-O-Wisp',
				'Sunny Day',
				'Quiver Dance',
			],
			herbs: [{ name: 'Bitter', chance: 10.87 }],
		},
	},
	{
		name: 'Talonflame',
		info: {
			moves: [
				'Acrobatics',
				'Flare Blitz',
				'Steel Wing',
				'Heat Wave',
				'Bulk Up',
			],
			herbs: [{ name: 'Sweet', chance: 10.87 }],
		},
	},
	{
		name: 'Florges',
		info: {
			moves: [
				'Petal Dance',
				'Moonblast',
				'Psychic',
				'Safeguard',
				'Grassy Terrain',
				'Calm Mind',
			],
			herbs: [{ name: 'Sour', chance: 10.87 }],
		},
	},
	{
		name: 'Dragalge',
		info: {
			moves: [
				'Dragon Pulse',
				'Sludge Bomb',
				'Water Pulse',
				'Toxic',
				'Acid Spray',
				'Draco Meteor',
			],
			herbs: [{ name: 'Sour', chance: 10.87 }],
		},
	},
	{
		name: 'Clawitzer',
		info: {
			moves: [
				'Water Pulse',
				'Dragon Pulse',
				'Aura Sphere',
				'Crabhammer',
				'Rain Dance',
			],
			herbs: [{ name: 'Bitter', chance: 10.87 }],
		},
	},
	{
		name: 'Goodra',
		info: {
			moves: [
				'Water Pulse',
				'Dragon Pulse',
				'Sludge Bomb',
				'Power Whip',
				'Rain Dance',
				'Draco Meteor',
			],
			specialMoves: ['Acid Armor'],
			herbs: [{ name: 'Sour', chance: 10.87 }],
		},
	},
	{
		name: 'Avalugg',
		info: {
			moves: [
				'Icicle Crash',
				'Double-Edge',
				'Crunch',
				'Ice Fang',
				'Snowscape',
				'Iron Defense',
			],
			herbs: [{ name: 'Salty', chance: 10.87 }],
		},
	},
	{
		name: 'Noivern',
		info: {
			moves: [
				'Air Slash',
				'Dragon Pulse',
				'Acrobatics',
				'Boomburst',
				'Tailwind',
			],
			herbs: [{ name: 'Sweet', chance: 10.87 }],
		},
	},
	{
		name: 'Mudsdale',
		info: {
			moves: [
				'High Horsepower',
				'Body Press',
				'Rock Smash',
				'Heavy Slam',
				'Scary Face',
				'Iron Defense',
			],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Tsareena',
		info: {
			moves: [
				'High Jump Kick',
				'Power Whip',
				'Stomp',
				'Trop Kick',
				'Reflect',
				'Grassy Terrain',
			],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Oranguru',
		info: {
			moves: [
				'Facade',
				'Psychic',
				'Stored Power',
				'Yawn',
				'Calm Mind',
				'Light Screen',
			],
			herbs: [{ name: 'Bitter', chance: 10.87 }],
		},
	},
	{
		name: 'Passimian',
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
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Mimikyu',
		info: {
			moves: [
				'Play Rough',
				'Shadow Claw',
				'Will-O-Wisp',
				'Shadow Sneak',
				'Light Screen',
				'Taunt',
			],
			herbs: [{ name: 'Sour', chance: 10.87 }],
		},
	},
	{
		name: 'Greedent',
		info: {
			moves: [
				'Body Slam',
				'Body Press',
				'Bullet Seed',
				'Tail Whip',
				'Stockpile',
			],
			herbs: [{ name: 'Salty', chance: 10.87 }],
		},
	},
	{
		name: 'Corviknight',
		info: {
			moves: [
				'Steel Wing',
				'Drill Peck',
				'Taunt',
				'Body Press',
				'Iron Defense',
				'Hone Claws',
			],
			herbs: [{ name: 'Salty', chance: 10.87 }],
		},
	},
	{
		name: 'Coalossal',
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
			herbs: [{ name: 'Salty', chance: 10.87 }],
		},
	},
	{
		name: 'Flapple',
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
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Appletun',
		info: {
			moves: [
				'Apple Acid',
				'Dragon Pulse',
				'Giga Drain',
				'Body Press',
				'Growth',
			],
			herbs: [{ name: 'Bitter', chance: 10.87 }],
		},
	},
	{
		name: 'Toxtricity (Amped)',
		formName: 'toxtricity',
		info: {
			moves: [
				'Overdrive',
				'Poison Jab',
				'Nuzzle',
				'Boomburst',
				'Electric Terrain',
			],
			herbs: [{ name: 'Bitter', chance: 10.87 }],
		},
	},
	{
		name: 'Toxtricity (Low Key)',
		formName: 'toxtricity',
		imageAlt: '-l',
		info: {
			moves: [
				'Overdrive',
				'Poison Jab',
				'Nuzzle',
				'Boomburst',
				'Electric Terrain',
			],
			herbs: [{ name: 'Bitter', chance: 10.87 }],
		},
	},
	{
		name: 'Polteageist',
		info: {
			moves: [
				'Shadow Ball',
				'Mega Drain',
				'Astonish',
				'Will-O-Wisp',
				'Shell Smash',
			],
			herbs: [{ name: 'Bitter', chance: 10.87 }],
		},
	},
	{
		name: 'Hatterene',
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
			herbs: [{ name: 'Sour', chance: 10.87 }],
		},
	},
	{
		name: 'Grimmsnarl',
		info: {
			moves: [
				'Spirit Break',
				'False Surrender',
				'Scary Face',
				'Foul Play',
				'Light Screen',
				'Bulk Up',
			],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Falinks',
		info: {
			moves: ['Megahorn', 'Reversal', 'Headbutt', 'Brick Break', 'No Retreat'],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Pincurchin',
		info: {
			moves: [
				'Zing Zap',
				'Thunder',
				'Surf',
				'Poison Jab',
				'Rain Dance',
				'Electric Terrain',
			],
			herbs: [{ name: 'Bitter', chance: 10.87 }],
		},
	},
	{
		name: 'Indeedee (Male)',
		formName: 'indeedee',
		info: {
			moves: [
				'Psychic',
				'Hyper Voice',
				'Shadow Ball',
				'Trick Room',
				'Play Nice',
				'Calm Mind',
			],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Indeedee (Female)',
		formName: 'indeedee',
		imageAlt: '-f',
		info: {
			moves: [
				'Psychic',
				'Hyper Voice',
				'Shadow Ball',
				'Trick Room',
				'Play Nice',
				'Calm Mind',
			],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Copperajah',
		info: {
			moves: [
				'Heavy Slam',
				'Strength',
				'High Horsepower',
				'Sandstorm',
				'Iron Defense',
			],
			specialMoves: ['Curse'],
			herbs: [{ name: 'Salty', chance: 10.87 }],
		},
	},
	{
		name: 'Dragapult',
		info: {
			moves: [
				'Shadow Ball',
				'Dragon Darts',
				'Thunderbolt',
				'Hex',
				'Reflect',
				'Light Screen',
			],
			herbs: [{ name: 'Sweet', chance: 10.87 }],
		},
	},
	{
		name: 'Pawmot',
		info: {
			moves: ['Wild Charge', 'Close Combat', 'Nuzzle', 'Double Shock'],
			specialMoves: ['Sweet Kiss'],
			herbs: [{ name: 'Sweet', chance: 10.87 }],
		},
	},
	{
		name: 'Arboliva',
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
			herbs: [{ name: 'Bitter', chance: 10.87 }],
		},
	},
	{
		name: 'Garganacl',
		info: {
			moves: ['Salt Cure', 'Rock Slide', 'Hammer Arm', 'Sandstorm'],
			herbs: [{ name: 'Salty', chance: 10.87 }],
		},
	},
	{
		name: 'Armarouge',
		info: {
			moves: [
				'Armor Cannon',
				'Psychic',
				'Night Shade',
				'Will-O-Wisp',
				'Sunny Day',
				'Calm Mind',
			],
			herbs: [{ name: 'Bitter', chance: 10.87 }],
		},
	},
	{
		name: 'Ceruledge',
		info: {
			moves: [
				'Bitter Blade',
				'Shadow Claw',
				'Psycho Cut',
				'Will-O-Wisp',
				'Sunny Day',
				'Swords Dance',
			],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Mabosstiff',
		info: {
			moves: ['Crunch', 'Play Rough', 'Take Down', 'Swagger', 'Taunt'],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Brambleghast',
		info: {
			moves: [
				'Giga Drain',
				'Shadow Ball',
				'Power Whip',
				'Infestation',
				'Grassy Terrain',
			],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Tinkaton',
		info: {
			moves: [
				'Gigaton Hammer',
				'Play Rough',
				'Brutal Swing',
				'Rock Smash',
				'Thunder Wave',
			],
			specialMoves: ['Charm', 'Misty Terrain'],
			herbs: [{ name: 'Sour', chance: 10.87 }],
		},
	},
	{
		name: 'Bombirdier',
		info: {
			moves: [
				'Rock Slide',
				'Sucker Punch',
				'Brave Bird',
				'Torment',
				'Knock Off',
				'Feather Dance',
			],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Palafin',
		info: {
			moves: ['Liquidation', 'Acrobatics', 'Charm', 'Rain Dance', 'Bulk Up'],
			specialMoves: ['Boomburst'],
			herbs: [
				{ name: 'Spicy', chance: 10.87 },
				{ name: 'Sweet', chance: 10.87 },
				{ name: 'Salty', chance: 10.87 },
				{ name: 'Bitter', chance: 10.87 },
				{ name: 'Sour', chance: 10.879 },
			],
		},
	},
	{
		name: 'Revavroom',
		info: {
			moves: [
				'Spin Out',
				'Taunt',
				'Gunk Shot',
				'Overheat',
				'Scary Face',
				'Shift Gear',
			],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Orthworm',
		info: {
			moves: [
				'Iron Head',
				'Earthquake',
				'Stomping Tantrum',
				'Wrap',
				'Sandstorm',
				'Coil',
			],
			herbs: [{ name: 'Salty', chance: 10.87 }],
		},
	},
	{
		name: 'Glimmora',
		info: {
			moves: [
				'Power Gem',
				'Sludge Bomb',
				'Mortal Spin',
				'Ancient Power',
				'Sandstorm',
				'Tera Blast',
			],
			herbs: [{ name: 'Bitter', chance: 10.87 }],
		},
	},
	{
		name: 'Cetitan',
		info: {
			moves: ['Ice Spinner', 'Liquidation', 'Snowscape'],
			specialMoves: ['Yawn', 'Entrainment'],
			herbs: [
				{ name: 'Spicy', chance: 10.87 },
				{ name: 'Sweet', chance: 10.87 },
				{ name: 'Salty', chance: 10.87 },
				{ name: 'Bitter', chance: 10.87 },
				{ name: 'Sour', chance: 10.879 },
			],
		},
	},
	{
		name: 'Dondozo',
		info: {
			moves: ['Order Up', 'Waterfall', 'Heavy Slam', 'Tickle', 'Rain Dance'],
			specialMoves: ['Stockpile'],
			herbs: [
				{ name: 'Spicy', chance: 10.87 },
				{ name: 'Sweet', chance: 10.87 },
				{ name: 'Salty', chance: 10.87 },
				{ name: 'Bitter', chance: 10.87 },
				{ name: 'Sour', chance: 10.879 },
			],
		},
	},
	{
		name: 'Tatsugiri (Curly)',
		formName: 'tatsugiri',
		info: {
			moves: [
				'Water Pulse',
				'Dragon Pulse',
				'Rapid Spin',
				'Counter',
				'Chilling Water',
			],
			herbs: [{ name: 'Bitter', chance: 10.87 }],
		},
	},
	{
		name: 'Tatsugiri (Droopy)',
		formName: 'tatsugiri',
		imageAlt: '-d',
		info: {
			moves: [
				'Water Pulse',
				'Dragon Pulse',
				'Rapid Spin',
				'Counter',
				'Chilling Water',
			],
			herbs: [{ name: 'Bitter', chance: 10.87 }],
		},
	},
	{
		name: 'Tatsugiri (Stretchy)',
		formName: 'tatsugiri',
		imageAlt: '-s',
		info: {
			moves: [
				'Water Pulse',
				'Dragon Pulse',
				'Rapid Spin',
				'Counter',
				'Chilling Water',
			],
			herbs: [{ name: 'Bitter', chance: 10.87 }],
		},
	},
	{
		name: 'Annihilape',
		info: {
			moves: [
				'Shadow Claw',
				'Close Combat',
				'Outrage',
				'Leer',
				'Taunt',
				'Bulk Up',
			],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Kingambit',
		info: {
			moves: [
				'Iron Head',
				'Night Slash',
				'Torment',
				'Slash',
				'Taunt',
				'Metal Burst',
			],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
	{
		name: 'Baxcalibur',
		info: {
			moves: [
				'Dragon Claw',
				'Icicle Crash',
				'Ice Shard',
				'Body Press',
				'Snowscape',
			],
			herbs: [{ name: 'Spicy', chance: 10.87 }],
		},
	},
];

export const SixStarRaids: Raid[] = [
	{
		name: 'Gengar',
		info: {
			moves: [
				'Shadow Ball',
				'Sludge Bomb',
				'Dazzling Gleam',
				'Will-O-Wisp',
				'Hypnosis',
			],
			herbs: [{ name: 'Bitter', chance: 13.64 }],
		},
	},
	{
		name: 'Tauros',
		formName: 'taurospaldea',
		imageAlt: '-p',
		info: {
			moves: [
				'Close Combat',
				'Thrash',
				'Zen Headbutt',
				'Raging Bull',
				'Bulk Up',
			],
			specialMoves: ['Screech'],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Tauros (Fire)',
		formName: 'taurospaldeafire',
		imageAlt: '-b',
		info: {
			moves: [
				'Flare Blitz',
				'Close Combat',
				'Flamethrower',
				'Headbutt',
				'Sunny Day',
				'Bulk Up',
			],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Tauros (Water)',
		formName: 'taurospaldeawater',
		imageAlt: '-a',
		info: {
			moves: [
				'Wave Crash',
				'Close Combat',
				'Surf',
				'Headbutt',
				'Rain Dance',
				'Bulk Up',
			],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Gyarados',
		info: {
			moves: [
				'Aqua Tail',
				'Crunch',
				'Hurricane',
				'Ice Fang',
				'Taunt',
				'Dragon Dance',
			],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Ditto',
		info: { moves: ['Transform'], herbs: [{ name: 'Sweet', chance: 13.64 }] },
	},
	{
		name: 'Vaporeon',
		info: {
			moves: ['Tera Blast', 'Surf', 'Hyper Voice', 'Rain Dance', 'Calm Mind'],
			specialMoves: ['Yawn'],
			herbs: [
				{ name: 'Spicy', chance: 13.64 },
				{ name: 'Sweet', chance: 13.64 },
				{ name: 'Salty', chance: 13.64 },
				{ name: 'Bitter', chance: 13.64 },
				{ name: 'Sour', chance: 13.64 },
			],
		},
	},
	{
		name: 'Jolteon',
		info: {
			moves: [
				'Tera Blast',
				'Thunderbolt',
				'Shadow Ball',
				'Thunder Wave',
				'Electric Terrain',
				'Calm Mind',
			],
			herbs: [{ name: 'Sweet', chance: 13.64 }],
		},
	},
	{
		name: 'Flareon',
		info: {
			moves: [
				'Tera Blast',
				'Flare Blitz',
				'Lava Plume',
				'Will-O-Wisp',
				'Sunny Day',
			],
			specialMoves: ['Curse'],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Dragonite',
		info: {
			moves: [
				'Dragon Rush',
				'Extreme Speed',
				'Dragon Dance',
				'Aqua Tail',
				'Light Screen',
			],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Espeon',
		info: {
			moves: [
				'Tera Blast',
				'Psychic',
				'Psyshock',
				'Psychic Terrain',
				'Calm Mind',
			],
			specialMoves: ['Tickle'],
			herbs: [{ name: 'Bitter', chance: 13.64 }],
		},
	},
	{
		name: 'Umbreon',
		info: {
			moves: ['Tera Blast', 'Dark Pulse', 'Foul Play', 'Calm Mind'],
			specialMoves: ['Curse', 'Tickle'],
			herbs: [{ name: 'Sour', chance: 13.64 }],
		},
	},
	{
		name: 'Slowking',
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
			herbs: [{ name: 'Sour', chance: 13.64 }],
		},
	},
	{
		name: 'Scizor',
		info: {
			moves: [
				'X-Scissor',
				'Bullet Punch',
				'Close Combat',
				'Iron Head',
				'Iron Defense',
				'Focus Energy',
			],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Heracross',
		info: {
			moves: ['Megahorn', 'Close Combat', 'Thrash', 'Leer', 'Bulk Up'],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Blissey',
		info: {
			moves: [
				'Dazzling Gleam',
				'Hyper Voice',
				'Sing',
				'Light Screen',
				'Defense Curl',
			],
			herbs: [
				{ name: 'Spicy', chance: 13.64 },
				{ name: 'Sweet', chance: 13.64 },
				{ name: 'Salty', chance: 13.64 },
				{ name: 'Bitter', chance: 13.64 },
				{ name: 'Sour', chance: 13.64 },
			],
		},
	},
	{
		name: 'Tyranitar',
		info: {
			moves: ['Stone Edge', 'Crunch', 'Screech', 'Rock Blast', 'Iron Defense'],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Pelipper',
		info: {
			moves: [
				'Hurricane',
				'Hydro Pump',
				'Mist',
				'Supersonic',
				'Rain Dance',
				'Agility',
			],
			herbs: [{ name: 'Salty', chance: 13.64 }],
		},
	},
	{
		name: 'Gardevoir',
		info: {
			moves: [
				'Moonblast',
				'Psychic',
				'Calm Mind',
				'Thunder Wave',
				'Misty Terrain',
				'Psychic Terrain',
			],
			herbs: [{ name: 'Bitter', chance: 13.64 }],
		},
	},
	{
		name: 'Breloom',
		info: {
			moves: ['Bullet Seed', 'Low Sweep', 'Aerial Ace', 'Grassy Terrain'],
			specialMoves: ['Spore'],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Torkoal',
		info: {
			moves: [
				'Lava Plume',
				'Yawn',
				'Clear Smog',
				'Body Slam',
				'Sunny Day',
				'Iron Defense',
			],
			herbs: [{ name: 'Salty', chance: 13.64 }],
		},
	},
	{
		name: 'Salamence',
		info: {
			moves: [
				'Outrage',
				'Dual Wingbeat',
				'Flamethrower',
				'Tera Blast',
				'Dragon Dance',
			],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Staraptor',
		info: {
			moves: ['Close Combat', 'Brave Bird'],
			specialMoves: ['Double-Edge', 'Feather Dance'],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Garchomp',
		info: {
			moves: [
				'Outrage',
				'Earthquake',
				'Flamethrower',
				'Rock Slide',
				'Swords Dance',
			],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Hippowdon',
		info: {
			moves: ['Earthquake', 'Ice Fang', 'Yawn', 'Rock Slide'],
			herbs: [{ name: 'Salty', chance: 13.64 }],
		},
	},
	{
		name: 'Magnezone',
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
			herbs: [{ name: 'Bitter', chance: 13.64 }],
		},
	},
	{
		name: 'Leafeon',
		info: {
			moves: ['Tera Blast', 'Leaf Blade', 'Charm', 'Sunny Day', 'Swords Dance'],
			specialMoves: ['Double Kick'],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Glaceon',
		info: {
			moves: [
				'Tera Blast',
				'Ice Beam',
				'Blizzard',
				'Charm',
				'Snowscape',
				'Calm Mind',
			],
			herbs: [{ name: 'Bitter', chance: 13.64 }],
		},
	},
	{
		name: 'Gallade',
		info: {
			moves: [
				'Psycho Cut',
				'Close Combat',
				'Will-O-Wisp',
				'Aerial Ace',
				'Hypnosis',
				'Psychic Terrain',
			],
			specialMoves: ['Disable'],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Amoonguss',
		info: {
			moves: [
				'Energy Ball',
				'Foul Play',
				'Spore',
				'Sludge Bomb',
				'Grassy Terrain',
			],
			herbs: [
				{ name: 'Spicy', chance: 13.64 },
				{ name: 'Sweet', chance: 13.64 },
				{ name: 'Salty', chance: 13.64 },
				{ name: 'Bitter', chance: 13.64 },
				{ name: 'Sour', chance: 13.64 },
			],
		},
	},
	{
		name: 'Haxorus',
		info: {
			moves: ['Outrage', 'Crunch', 'Giga Impact', 'Dragon Dance'],
			specialMoves: ['First Impression'],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Hydreigon',
		info: {
			moves: [
				'Dark Pulse',
				'Dragon Pulse',
				'Crunch',
				'Taunt',
				'Work Up',
				'Nasty Plot',
			],
			herbs: [{ name: 'Bitter', chance: 13.64 }],
		},
	},
	{
		name: 'Volcarona',
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
			herbs: [{ name: 'Bitter', chance: 13.64 }],
		},
	},
	{
		name: 'Talonflame',
		info: {
			moves: [
				'Brave Bird',
				'Flare Blitz',
				'Flamethrower',
				'Tera Blast',
				'Sunny Day',
				'Swords Dance',
			],
			herbs: [{ name: 'Sweet', chance: 13.64 }],
		},
	},
	{
		name: 'Dragalge',
		info: {
			moves: [
				'Dragon Pulse',
				'Sludge Bomb',
				'Water Pulse',
				'Toxic',
				'Acid Spray',
				'Draco Meteor',
			],
			herbs: [{ name: 'Bitter', chance: 13.64 }],
		},
	},
	{
		name: 'Clawitzer',
		info: {
			moves: [
				'Water Pulse',
				'Dragon Pulse',
				'Aura Sphere',
				'Crabhammer',
				'Rain Dance',
			],
			herbs: [{ name: 'Bitter', chance: 13.64 }],
		},
	},
	{
		name: 'Sylveon',
		info: {
			moves: [
				'Tera Blast',
				'Hyper Voice',
				'Moonblast',
				'Misty Terrain',
				'Calm Mind',
			],
			specialMoves: ['Yawn'],
			herbs: [{ name: 'Bitter', chance: 13.64 }],
		},
	},
	{
		name: 'Goodra',
		info: {
			moves: [
				'Dragon Pulse',
				'Surf',
				'Sludge Bomb',
				'Power Whip',
				'Rain Dance',
			],
			herbs: [{ name: 'Sour', chance: 13.64 }],
		},
	},
	{
		name: 'Avalugg',
		info: {
			moves: [
				'Icicle Crash',
				'Heavy Slam',
				'Snowscape',
				'Ice Spinner',
				'Iron Defense',
			],
			herbs: [{ name: 'Salty', chance: 13.64 }],
		},
	},
	{
		name: 'Lycanroc',
		imageAlt: '-d',
		info: {
			moves: ['Accelerock', 'Rock Slide', 'Crunch', 'Taunt', 'Sandstorm'],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Toxapex',
		info: {
			moves: [
				'Water Pulse',
				'Liquidation',
				'Poison Jab',
				'Pin Missile',
				'Chilling Water',
				'Toxic',
			],
			herbs: [{ name: 'Salty', chance: 13.64 }],
		},
	},
	{
		name: 'Mimikyu',
		info: {
			moves: [
				'Play Rough',
				'Shadow Claw',
				'Shadow Sneak',
				'Wood Hammer',
				'Misty Terrain',
				'Swords Dance',
			],
			herbs: [{ name: 'Sour', chance: 13.64 }],
		},
	},
	{
		name: 'Corviknight',
		info: {
			moves: [
				'Iron Head',
				'Drill Peck',
				'Body Press',
				'Hone Claws',
				'Tailwind',
			],
			herbs: [{ name: 'Salty', chance: 13.64 }],
		},
	},
	{
		name: 'Pincurchin',
		info: {
			moves: [
				'Zing Zap',
				'Thunder',
				'Surf',
				'Poison Jab',
				'Thunder Wave',
				'Electric Terrain',
			],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Frosmoth',
		info: {
			moves: ['Blizzard', 'Bug Buzz', 'Hurricane', 'Snowscape'],
			herbs: [{ name: 'Sour', chance: 13.64 }],
		},
	},
	{
		name: 'Dragapult',
		info: {
			moves: [
				'Shadow Ball',
				'Dragon Pulse',
				'Thunderbolt',
				'Flamethrower',
				'Reflect',
				'Light Screen',
			],
			herbs: [{ name: 'Sweet', chance: 13.64 }],
		},
	},
	{
		name: 'Pawmot',
		info: {
			moves: [
				'Wild Charge',
				'Close Combat',
				'Double Shock',
				'Nuzzle',
				'Electric Terrain',
			],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Maushold',
		imageAlt: '-f',
		info: {
			moves: ['Play Rough', 'Take Down', 'Low Kick', 'Charm', 'Tidy Up'],
			herbs: [{ name: 'Sweet', chance: 13.64 }],
		},
	},
	{
		name: 'Dachsbun',
		info: {
			moves: ['Play Rough', 'Double-Edge', 'Bite', 'Baby-Doll Eyes'],
			herbs: [{ name: 'Salty', chance: 13.64 }],
		},
	},
	{
		name: 'Garganacl',
		info: {
			moves: [
				'Stone Edge',
				'Heavy Slam',
				'Salt Cure',
				'Hammer Arm',
				'Sandstorm',
				'Rock Slide',
			],
			herbs: [{ name: 'Salty', chance: 13.64 }],
		},
	},
	{
		name: 'Armarouge',
		info: {
			moves: [
				'Armor Cannon',
				'Psychic',
				'Night Shade',
				'Will-O-Wisp',
				'Calm Mind',
				'Sunny Day',
			],
			herbs: [{ name: 'Bitter', chance: 13.64 }],
		},
	},
	{
		name: 'Ceruledge',
		info: {
			moves: [
				'Bitter Blade',
				'Shadow Claw',
				'Psycho Cut',
				'Will-O-Wisp',
				'Sunny Day',
			],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Kilowattrel',
		info: {
			moves: ['Hurricane', 'Thunder', 'Uproar', 'Scary Face'],
			specialMoves: ['Charge', 'Rain Dance'],
			herbs: [{ name: 'Sweet', chance: 13.64 }],
		},
	},
	{
		name: 'Mabosstiff',
		info: {
			moves: ['Crunch', 'Reversal', 'Outrage', 'Take Down', 'Taunt'],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Grafaiai',
		info: {
			moves: ['Knock Off', 'Gunk Shot', 'Take Down', 'Flatter'],
			specialMoves: ['Toxic'],
			herbs: [{ name: 'Sweet', chance: 13.64 }],
		},
	},
	{
		name: 'Toedscruel',
		info: {
			moves: ['Energy Ball', 'Earth Power', 'Spore', 'Hex', 'Grassy Terrain'],
			herbs: [{ name: 'Sour', chance: 13.64 }],
		},
	},
	{
		name: 'Klawf',
		info: {
			moves: [
				'Stone Edge',
				'Rock Smash',
				'X-Scissor',
				'Sandstorm',
				'Knock Off',
				'Iron Defense',
			],
			herbs: [{ name: 'Salty', chance: 13.64 }],
		},
	},
	{
		name: 'Tinkaton',
		info: {
			moves: [
				'Gigaton Hammer',
				'Play Rough',
				'Knock Off',
				'Thunder Wave',
				'Sweet Kiss',
			],
			specialMoves: ['Misty Terrain'],
			herbs: [{ name: 'Sour', chance: 13.64 }],
		},
	},
	{
		name: 'Bombirdier',
		info: {
			moves: ['Rock Slide', 'Acrobatics', 'Knock Off', 'Feather Dance'],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Revavroom',
		info: {
			moves: [
				'Gunk Shot',
				'Overheat',
				'Iron Head',
				'Taunt',
				'Scary Face',
				'Shift Gear',
			],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Cyclizar',
		info: {
			moves: [
				'Double-Edge',
				'Dragon Claw',
				'Dragon Pulse',
				'Knock Off',
				'Shift Gear',
			],
			herbs: [{ name: 'Sweet', chance: 13.64 }],
		},
	},
	{
		name: 'Orthworm',
		info: {
			moves: ['Iron Head', 'Earthquake', 'Smack Down', 'Sandstorm', 'Coil'],
			herbs: [{ name: 'Salty', chance: 13.64 }],
		},
	},
	{
		name: 'Glimmora',
		info: {
			moves: [
				'Power Gem',
				'Sludge Wave',
				'Hyper Beam',
				'Rock Polish',
				'Sandstorm',
			],
			herbs: [{ name: 'Bitter', chance: 13.64 }],
		},
	},
	{
		name: 'Cetitan',
		info: {
			moves: ['Ice Spinner', 'Body Slam', 'Snowscape', 'Stomping Tantrum'],
			specialMoves: ['Yawn'],
			herbs: [
				{ name: 'Spicy', chance: 13.64 },
				{ name: 'Sweet', chance: 13.64 },
				{ name: 'Salty', chance: 13.64 },
				{ name: 'Bitter', chance: 13.64 },
				{ name: 'Sour', chance: 13.64 },
			],
		},
	},
	{
		name: 'Dondozo',
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
				{ name: 'Spicy', chance: 13.64 },
				{ name: 'Sweet', chance: 13.64 },
				{ name: 'Salty', chance: 13.64 },
				{ name: 'Bitter', chance: 13.64 },
				{ name: 'Sour', chance: 13.64 },
			],
		},
	},
	{
		name: 'Annihilape',
		info: {
			moves: [
				'Close Combat',
				'Shadow Claw',
				'Assurance',
				'Focus Energy',
				'Bulk Up',
				'Rage Fist',
			],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Clodsire',
		info: {
			moves: ['Earthquake', 'Poison Jab', 'Megahorn', 'Yawn'],
			herbs: [{ name: 'Sour', chance: 13.64 }],
		},
	},
	{
		name: 'Farigiraf',
		info: {
			moves: ['Twin Beam', 'Hyper Voice', 'Low Kick', 'Agility'],
			specialMoves: ['Uproar'],
			herbs: [
				{ name: 'Spicy', chance: 13.64 },
				{ name: 'Sweet', chance: 13.64 },
				{ name: 'Salty', chance: 13.64 },
				{ name: 'Bitter', chance: 13.64 },
				{ name: 'Sour', chance: 13.64 },
			],
		},
	},
	{
		name: 'Kingambit',
		info: {
			moves: [
				'Iron Head',
				'Night Slash',
				'Kowtow Cleave',
				'Thunder Wave',
				'Swords Dance',
			],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
	{
		name: 'Baxcalibur',
		info: {
			moves: ['Snowscape', 'Body Press'],
			specialMoves: ['Icicle Spear', 'Dragon Rush'],
			herbs: [{ name: 'Spicy', chance: 13.64 }],
		},
	},
];
