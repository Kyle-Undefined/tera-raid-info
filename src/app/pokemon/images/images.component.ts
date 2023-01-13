import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/shared/services/data/data.service';
import { StateService } from 'src/shared/services/state/state.service';
import * as common from 'src/shared/utils/common';

@Component({
	selector: 'app-pokemon-images',
	templateUrl: './images.component.html',
})
export class ImagesComponent implements OnInit {
	constructor(
		private dataService: DataService,
		private stateService: StateService
	) {}

	public ngOnInit(): void {
		this.stateService.pokemonList.subscribe((result) => {
			if (result) {
				this.setImages();
			}
		});
	}

	private setImages(): void {
		const dexNumber: string = this.dataService.getPokemonDexNumber();

		common.updateDiv(
			document.getElementById('pokemonImageNormal') as HTMLDivElement,
			`<img alt="Normal" title="Normal" src="./assets/pokemon/${dexNumber}.png" />`
		);

		common.updateDiv(
			document.getElementById('pokemonImageShiny') as HTMLDivElement,
			`<img alt="Shiny" title="Shiny" src="./assets/pokemon/shiny/${dexNumber}.png" />`
		);
	}
}
