import { Component, inject, OnInit } from '@angular/core';
import { StateService } from 'src/shared/services/state/state.service';
import {
	RaidDataService,
	raidsFor,
} from 'src/shared/services/raid-data/raid-data.service';
import { RaidRegion } from 'src/shared/models/raids';
import { Types } from 'src/shared/models/types';
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

@Component({
	selector: 'app-root',
	standalone: true,
	templateUrl: './app.component.html',
	imports: [
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
	],
})
export class AppComponent implements OnInit {
	readonly title = 'Tera Raid Info';
	readonly state = inject(StateService);
	readonly data = inject(RaidDataService);
	ngOnInit(): void {
		this.autoPopulateSelections();
	}
	home(): void {
		this.state.changePokemon('');
		this.state.changeTeraType('');
		history.replaceState(null, '', new URL(document.baseURI).pathname);
	}
	autoPopulateSelections(
		url = window.location.href,
		origin = window.location.origin
	): void {
		let parts: string[];
		try {
			const target = new URL(url, origin);
			const base = new URL(document.baseURI).pathname;
			let path = target.pathname;
			// Accept existing GitHub Pages links as well as local development links.
			if (path.startsWith('/tera-raid-info/'))
				path = path.slice('/tera-raid-info/'.length);
			else if (path.startsWith(base)) path = path.slice(base.length);
			parts = path.split('/').map(decodeURIComponent);
		} catch {
			return;
		}
		const [tier, rawRegion, rawPokemon, rawTera] = parts;
		if (tier !== '5' && tier !== '6') return;
		const region = Object.values(RaidRegion).find(
			(value) => value.toLowerCase() === rawRegion?.toLowerCase()
		);
		if (!region) return;
		this.state.changeRaidTier(tier);
		this.state.changeRegionList(region);
		const raid = raidsFor(tier, region).find(
			(value) => value.name.toLowerCase() === rawPokemon?.toLowerCase()
		);
		if (raid) this.state.changePokemon(raid.name);
		const tera = Types.find(
			(value) => value.name.toLowerCase() === rawTera?.toLowerCase()
		);
		if (tera) this.state.changeTeraType(tera.name);
	}
}
