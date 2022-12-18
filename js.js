import data from './data.json' assert {type: 'json'};

$.fn.cacheImages.defaults.storageDB = 'indexedDB';

var cacheKeys = [];

var getCachedImages = function(key, storagePrefix) {
	if(typeof storagePrefix === 'undefined'){ storagePrefix = 'cached'; }
	
	var cacheKeys = [];
	
	if($.fn.cacheImages.defaults.storageDB == 'localStorage') {
		for (var i = 0; i < localStorage.length; i++) {
			if(localStorage.key(i).substr(0, storagePrefix.length + 1) !== storagePrefix + ':' ){ continue; }

			if(localStorage.key(i).lastIndexOf(key) > 0) {
				cacheKeys.push(localStorage.key(i));
			}
		}
	} else {
		var request = window.cacheImagesDb.transaction("offlineImages", "readonly").objectStore("offlineImages").openCursor();
		request.onsuccess = function(e) {
			var cursor = e.target.result;
			
			if(cursor) {
				if(cursor.value.key.substr(0, storagePrefix.length + 1) === storagePrefix + ':' ) {
					if(cursor.value.key.lastIndexOf(key) > 0) {
						cacheKeys.push(cursor.value.key.substr(storagePrefix.length + 1));
					}
				}
				
				cursor.continue();
			}else{
				showCachedImages(cacheKeys);
			}
		};
	}
	
	return true;
},
showCachedImages = function(cacheKeys) {
	if(cacheKeys.length === 0){ return true; }
	
	$('#pokemonImageNormal').append($('<img alt="Normal" title="Normal" />').cacheImages({ url: cacheKeys[0] }));
	$('#pokemonImageShiny').append($('<img alt="Shiny" title="Shiny" />').cacheImages({ url: cacheKeys[1] }));	
	
	return true;
}

function cacheImages() {
	Object.entries(data.pokemon).forEach((pokemon) => {
		const [mon] = pokemon;
		
		$.fn.cacheImages.fetchURL(`./img/${data.pokemon[mon].dex}.png`, function(url, image){ });
		$.fn.cacheImages.fetchURL(`./img/shiny/${data.pokemon[mon].dex}.png`, function(url, image){ });
	});
}


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
	getCachedImages(data.pokemon[pokemon].dex);
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

cacheImages();
populatePokemonList();