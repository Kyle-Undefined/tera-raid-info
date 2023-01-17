import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/shared/services/state/state.service';
import {
	FiveStarRaids,
	SixStarRaids,
	HerbaMystica,
} from 'src/shared/models/raids';
import * as common from 'src/shared/utils/common';

@Component({
	selector: 'app-pokemon-herbs',
	templateUrl: './herbs.component.html',
})
export class HerbsComponent implements OnInit {
	private raidTier = '';
	private pokemonList = '';
	private loaded = false;

	constructor(private stateService: StateService) {}

	public ngOnInit(): void {
		this.stateService.raidTier.subscribe((result) => {
			this.raidTier = result;
		});
		this.stateService.pokemonList.subscribe((result) => {
			this.pokemonList = result;
		});
		this.stateService.loaded.subscribe((result) => {
			this.loaded = result;
			this.setHerbs();
		});
	}

	private setHerbs(): void {
		if (this.loaded) {
			common.updateDiv(
				document.getElementById('pokemonHerbs') as HTMLDivElement,
				'<h3>Herbs Dropped:</h3>'
			);

			const raidData = this.raidTier == '5' ? FiveStarRaids : SixStarRaids;

			raidData
				.filter((pokemon) => {
					return pokemon.name == this.pokemonList;
				})
				.forEach((pokemon) => {
					pokemon.info.herbs
						.sort((a, b) => a.name.localeCompare(b.name))
						.forEach((herb) => {
							common.updateDiv(
								document.getElementById('pokemonHerbs') as HTMLDivElement,
								this.createHerbDiv(herb)
							);
						});
				});
		}
	}

	private createHerbDiv(herb: HerbaMystica): string {
		return `<div class="herbPill ${herb.name.toLowerCase()}">${herb.name} - ${
			herb.chance
		}%</div>`;
	}
}
