import { Component, OnInit } from '@angular/core';
import { HerbDex } from 'src/shared/models/herbs';
import { DataService } from 'src/shared/services/data/data.service';
import { StateService } from 'src/shared/services/state/state.service';
import * as common from 'src/shared/utils/common';

@Component({
	selector: 'app-pokemon-herbs',
	templateUrl: './herbs.component.html',
})
export class HerbsComponent implements OnInit {
	constructor(
		private dataService: DataService,
		private stateService: StateService
	) {}

	public ngOnInit(): void {
		this.stateService.pokemonList.subscribe((result) => {
			if (result) {
				this.setHerbs();
			}
		});
	}

	private setHerbs(): void {
		common.updateDiv(
			document.getElementById('pokemonHerbs') as HTMLDivElement,
			'<h3>Herbs Dropped:</h3>'
		);

		this.dataService.getPokemonHerbs().forEach((herb) => {
			common.updateDiv(
				document.getElementById('pokemonHerbs') as HTMLDivElement,
				this.createHerbDiv(this.dataService.getHerbDexData(herb))
			);
		});
	}

	private createHerbDiv(herb: HerbDex): string {
		return `<div class="herbPill ${herb.name.toLowerCase()}">${herb.name} - ${
			herb.chance
		}%</div>`;
	}
}
