import data from './data.json' assert {type: 'json'};

$.fn.cacheImages.defaults.storageDB = 'indexedDB';

var cacheKeys = [];

const teraTypes = [
	"Normal",
	"Flying",
	"Poison",
	"Ground",
	"Rock",
	"Bug",
	"Steel",
	"Fire",
	"Water",
	"Grass",
	"Electric",
	"Psychic",
	"Ice",
	"Dragon",
	"Dark",
	"Fairy",
	"Fighting",
	"Ghost"
];

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

function populateTeraTypeList() {
	for(var i = 0; i < teraTypes.length; i++) {
		$('#teraList').append($('<option>', {
			value: teraTypes[i],
			text: teraTypes[i]
		}));
	}
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

function getPokemonHerbs(pokemon) {
	$('#pokemonHerbs').prepend(`Herbs Dropped: <br/>${data.pokemon[pokemon].herbs.join(", ")}`);
}

function clearPokemonData() {
	$('#pokemonTypes').empty();
	$('#pokemonImageNormal').empty();
	$('#pokemonImageShiny').empty();
	$('#pokemonAbility').empty();
	$('#pokemonStats').empty();
	$('#pokemonMoves').empty();
	$('#pokemonHerbs').empty();
	$('#pokemonWeaknesses').empty();
	$('#pokemonTeraWeaknesses').empty();
}

function calculateTypeAdvantage(type) {
	var typeString = type.join('/');
	
	$('#pokemonWeaknesses').prepend('<div>Weaknesses:</div>');
	
	for(var i = 0; i < teraTypes.length; i++) {
		$('#pokemonWeaknesses').append(`<div class="typeAdvantageText ${teraTypes[i].toLowerCase()}">${teraTypes[i]} - ${typeMultiplier(teraTypes[i], typeString)}</div>`);
	}
	
}

function calculateTeraTypeAdvantage(type) {
	$('#pokemonTeraWeaknesses').prepend('<div>Tera Weaknesses:</div>');
	
	for(var i = 0; i < teraTypes.length; i++) {
		$('#pokemonTeraWeaknesses').append(`<div class="typeAdvantageText ${teraTypes[i].toLowerCase()}">${teraTypes[i]} - ${typeMultiplier(teraTypes[i], type)}</div>`);
	}
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
			getPokemonHerbs($(this).val());
			calculateTypeAdvantage(data.pokemon[$(this).val()].type);
			
			if($('#teraList').val() != '') {
				calculateTeraTypeAdvantage($('#teraList').val());
			}
		}
	});
	
	$('#teraList').on('change', function() {
		$('#pokemonTeraWeaknesses').empty();
		
		if ($(this).val() != '' && $('#pokemonList').val() != '') {
			calculateTeraTypeAdvantage($(this).val());
		}
	});
});

cacheImages();
populatePokemonList();
populateTeraTypeList();

/*
Pokemon Type Multiplier
Source: https://codegolf.stackexchange.com/a/55843
*/
function typeMultiplier(a, b) {
  // keys is a list of letters found in the types of attacks/defenses
  var keys = [..."BWSEIRNulkcDPotyeG"];

  // getIndex is a single case statement.
  // it checks each of keys, one-by-one, falling through until we've found the proper index
  var getIndex = x => keys.findIndex(c => x.match(c));

  // encodedValues is a list, indexed by `keys`, where each value is 7-characters.
  var encodedValues = "kjwhcgnj2xd6elihtlneemw82duxijsazl3sh4iz5akjmlmsqds06xf1sbb8d0rl1nu7a2kjwi3mykjwlbpmk1up4mzl1iuenedor0bdmkjwmpk6rhcg4h3en3pew5";

  // the 7-character value (e.g., B=0="kjwhcgn", W=1="j2xd6el") were created by 
  // turning base4 values into base36, so let's turn this back into a string the same way
  var valuesForAttack = parseInt(encodedValues.substr(getIndex(a) * 7, 7), 36).toString(4);

  // valuesForAttack is indexed by defenseType.  The value will be 0..3, depending on the multiplier

  // let's get an array of the multipliers and reduce...
  var multiplier = b.split('/').reduce((oldMultiplier, defenseType) => oldMultiplier * [0, 0.5, 1, 2][valuesForAttack[getIndex(defenseType)]], 1);

  return multiplier + 'x';
}