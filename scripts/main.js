/*
	Imported Data
*/




/*
	Globals
*/

const cacheVersion = 1;
const cacheName = `tera-raid-info-${cacheVersion}`;


/*
	Type Dropdown
*/




/*
	Display Creation
*/



















/*
	Data Retrieval
*/









/*
	Show Displays
*/








/*
	Misc
*/






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













$(function() {
	cacheIcons();

	
	
	

	

});