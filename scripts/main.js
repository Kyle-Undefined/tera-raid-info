/*
	Imported Data
*/

const fivestar = await fetchJSON('/tera-raid-info/data/raids/fivestar.json');
const sixstar = await fetchJSON('/tera-raid-info/data/raids/sixstar.json');
const types = await fetchJSON('/tera-raid-info/data/types.json');
const abilities = await fetchJSON('/tera-raid-info/data/abilities.json');
const moves = await fetchJSON('/tera-raid-info/data/moves.json');
const herbs = await fetchJSON('/tera-raid-info/data/herbs.json');


/*
	Globals
*/

const cacheVersion = 1;
const cacheName = `tera-raid-info-${cacheVersion}`;


/*
	Type Dropdown
*/

const teraTypes = {
	"Normal":1,
	"Fighting":2,
	"Flying":3,
	"Poison":4,
	"Ground":5,
	"Rock":6,
	"Bug":7,
	"Ghost":8,
	"Steel":9,
	"Fire":10,
	"Water":11,
	"Grass":12,
	"Electric":13,
	"Psychic":14,
	"Ice":15,
	"Dragon":16,
	"Dark":17,
	"Fairy":18
}


/*
	Display Creation
*/

function createTypeDiv(type) {
	return `<div class="typeText ${type.toLowerCase()}">${type}</div>`;
}

function createStatsDisplay(stats) {
	var tableString = '<div id="pokemonStats"><h3>Base Stats</h3>';
	tableString += `<div class="stat hp"><p>HP</p><p data-label="HP">${stats.hp}</p></div>`;
	tableString += `<div class="stat at"><p>Atk</p><p data-label="Atk">${stats.attack}</p></div>`;
	tableString += `<div class="stat df"><p>Def</p><p data-label="Def">${stats.defense}</p></div>`;
	tableString += `<div class="stat sa"><p>Sp.Atk</p><p data-label="Sp. Atk">${stats.spatk}</p></div>`;
	tableString += `<div class="stat sd"><p>Sp.Def</p><p data-label="Sp. Def">${stats.spdef}</p></div>`;
	tableString += `<div class="stat sp"><p>Spd</p><p data-label="Spd">${stats.speed}</p></div></div>`;
	
	return tableString;
}

function createTypeMatchupDiv(type, matchup) {
	return `<div class="typeMatchupText ${type}">${capitalize(type)} - ${matchup}x</div>`;
}

function createAbilityDiv(ability) {
	return `<div class="typeMatchupText" data-info="${abilities.dex[ability - 1].desc}">${abilities.dex[ability - 1].name}</div>`;
}

function createHiddenAbilityDiv(ability) {
	return `<div class="typeMatchupText" data-info="${abilities.dex[ability - 1].desc}">${abilities.dex[ability - 1].name} (H)</div>`;
}

function createMoveTypeAdvantagesDisplay(matchups) {
	const display = [];
	
	Object.entries(matchups).sort((a,b) => b[1]-a[1]).forEach(([key, value]) => {
		display.push(`${capitalize(key)}`);
	});
	
	return display;
}

function createMoveDiv(move) {
	var moveStr = `<div class="typeMatchupText ${types.dex[moves.dex[move].type].name.toLowerCase()}">${moves.dex[move].name}`;
	moveStr += `<div class="moveStats">`;
	moveStr += `<div class="type">${moves.dex[move].category}</div>`;
	moveStr += `<div class="bp">Pwr: ${moves.dex[move].bp}</div>`;
	moveStr += `<div class="pp">PP: ${moves.dex[move].pp}</div>`;
	moveStr += `<div class="acc">Acc: ${moves.dex[move].acc}</div>`;
	moveStr += `<div class="desc">${moves.dex[move].desc}</div>`;
	
	if(moves.dex[move].category != 'Status') {
		var advantages = getMoveTypeAdvantages(moves.dex[move].type);
		
		if(advantages) {
			moveStr += `<div class="adv">Advantages: ${advantages}</div>`;
		}
	}
	
	moveStr += '</div></div>';
	
	return moveStr;
}

function createHerbDiv(herb) {
	return `<div class="herbPill ${herbs.dex[herb].name.toLowerCase()}">${herbs.dex[herb].name} - ${herbs.dex[herb].chance}%</div>`;
}

function createMatchupsDisplay(matchups) {
	const display = [];
	
	Object.entries(matchups).sort((a,b) => b[1]-a[1]).forEach(([key, value]) => {
		display.push(createTypeMatchupDiv(key, value));
	});
	
	return display;
}


/*
	Data Retrieval
*/

function getPokemonTypes(pokemon) {
	for(var i = 0; i < getPokemonDataSource().pokemon[pokemon].type.length; i++) {
		$('#pokemonTypes').append(
			createTypeDiv(types.dex[getPokemonDataSource().pokemon[pokemon].type[i]].name)
		);
	}
}

async function getPokemonImage(pokemon) {
	var normalPath = `/tera-raid-info/images/${getPokemonDataSource().pokemon[pokemon].dex}.png`;
	var shinyPath = `/tera-raid-info/images/shiny/${getPokemonDataSource().pokemon[pokemon].dex}.png`;
	
	$('#pokemonImageNormal').append($(`<img alt="Normal" title="Normal" src="${await getImage(normalPath)}" />`));
	$('#pokemonImageShiny').append($(`<img alt="Shiny" title="Shiny" src="${await getImage(shinyPath)}" />`));
}

function getPokemonAbility(pokemon) {
	$('#pokemonAbility').prepend('<h3>Ability:</h3>');
	
	for(var i = 0; i < getPokemonDataSource().pokemon[pokemon].ability.sort().length; i++) {
		$('#pokemonAbility').append(createAbilityDiv(getPokemonDataSource().pokemon[pokemon].ability[i]));
	}
	
	if(getPokemonDataSource().pokemon[pokemon].hiddenability) {
		$('#pokemonAbility').append(createHiddenAbilityDiv(getPokemonDataSource().pokemon[pokemon].hiddenability));
	}
}

function getPokemonStats(pokemon) {
	$('#pokemonStatsWrapper').prepend(createStatsDisplay(getPokemonDataSource().pokemon[pokemon].stats));
}

function getMoveTypeAdvantages(type) {
	var advantages = calculateTypesAdvantage([type]);
	return createMoveTypeAdvantagesDisplay(advantages).join(', ');
}

function getPokemonMoves(pokemon) {
	var moveTypes = [];
	
	$('#pokemonMoves').prepend('<h3>Moves:</h3>');
	
	for(var i = 0; i < getPokemonDataSource().pokemon[pokemon].moves.sort().length; i++) {
		$('#pokemonMoves').append(createMoveDiv(getPokemonDataSource().pokemon[pokemon].moves[i]));
		
		if(moves.dex[getPokemonDataSource().pokemon[pokemon].moves[i]].category != 'Status') {
			moveTypes.push(moves.dex[getPokemonDataSource().pokemon[pokemon].moves[i]].type);
		}
	}
	
	var deduped = [...new Set(moveTypes)];
	var advantages = calculateTypesAdvantage(deduped.sort());
	var display = createMatchupsDisplay(advantages);
	
	if(display.length > 0) {
		$('#pokemonTypeAdvantages').prepend('<h3>Type Advantages:</h3>');
		$('#pokemonTypeAdvantages').append(display.join(''));
	}
	
	if($('#teraList').val() != '') {		
		if($('#pokemonMoves').is(':contains("Tera Blast")')) {
			displayTeraTypeAdvantages($('#teraList').val());
		}
	}
}

function getPokemonHerbs(pokemon) {
	$('#pokemonHerbs').prepend('<h3>Herbs Dropped:</h3>');
	
	for(var i = 0; i < getPokemonDataSource().pokemon[pokemon].herbs.length; i++) {
		$('#pokemonHerbs').append(createHerbDiv(getPokemonDataSource().pokemon[pokemon].herbs[i]));
	}
}


/*
	Show Displays
*/

function displayTypeWeaknesses(type) {
	$('#pokemonTeraWeaknesses').empty();
	
	var weaknesses = calculateTypeWeakness(type);
	var display = createMatchupsDisplay(weaknesses);
	
	if(display.length > 0) {
		$('#pokemonTeraWeaknesses').prepend('<h3>Tera Weaknesses:</h3>');
		$('#pokemonTeraWeaknesses').append(display.join(''));
	}
}

function displayTeraTypeAdvantages(type) {
	$('#pokemonTeraAdvantages').empty();
	
	var advantages = calculateTypesAdvantage([type]);
	var display = createMatchupsDisplay(advantages);
	
	if(display.length > 0) {
		$('#pokemonTeraAdvantages').prepend('<h3>Tera Advantages:</h3>');
		$('#pokemonTeraAdvantages').append(display.join(''));
	}
}

/*
	Calculations
*/

function calculateTypeWeakness(type) {
	let weaknesses = {};
	let defense = types.dex[type].defense;
	
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

function calculateTypesAdvantage(type) {
	let advantages = {};
	
	type.forEach(item => {
		let attack = types.dex[item].attack;
		
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


/*
	Misc
*/

function capitalize(word) {
  return word
    .toLowerCase()
    .replace(/\w/, firstLetter => firstLetter.toUpperCase());
}

function isFetchSupported() {
	return 'fetch' in window;
}


/*
	Cache Storage for Images
*/

async function getImage(url) {
	let cachedImage = await getCachedImage(cacheName, url);
	
	if (cachedImage) {
		return cachedImage;
	}
	
	const cacheStorage = await caches.open(cacheName);
	await cacheStorage.add(url);
	
	cachedImage = await getCachedImage(cacheName, url);
	return cachedImage;
}

async function getCachedImage(cacheName, url) {
	const cacheStorage = await caches.open(cacheName);
	const cachedResponse = await cacheStorage.match(url);
	
	if(!cachedResponse || !cachedResponse.ok) {
		return false;
	}
	
	return await cachedResponse.url;
}

async function deleteCache() {
	const keys = await caches.keys();
	
	for(const key of keys) {
		const ourCache = key.startsWith('tera-raid-info-');
		
		if(cacheName === key || !ourCache) {
			continue;
		}
		
		caches.delete(key);
	}
}

function cacheIcons() {
	getImage('/tera-raid-info/icons/share.png');
	getImage('/tera-raid-info/icons/spicy.png');
	getImage('/tera-raid-info/icons/sweet.png');
	getImage('/tera-raid-info/icons/salty.png');
	getImage('/tera-raid-info/icons/bitter.png');
	getImage('/tera-raid-info/icons/sour.png');
	getImage('/tera-raid-info/icons/favicon.ico');
}


/*
	Main workflow
*/

async function fetchJSON(path) {
	if(isFetchSupported()) {
		let response = await fetch(path);
		let data = await response.json();
		return data;
	}
	else {
		return $.getJSON(path, function(data) {
			return data;
		});
	}
}

function autoPopulateSelections() {
	if(location.href.replace(location.origin + '/tera-raid-info/', '')) {
		var build = location.href.replace(location.origin + '/tera-raid-info/', '').split('/');
		
		if($.isNumeric(build[0])) {
			$('#raidTier').val(build[0]);
			$('#raidTier').trigger('change');
		}
		
		if(build[1]) {
			var name = capitalize(build[1].replaceAll('%20', ' ').toLowerCase());
			var replacement = name.match(/(\(.*\))/);
			
			if(replacement) {
				var words = replacement[0].split(' ');
				
				for(var i = 0; i < words.length; i++) {
					name = name.replaceAll(words[i], capitalize(words[i]));
				}
			}
			
			$('#pokemonList').val(name);
			$('#pokemonList').trigger('change');
		}
		
		if(build[2]) {
			Object.entries(teraTypes).sort().forEach(([key, value]) => {
				if(key.toLowerCase() == build[2].toLowerCase()) {
					$('#teraList').val(value);
				}
			});
			
			$('#teraList').trigger('change');
		}
	}
}

function getPokemonDataSource() {
	switch($('#raidTier').val()) {
		case '5':
			return fivestar;
			break;
		case '6':
			return sixstar;
			break;
		default:
			break;
	}
}

function populatePokemonList() {
	if($('#raidTier').val()) {
		Object.entries(getPokemonDataSource().pokemon).sort().forEach((pokemon) => {
			const [mon] = pokemon;

			$('#pokemonList').append($('<option>', {
				value: mon,
				text: mon
			}));
		});
	}
}

function populateTeraTypeList() {
	Object.entries(teraTypes).sort().forEach(([key, value]) => {
		$('#teraList').append($('<option>', {
			value: value,
			text: key
		}));
	});
}

function clearPokemonData() {
	$('#pokemonTypes').empty();
	$('#pokemonImageNormal').empty();
	$('#pokemonImageShiny').empty();
	$('#pokemonAbility').empty();
	$('#pokemonStatsWrapper').empty();
	$('#pokemonMoves').empty();
	$('#pokemonHerbs').empty();
	$('#pokemonTypeAdvantages').empty();
	$('#pokemonTeraWeaknesses').empty();
	$('#pokemonTeraAdvantages').empty();
}

function resetPokemonList() {
	$('#pokemonList').empty('');
	$('#pokemonList').append('<option value="">-- Pokemon --</option>');
}

$(function() {
	cacheIcons();
	populateTeraTypeList();

	$('#raidTier').on('change', function() {
		clearPokemonData();
		resetPokemonList();
		populatePokemonList();
	});
	
	$('#pokemonList').on('change', function() {
		clearPokemonData();
		
		if ($(this).val() != '') {
			getPokemonTypes($(this).val());	
			getPokemonImage($(this).val());
			getPokemonAbility($(this).val());
			getPokemonStats($(this).val());
			getPokemonMoves($(this).val());
			getPokemonHerbs($(this).val());
			
			if($('#teraList').val() != '') {
				displayTypeWeaknesses($('#teraList').val());
				
				if($('#pokemonMoves').is(':contains("Tera Blast")')) {
					displayTeraTypeAdvantages($('#teraList').val());
				}
			}
		}
	});
	
	$('#teraList').on('change', function() {
		$('#pokemonTeraWeaknesses').empty();
		
		if ($(this).val() != '' && $('#pokemonList').val() != '') {
			displayTypeWeaknesses($(this).val());
		}
		
		if($('#pokemonMoves').is(':contains("Tera Blast")')) {
			displayTeraTypeAdvantages($(this).val());
		}
	});
	
	$('#shareRaid').on('click', function() {
		var url = location.origin + '/tera-raid-info/';
		
		if($('#raidTier').val()) {
			url += $('#raidTier').val();
		}
		
		if($('#pokemonList').val()) {
			url += '/' + $('#pokemonList').val();
		}
		
		if($('#pokemonList').val() && $('#teraList').val()) {
			url += '/' + $( "#teraList option:selected" ).text();
		}
		
		navigator.clipboard.writeText(url);
		
		$('#shareText').text('Copied to Clipboard');
	});
	
	$('#shareRaid').on('mouseout', function() {
		$('#shareText').text('Share Raid');
	});
	
	autoPopulateSelections();
});