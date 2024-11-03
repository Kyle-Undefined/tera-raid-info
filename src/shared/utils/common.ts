import { TypeCalcResult } from '../services/type-calc/type-calc.service';

export function capitalize(word: string): string {
	return word
		.toLowerCase()
		.replace(/\w/, (firstLetter) => firstLetter.toUpperCase());
}

export function clearData(section?: string): void {
	const sections = [
		'pokemonTypes',
		'pokemonImageNormal',
		'pokemonImageShiny',
		'pokemonAbility',
		'pokemonStatsWrapper',
		'pokemonActions',
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

export function updateDiv(div: HTMLDivElement, html: string): void {
	div.innerHTML += html;
}

export function createTypeMatchupDiv(type: TypeCalcResult): string {
	return `<div class="typeMatchupText ${type.name}">${capitalize(
		type.name
	)} - ${type.multiplier}x</div>`;
}

export function padLeft(num: number, length: number, char: string): string {
	return String(num).padStart(length, char);
}
