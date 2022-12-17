import data from './data.json' assert {type: 'json'};



function populatePokemonList() {
	Object.entries(data.pokemon).forEach((pokemon) => {
		const [mon] = pokemon;
		
		$('#pokemonList').append($('<option>', {
			value: mon,
			text: mon
		}));
	});
}

function createTypeDiv(type) {
	return `<div class="typeText ${type.toLowerCase()}">${type}</div>`;
}

function createStatsTable(stats) {
	var tableString = '<table><caption>Base Stats</caption>';
	tableString += '<thead><tr><th scope="col">HP</th><th scope="col">Atk</th><th scope="col">Def</th><th scope="col">Sp. Atk</th><th scope="col">Sp. Def</th><th scope="col">Spd</th></tr></thead>';
	tableString += '<tbody><tr>';
	tableString += `<td scope="row" data-label="HP">${stats.hp}</td>`;
	tableString += `<td scope="row" data-label="Atk">${stats.attack}</td>`;
	tableString += `<td scope="row" data-label="Def">${stats.defense}</td>`;
	tableString += `<td scope="row" data-label="Sp. Atk">${stats.spatk}</td>`;
	tableString += `<td scope="row" data-label="Sp. Def">${stats.spdef}</td>`;
	tableString += `<td scope="row" data-label="Spd">${stats.speed}</td>`;
	tableString += '</tr></tbody>';
	tableString += '</table>';
	
	return tableString;
}

function getPokemonTypes(pokemon) {
	Object.entries(data.pokemon[pokemon].type).forEach((types) => {
		const [type] = types;
		$('#pokemonTypes').append(createTypeDiv(data.pokemon[pokemon].type[type]));
	});
}

function getPokemonImage(pokemon) {
	$('#pokemonImageNormal').prepend(`<img src="${data.pokemon[pokemon].normal}" id="${pokemon}" alt="Normal" />`);
	$('#pokemonImageShiny').prepend(`<img src="${data.pokemon[pokemon].shiny}" id="${pokemon}" alt="Shiny" />`);
}

function getPokemonAbility(pokemon) {
	$('#pokemonAbility').prepend(`Ability: <br/>${data.pokemon[pokemon].ability.join(", ")}`);
}

function getPokemonStats(pokemon) {
	$('#pokemonStats').prepend(createStatsTable(data.pokemon[pokemon].stats));
}

function getPokemonMoves(pokemon) {
	$('#pokemonMoves').prepend(`Moves: <br/>${data.pokemon[pokemon].moves.join(", ")}`);
}

function clearPokemonData() {
	$('#pokemonTypes').empty();
	$('#pokemonImageNormal').empty();
	$('#pokemonImageShiny').empty();
	$('#pokemonAbility').empty();
	$('#pokemonStats').empty();
	$('#pokemonMoves').empty();
}

$(function() {
	$('#pokemonList').on('change', function() {
		clearPokemonData();
		
		if ($(this).val() != '') {
			getPokemonTypes($(this).val());	
			getPokemonImage($(this).val());
			getPokemonAbility($(this).val());
			getPokemonStats($(this).val());
			getPokemonMoves($(this).val());
		}
	});
});

populatePokemonList();