import data from '../data/raids.json' assert {type: 'json'};

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
		
		$.fn.cacheImages.fetchURL(`../img/${data.pokemon[mon].dex}.png`, function(url, image){ });
		$.fn.cacheImages.fetchURL(`../img/shiny/${data.pokemon[mon].dex}.png`, function(url, image){ });
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
	
	if($('#teraList').val() != '') {		
		if($('#pokemonMoves').is(':contains("Tera Blast")')) {
			displayTeraTypeAdvantages($('#teraList').val().toLowerCase());
		}
	}
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
	$('#pokemonTypeAdvantages').empty();
	$('#pokemonTeraWeaknesses').empty();
	$('#pokemonTeraAdvantages').empty();
}

function displayTypeAdvantages(type) {
	var advantages = calculateTypeAdvantage(type);
	var display = createMatchupsDisplay(advantages);
	
	if(display.length > 0) {
		$('#pokemonTypeAdvantages').prepend('<div>Type Advantages:</div>');
		$('#pokemonTypeAdvantages').append(display.join(''));
	}
}

function displayTypeWeaknesses(type) {
	$('#pokemonTeraWeaknesses').empty();
	
	var weaknesses = calculateTypeWeakness(type);
	var display = createMatchupsDisplay(weaknesses);
	
	if(display.length > 0) {
		$('#pokemonTeraWeaknesses').prepend('<div>Tera Weaknesses:</div>');
		$('#pokemonTeraWeaknesses').append(display.join(''));
	}
}

function displayTeraTypeAdvantages(type) {
	$('#pokemonTeraAdvantages').empty();
	
	var advantages = calculateTeraTypeAdvantage(type);
	var display = createMatchupsDisplay(advantages);
	
	if(display.length > 0) {
		$('#pokemonTeraAdvantages').prepend('<div>Tera Advantages:</div>');
		$('#pokemonTeraAdvantages').append(display.join(''));
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
			displayTypeAdvantages(data.pokemon[$(this).val()].type);
			
			if($('#teraList').val() != '') {
				displayTypeWeaknesses($('#teraList').val().toLowerCase());
				
				if($('#pokemonMoves').is(':contains("Tera Blast")')) {
					displayTeraTypeAdvantages($('#teraList').val().toLowerCase());
				}
			}
		}
	});
	
	$('#teraList').on('change', function() {
		$('#pokemonTeraWeaknesses').empty();
		
		if ($(this).val() != '' && $('#pokemonList').val() != '') {
			displayTypeWeaknesses($(this).val().toLowerCase());
		}
		
		if($('#pokemonMoves').is(':contains("Tera Blast")')) {
			displayTeraTypeAdvantages($(this).val().toLowerCase());
		}
	});
});

cacheImages();
populatePokemonList();
populateTeraTypeList();

/*

Pokemon Type Matchup Calculator
Data: https://pokeapi.co/api/v2/ & https://pokemondb.net/type

*/

let typeData = {
	"normal": {
		"attack": {
			"double" : [],
			"half": ["rock", "steel"],
			"zero": ["ghost"]
		},
		"defense": {
			"double" : ["fighting"],
			"half": [],
			"zero": ["ghost"]
		}
	},
	"flying": {
		"attack": {
			"double" : ["fighting", "bug", "grass"],
			"half": ["rock", "steel", "electric"],
			"zero": []
		},
		"defense": {
			"double" : ["rock", "electric", "ice"],
			"half": ["fighting", "bug", "grass"],
			"zero": ["ground"]
		}
	},
	"poison": {
		"attack": {
			"double" : ["grass", "fairy"],
			"half": ["poison", "ground", "rock", "fairy"],
            "zero": ["steel"]
		},
        "defense": {
            "half": ["fighting", "poison", "bug", "grass", "fairy"],
            "double": ["ground", "psychic"],
            "zero": []
        }
	},
	"ground": {
		"attack": {
			"double" : ["poison", "rock", "steel", "fire", "electric"],
			"half": ["bug", "grass"],
			"zero": ["flying"]
		},
		"defense": {
			"double" : ["water", "grass", "ice"],
			"half": ["poison", "rock"],
			"zero": ["electric"]
		}
	},
	"rock": {
		"attack": {
			"double" : ["flying", "bug", "fire", "ice"],
			"half": ["fighting", "ground", "steel"],
			"zero": []
		},
		"defense": {
			"double" : ["fighting", "ground", "steel", "water", "grass"],
			"half": ["normal", "flying", "poison", "fire"],
			"zero": []
		}
	},
	"bug": {
		"attack": {
			"double" : ["grass", "psychic", "dark"],
			"half": ["fighting", "flying", "poison", "ghost", "steel", "fire", "fairy"],
			"zero": []
		},
		"defense": {
			"double" : ["flying", "rock", "fire"],
			"half": ["fighting", "ground", "grass"],
			"zero": []
		}
	},
	"steel": {
		"attack": {
			"double" : ["rock", "ice", "fairy"],
			"half": ["steel", "fire", "water", "electric"],
			"zero": []
		},
		"defense": {
			"double" : ["fighting", "ground", "fire"],
			"half": ["normal", "flying", "rock", "bug", "steel", "grass", "psychic", "ice", "dragon", "fairy"],
			"zero": ["poison"]
		}
	},
	"fire": {
		"attack": {
			"double" : ["bug", "steel", "grass", "ice"],
			"half": ["rock", "fire", "water", "dragon"],
			"zero": []
		},
		"defense": {
			"double" : ["ground", "rock", "water"],
			"half": ["bug", "steel", "fire", "grass", "ice", "fairy"],
			"zero": []
		}
	},
	"water": {
		"attack": {
			"double" : ["ground", "rock", "fire"],
			"half": ["water", "grass", "dragon"],
			"zero": []
		},
		"defense": {
			"double" : ["grass", "electric"],
			"half": ["steel", "fire", "water", "ice"],
			"zero": []
		}
	},
	"grass": {
		"attack": {
			"double" : ["ground", "rock", "water"],
			"half": ["flying", "poison", "bug", "steel", "fire", "grass", "dragon" ],
            "zero": []
		},
        "defense": {
            "half": ["ground", "water", "grass", "electric"],
            "double": ["flying", "poison", "bug", "fire", "ice"],
            "zero": []
        }
	},
	"electric": {
		"attack": {
			"double" : ["flying", "water"],
			"half": ["grass", "electric", "dragon"],
			"zero": ["ground"]
		},
		"defense": {
			"double" : ["ground"],
			"half": ["flying", "steel", "electric"],
			"zero": []
		}
	},
	"psychic": {
		"attack": {
			"double" : ["fighting", "poison"],
			"half": ["steel", "psychic"],
			"zero": ["dark"]
		},
		"defense": {
			"double" : ["bug", "ghost", "dark"],
			"half": ["fighting", "psychic"],
			"zero": []
		}
	},
	"ice": {
		"attack": {
			"double" : ["flying", "ground", "grass", "dragon"],
			"half": ["steel", "fire", "water", "ice"],
			"zero": []
		},
		"defense": {
			"double" : ["fighting", "rock", "steel", "fire"],
			"half": ["ice"],
			"zero": []
		}
	},
	"dragon": {
		"attack": {
			"double" : ["dragon"],
			"half": ["steel"],
			"zero": ["fairy"]
		},
		"defense": {
			"double" : ["ice", "dragon", "fairy"],
			"half": ["fire", "water", "grass", "electric"],
			"zero": []
		}
	},
	"dark": {
		"attack": {
			"double" : ["ghost", "psychic"],
			"half": ["fighting", "dark", "fairy"],
			"zero": []
		},
		"defense": {
			"double" : ["fighting", "bug", "fairy"],
			"half": ["ghost", "dark"],
			"zero": ["psychic"]
		}
	},
	"fairy": {
		"attack": {
			"double" : ["fighting", "dragon", "dark"],
			"half": ["poison", "steel", "fire"],
			"zero": []
		},
		"defense": {
			"double" : ["poison", "steel"],
			"half": ["fighting", "bug", "dark"],
			"zero": ["dragon"]
		}
	},
	"fighting": {
		"attack": {
			"double" : ["normal", "rock", "steel", "ice", "dark"],
			"half": ["flying", "poison", "bug", "psychic", "fairy"],
			"zero": ["ghost"]
		},
		"defense": {
			"double" : ["flying", "psychic", "fairy"],
			"half": ["rock", "bug", "dark"],
			"zero": []
		}
	},
	"ghost": {
		"attack": {
			"double" : ["ghost", "psychic"],
			"half": ["dark"],
			"zero": ["normal"]
		},
		"defense": {
			"double" : ["ghost", "dark"],
			"half": ["poison", "bug"],
			"zero": ["normal", "fighting"]
		}
	}
};

function calculateTypeWeakness(type) {
	let weaknesses = {};
	let defense = typeData[type].defense;
	
	Object.entries(defense).forEach(([key, value]) => {
		switch(key) {
			case('double'):
				value.forEach(i => { weaknesses[i] ? weaknesses[i] *= 2 : weaknesses[i] = 2 });
				break;
			case('half'):
				value.forEach(i => { weaknesses[i] ? weaknesses[i] *= 0.5 : weaknesses[i] = 0.5 });
				break;
			case('zero'):
				value.forEach(i => { weaknesses[i] = 0 });
				break;
		}
	});
	
	return weaknesses;
}

function calculateTypeAdvantage(type) {
	let advantages = {};
	
	type.forEach(item => {
		let attack = typeData[item.toLowerCase()].attack;
		
		Object.entries(attack).forEach(([key, value]) => {
			switch(key) {
				case('double'):
					value.forEach(i => { advantages[i] ? advantages[i] *= 2 : advantages[i] = 2 });
					break;
			}
		});
	});
	
	return advantages;
}

function calculateTeraTypeAdvantage(type) {
	let advantages = {};
	let attack = typeData[type].attack;
	
	Object.entries(attack).forEach(([key, value]) => {
		switch(key) {
			case('double'):
				value.forEach(i => { advantages[i] ? advantages[i] *= 2 : advantages[i] = 2 });
				break;
		}
	});
	
	return advantages;
}

function createMatchupsDisplay(matchups) {
	const display = [];
	
	Object.entries(matchups).sort((a,b) => b[1]-a[1]).forEach(([key, value]) => {
		display.push(createTypeMatchupDiv(key, value));
	});
	
	return display;
}

function createTypeMatchupDiv(type, matchup) {
	return `<div class="typeMatchupText ${type}">${capitalize(type)} - ${matchup}x</div>`;
}

function capitalize(word) {
  return word
    .toLowerCase()
    .replace(/\w/, firstLetter => firstLetter.toUpperCase());
}