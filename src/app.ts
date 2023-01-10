import './public/assets/style.css';
import { Html, teraTypes } from './html';
import * as common from './common';

const raidTier = document.getElementById('raidTier') as HTMLSelectElement;
const pokemonList = document.getElementById('pokemonList') as HTMLSelectElement;
const teraList = document.getElementById('teraList') as HTMLSelectElement;
const shareRaid = document.getElementById('shareRaid') as HTMLDivElement;

const html = new Html();

class App {
    autoPopulateSelections(): void {
        if(location.href.replace(location.origin + '/tera-raid-info/', '')) {
            const build = location.href.replace(location.origin + '/tera-raid-info/', '').split('/');
            const event = new Event('change');
            
            if(Number(build[0])) {
                raidTier.value = build[0];
                raidTier.dispatchEvent(event);
            }
            
            if(build[1]) {
                let name: string = common.capitalize(build[1].replaceAll('%20', ' ').toLowerCase());
                const replacement = name.match(/(\(.*\))/);
                
                if(replacement) {
                    const words = replacement[0].split(' ');
                    
                    for(let i = 0; i < words.length; i++) {
                        name = name.replaceAll(words[i], common.capitalize(words[i]));
                    }
                }
                
                pokemonList.value = name;
                pokemonList.dispatchEvent(event);
            }
            
            if(build[2]) {
                Object.entries(teraTypes).sort().forEach(([key, value]) => {
                    if(key.toLowerCase() == build[2].toLowerCase()) {
                        teraList.value = value;
                    }
                });
                
                teraList.dispatchEvent(event);
            }
        }
    }

    configureOnEvents(): void {
        pokemonList.onchange = function() {
            html.handlePokemonListChange();
        };

        raidTier.onchange = function() {
            html.handleRaidTierChange();
        };

        shareRaid.onclick = function() {
            let url: string = location.origin + '/tera-raid-info/';

            if(raidTier.value) {
                url += raidTier.value;
            }
            
            if(pokemonList.value) {
                url += '/' + pokemonList.value;
            }
            
            if(pokemonList.value && teraList.value) {
                url += '/' + teraList.options[teraList.selectedIndex].text;
            }
            
            navigator.clipboard.writeText(url);
            
            const div = document.getElementById('shareText') as HTMLDivElement;
            div.innerText = 'Copied to Clipboard';
        };

        shareRaid.onmouseout = function() {
            const div = document.getElementById('shareText') as HTMLDivElement;
            div.innerText = 'Share Raid';
        };

        teraList.onchange = function() {
            html.handleTeraListChange();
        };
    }
}

const app = new App();

window.addEventListener('DOMContentLoaded', () => {
    app.configureOnEvents();
    html.populateTeraList();
    app.autoPopulateSelections();
});