import { Result } from '../models/types';

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

export function createMatchups(matchups: Result): string[] {
	const display: string[] = [];

	Object.entries(matchups)
		.sort((a, b) => b[1] - a[1])
		.forEach(([key, value]) => {
			display.push(createTypeMatchupDiv(key, value));
		});

	return display;
}

export function createTypeMatchupDiv(type: string, matchup: number): string {
	return `<div class="typeMatchupText ${type}">${capitalize(
		type
	)} - ${matchup}x</div>`;
}
