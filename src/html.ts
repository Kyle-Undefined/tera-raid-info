import { Stats } from './models/raids';
import { Result } from './models/types';
import { AbilityDex } from './models/abilities';
import { MoveDex, Category } from './models/moves';
import { HerbDex } from './models/herbs';

import { Data } from './data';
import { TypeCalc } from './typeCalc';
import * as common from './common';

export const teraTypes = {
	Normal: '1',
	Fighting: '2',
	Flying: '3',
	Poison: '4',
	Ground: '5',
	Rock: '6',
	Bug: '7',
	Ghost: '8',
	Steel: '9',
	Fire: '10',
	Water: '11',
	Grass: '12',
	Electric: '13',
	Psychic: '14',
	Ice: '15',
	Dragon: '16',
	Dark: '17',
	Fairy: '18',
};

const raidTier = document.getElementById('raidTier') as HTMLSelectElement;
const pokemonList = document.getElementById('pokemonList') as HTMLSelectElement;
const teraList = document.getElementById('teraList') as HTMLSelectElement;

const pokemonTypes = document.getElementById('pokemonTypes') as HTMLDivElement;
const pokemonImageNormal = document.getElementById(
	'pokemonImageNormal'
) as HTMLDivElement;
const pokemonImageShiny = document.getElementById(
	'pokemonImageShiny'
) as HTMLDivElement;
const pokemonAbility = document.getElementById(
	'pokemonAbility'
) as HTMLDivElement;
const pokemonStatsWrapper = document.getElementById(
	'pokemonStatsWrapper'
) as HTMLDivElement;
const pokemonMoves = document.getElementById('pokemonMoves') as HTMLDivElement;
const pokemonHerbs = document.getElementById('pokemonHerbs') as HTMLDivElement;
const pokemonTypeAdvantages = document.getElementById(
	'pokemonTypeAdvantages'
) as HTMLDivElement;
const pokemonTeraWeaknesses = document.getElementById(
	'pokemonTeraWeaknesses'
) as HTMLDivElement;
const pokemonTeraAdvantages = document.getElementById(
	'pokemonTeraAdvantages'
) as HTMLDivElement;

const data = new Data();
const typeCalc = new TypeCalc();

export class Html {
	clearDiv(section?: string): void {
		const sections = [
			'pokemonTypes',
			'pokemonImageNormal',
			'pokemonImageShiny',
			'pokemonAbility',
			'pokemonStatsWrapper',
			'pokemonMoves',
			'pokemonHerbs',
			'pokemonTypeAdvantages',
			'pokemonTeraWeaknesses',
			'pokemonTeraAdvantages',
		];

		(section ? [section] : sections).forEach((entry) => {
			const div = document.getElementById(entry) as HTMLDivElement;
			div.innerHTML = '';
		});
	}

	createAbilityDisplay(ability: AbilityDex, hidden?: boolean): string {
		return `<div class="typeMatchupText" data-info="${ability.desc}">${
			ability.name
		}${hidden ? ' (H)' : ''}</div>`;
	}

	createHerbDisplay(herb: HerbDex): string {
		return `<div class="herbPill ${herb.name.toLowerCase()}">${herb.name} - ${
			herb.chance
		}%</div>`;
	}

	createMatchupsDisplay(matchups: Result): string[] {
		const display: string[] = [];

		Object.entries(matchups)
			.sort((a, b) => b[1] - a[1])
			.forEach(([key, value]) => {
				display.push(this.createTypeMatchupDisplay(key, value));
			});

		return display;
	}

	createMoveDisplay(move: MoveDex): string {
		let moveDisplay = `<div class="typeMatchupText ${data
			.getTypeDexEntry(move.type)
			.name.toLowerCase()}">${move.name}`;
		moveDisplay += `<div class="moveStats">`;
		moveDisplay += `<div class="type">${move.category.toString()}</div>`;
		moveDisplay += `<div class="bp">Pwr: ${move.bp}</div>`;
		moveDisplay += `<div class="pp">PP: ${move.pp}</div>`;
		moveDisplay += `<div class="acc">Acc: ${move.acc}</div>`;
		moveDisplay += `<div class="desc">${move.desc}</div>`;

		if (move.category != Category.Status) {
			const advantages: Result = typeCalc.advantage([move.type.toString()]);
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

	createStatsDisplay(stats: Stats): string {
		let statDisplay = '<div id="pokemonStats"><h3>Base Stats</h3>';
		statDisplay += `<div class="stat hp"><p>HP</p><p data-label="HP">${stats.hp}</p></div>`;
		statDisplay += `<div class="stat at"><p>Atk</p><p data-label="Atk">${stats.attack}</p></div>`;
		statDisplay += `<div class="stat df"><p>Def</p><p data-label="Def">${stats.defense}</p></div>`;
		statDisplay += `<div class="stat sa"><p>Sp.Atk</p><p data-label="Sp. Atk">${stats.spatk}</p></div>`;
		statDisplay += `<div class="stat sd"><p>Sp.Def</p><p data-label="Sp. Def">${stats.spdef}</p></div>`;
		statDisplay += `<div class="stat sp"><p>Spd</p><p data-label="Spd">${stats.speed}</p></div></div>`;

		return statDisplay;
	}

	createTypeDisplay(type: string): string {
		return `<div class="typeText ${type.toLowerCase()}">${type}</div>`;
	}

	createTypeMatchupDisplay(type: string, matchup: number): string {
		return `<div class="typeMatchupText ${type}">${common.capitalize(
			type
		)} - ${matchup}x</div>`;
	}

	handlePokemonListChange(): void {
		this.clearDiv();

		if (pokemonList.value) {
			data.bindPokemon(pokemonList.value);

			this.viewPokemonTypes();
			this.viewPokemonImages();
			this.viewPokemonAbilities();
			this.viewPokemonStats();
			this.viewPokemonMoves();
			this.viewPokemonHerbs();

			if (teraList.value) {
				this.viewTypeWeaknesses(teraList.value);
			}

			if (pokemonMoves.textContent?.includes('Tera Blast')) {
				this.viewTeraTypeAdvantages(teraList.value);
			}
		}
	}

	handleTeraListChange(): void {
		if (raidTier.value && pokemonList.value) {
			this.viewTypeWeaknesses(teraList.value);
		}

		if (pokemonMoves.textContent?.includes('Tera Blast')) {
			this.viewTeraTypeAdvantages(teraList.value);
		}
	}

	populateTeraList(): void {
		Object.entries(teraTypes)
			.sort()
			.forEach(([key, value]) => {
				const option = document.createElement('option');
				option.value = value;
				option.text = key;

				teraList.add(option);
			});
	}

	sortByCategory(a: number, b: number): number {
		if (
			data.getMoveDexEntry(a).category == Category.Status ||
			data.getMoveDexEntry(b).category == Category.Status
		) {
			return 1;
		} else {
			return -1;
		}
	}

	updateDiv(div: HTMLDivElement, html: string): void {
		div.innerHTML += html;
	}

	viewPokemonAbilities(): void {
		this.updateDiv(pokemonAbility, '<h3>Ability:</h3>');

		data.getPokemonAbilities().forEach((ability) => {
			this.updateDiv(
				pokemonAbility,
				this.createAbilityDisplay(data.getAbilityDexEntry(ability))
			);
		});

		if (data.getPokemonHiddenAbility()) {
			this.updateDiv(
				pokemonAbility,
				this.createAbilityDisplay(
					data.getAbilityDexEntry(data.getPokemonHiddenAbility()),
					true
				)
			);
		}
	}

	viewPokemonHerbs(): void {
		this.updateDiv(pokemonHerbs, '<h3>Herbs Dropped:</h3>');

		data.getPokemonHerbs().forEach((herb) => {
			this.updateDiv(
				pokemonHerbs,
				this.createHerbDisplay(data.getHerbDexEntry(herb))
			);
		});
	}

	viewPokemonImages(): void {
		const dex: string = data.getPokemonDexNumber();

		this.updateDiv(
			pokemonImageNormal,
			`<img alt="Normal" title="Normal" src="/assets/pokemon/${dex}.png" />`
		);
		this.updateDiv(
			pokemonImageShiny,
			`<img alt="Shiny" title="Shiny" src="/assets/pokemon/shiny/${dex}.png" />`
		);
	}

	viewPokemonMoves(): void {
		this.updateDiv(pokemonMoves, '<h3>Moves:</h3>');

		let types: string[] = [];
		data
			.getPokemonMoves()
			.sort(this.sortByCategory)
			.forEach((moveNumber) => {
				const move: MoveDex = data.getMoveDexEntry(moveNumber);

				this.updateDiv(pokemonMoves, this.createMoveDisplay(move));

				if (move.category != Category.Status) {
					types.push(move.type.toString());
				}
			});
		types = [...new Set(types)];

		const advantages: Result = typeCalc.advantage(types.sort());
		const display: string[] = this.createMatchupsDisplay(advantages);

		if (display) {
			this.updateDiv(
				pokemonTypeAdvantages,
				'<h3>Type Advantages:</h3>' + display.join('')
			);
		}

		if (teraList.value) {
			if (pokemonMoves.textContent?.includes('Tera Blast')) {
				this.viewTeraTypeAdvantages(teraList.value);
			}
		}
	}

	viewPokemonStats(): void {
		this.updateDiv(
			pokemonStatsWrapper,
			this.createStatsDisplay(data.getPokemonStats())
		);
	}

	viewPokemonTypes(): void {
		data.getPokemonTypeNames().forEach((type) => {
			this.updateDiv(pokemonTypes, this.createTypeDisplay(type));
		});
	}

	viewTeraTypeAdvantages(type: string): void {
		this.clearDiv('pokemonTeraAdvantages');

		const advantages: Result = typeCalc.advantage([type]);
		const display: string[] = this.createMatchupsDisplay(advantages);

		if (display) {
			this.updateDiv(
				pokemonTeraAdvantages,
				'<h3>Tera Advantages:</h3>' + display.join('')
			);
		}
	}

	viewTypeWeaknesses(type: string): void {
		this.clearDiv('pokemonTeraWeaknesses');

		const weaknesses: Result = typeCalc.weakness(type);
		const display: string[] = this.createMatchupsDisplay(weaknesses);

		if (display) {
			this.updateDiv(
				pokemonTeraWeaknesses,
				'<h3>Tera Weaknesses:</h3>' + display.join('')
			);
		}
	}
}
