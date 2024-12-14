import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/shared/services/state/state.service';
import {
	FiveStarRaids,
	SixStarRaids,
	HerbaMystica,
	RaidRegion,
} from 'src/shared/models/raids';
import * as common from 'src/shared/utils/common';

@Component({
	selector: 'app-pokemon-herbs',
	templateUrl: './herbs.component.html',
})
export class HerbsComponent implements OnInit {
	private raidTier = '';
	private pokemonList = '';
	private region = '';

	constructor(private stateService: StateService) {}

	public ngOnInit(): void {
		this.stateService.raidTier.subscribe((result) => {
			this.raidTier = result;
		});
		this.stateService.pokemonList.subscribe((result) => {
			this.pokemonList = result;
			this.setHerbs();
		});
		this.stateService.regionList.subscribe((result) => {
			this.region = result;
		});
	}

	private setHerbs(): void {
		if (this.pokemonList) {
			common.updateDiv(
				document.getElementById('pokemonHerbs') as HTMLDivElement,
				'<h3>Herbs Dropped:</h3>'
			);

			const raidData = this.raidTier == '5' ? FiveStarRaids : SixStarRaids;

			raidData
				.filter((pokemon) => {
					return (
						pokemon.name == this.pokemonList &&
						pokemon.region == RaidRegion[this.region as keyof typeof RaidRegion]
					);
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
