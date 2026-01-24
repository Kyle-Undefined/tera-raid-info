import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateService } from 'src/shared/services/state/state.service';
import { RaidTierComponent } from './header/dropdowns/raid-tier/raid-tier.component';
import { RegionComponent } from './header/dropdowns/region/region.component';
import { PokemonListComponent } from './header/dropdowns/pokemon-list/pokemon-list.component';
import { TeraTypeComponent } from './header/dropdowns/tera-type/tera-type.component';
import { ShareRaidComponent } from './header/icons/share-raid/share-raid.component';
import { ImagesComponent } from './pokemon/images/images.component';
import { TypesComponent } from './pokemon/types/types.component';
import { AbilityComponent } from './pokemon/ability/ability.component';
import { StatsComponent } from './pokemon/stats/stats.component';
import { MovesComponent } from './pokemon/moves/moves.component';
import { ActionsComponent } from './pokemon/actions/actions.component';
import { HerbsComponent } from './pokemon/herbs/herbs.component';
import { TypeMatchupsComponent } from './pokemon/type-matchups/type-matchups.component';

import * as common from 'src/shared/utils/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
  	standalone: true,
	imports: [
		CommonModule,
		RaidTierComponent,
		RegionComponent,
		PokemonListComponent,
		TeraTypeComponent,
		ShareRaidComponent,
		ImagesComponent,
		TypesComponent,
		AbilityComponent,
		StatsComponent,
		MovesComponent,
		ActionsComponent,
		HerbsComponent,
		TypeMatchupsComponent,
	]
})
export class AppComponent implements AfterViewInit, OnInit {
	constructor(private stateService: StateService) {}

	public title = 'Tera Raid Info';

	public ngOnInit(): void {
		this.stateService.changeRegionList('Paldea');
		this.stateService.loading.subscribe((result) => {
			(document.getElementById('dataLoading') as HTMLDivElement).hidden =
				!result;

			if (result == false) {
				(
					document.getElementById('pokemonContent') as HTMLDivElement
				).style.display = '';
			}
		});
	}

	public ngAfterViewInit(): void {
		(document.getElementById('dataLoading') as HTMLDivElement).hidden = true;
		this.deleteCache();
		this.autoPopulateSelections();
	}

	public autoPopulateSelections(url?: string, origin?: string): void {
		const href = url ? url : window.location.href;
		const originString = origin ? origin : window.location.origin;
		const baseUri = href.replace(originString, '');

		if (baseUri.length > 1) {
			if (href.replace(originString + '/tera-raid-info/', '')) {
				const build = href
					.replace(originString + '/tera-raid-info/', '')
					.split('/');
				const event = new Event('change');

				if (Number(build[0])) {
					const raidTier = document.getElementById(
						'raidTier'
					) as HTMLSelectElement;

					raidTier.value = build[0];
					raidTier.dispatchEvent(event);
				}

				if (build[1]) {
					const regionList = document.getElementById(
						'regionList'
					) as HTMLSelectElement;

					for (let i = 0; i < regionList.length; i++) {
						const tera = regionList[i] as HTMLOptionElement;

						if (tera.text == build[1]) {
							regionList.selectedIndex = tera.index;
						}
					}

					regionList.dispatchEvent(event);
				}

				if (build[2]) {
					let name: string = common.capitalize(
						build[2].replaceAll('%20', ' ').toLowerCase()
					);
					const replacement = name.match(/(\(.*\))/);

					if (replacement) {
						const words = replacement[0].split(' ');

						for (let i = 0; i < words.length; i++) {
							name = name.replaceAll(words[i], common.capitalize(words[i]));
						}
					}

					const pokemonList = document.getElementById(
						'pokemonList'
					) as HTMLSelectElement;

					pokemonList.value = name;
					pokemonList.dispatchEvent(event);
				}

				if (build[3]) {
					const teraList = document.getElementById(
						'teraList'
					) as HTMLSelectElement;

					for (let i = 0; i < teraList.length; i++) {
						const tera = teraList[i] as HTMLOptionElement;

						if (tera.text == build[3]) {
							teraList.selectedIndex = tera.index;
						}
					}

					teraList.dispatchEvent(event);
				}
			}
		}
	}

	private deleteCache() {
		// in old version of code base, i was caching images
		// no longer going with that approach so deleting cache
		if (typeof caches !== 'undefined') {
			caches.delete('tera-raid-info-1');
		}
	}
}
