import { Component, OnInit } from '@angular/core';
import {
	FiveStarRaids,
	RaidRegion,
	SixStarRaids,
} from 'src/shared/models/raids';
import { GraphqlService } from 'src/shared/services/graphql/graphql.service';
import { StateService } from 'src/shared/services/state/state.service';
import * as common from 'src/shared/utils/common';

@Component({
    selector: 'app-pokemon-images',
    templateUrl: './images.component.html',
    standalone: false
})
export class ImagesComponent implements OnInit {
	constructor(
		private grapghqlService: GraphqlService,
		private stateService: StateService
	) {}

	private raidTier = '';
	private pokemonList = '';
	private region = '';

	public ngOnInit(): void {
		this.stateService.raidTier.subscribe((result) => {
			this.raidTier = result;
		});
		this.stateService.pokemonList.subscribe((result) => {
			this.pokemonList = result;
			this.setImages();
		});
		this.stateService.regionList.subscribe((result) => {
			this.region = result;
		});
	}

	private setImages(): void {
		if (this.pokemonList) {
			this.grapghqlService.getDexNumber().subscribe((data) => {
				const raidData = this.raidTier == '5' ? FiveStarRaids : SixStarRaids;
				let imageAlt = '';

				raidData
					.filter((pokemon) => {
						return (
							pokemon.name == this.pokemonList &&
							pokemon.region ==
								RaidRegion[this.region as keyof typeof RaidRegion]
						);
					})
					.forEach((pokemon) => {
						if (pokemon.imageAlt) {
							imageAlt = pokemon.imageAlt;
						}
					});

				common.updateDiv(
					document.getElementById('pokemonImageNormal') as HTMLDivElement,
					`<img alt="Normal" title="Normal" src="./assets/pokemon/${common.padLeft(
						data,
						3,
						'0'
					)}${imageAlt}.png" />`
				);

				common.updateDiv(
					document.getElementById('pokemonImageShiny') as HTMLDivElement,
					`<img alt="Shiny" title="Shiny" src="./assets/pokemon/shiny/${common.padLeft(
						data,
						3,
						'0'
					)}${imageAlt}.png" />`
				);
			});
		}
	}
}
