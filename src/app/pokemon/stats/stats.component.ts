import { Component, OnInit } from '@angular/core';
import { Stats } from 'src/shared/models/raids';
import { DataService } from 'src/shared/services/data/data.service';
import { StateService } from 'src/shared/services/state/state.service';
import * as common from 'src/shared/utils/common';

@Component({
	selector: 'app-pokemon-stats',
	templateUrl: './stats.component.html',
})
export class StatsComponent implements OnInit {
	constructor(
		private dataService: DataService,
		private stateService: StateService
	) {}

	public ngOnInit(): void {
		this.stateService.pokemonList.subscribe((result) => {
			if (result) {
				this.setStats();
			}
		});
	}

	private setStats(): void {
		common.updateDiv(
			document.getElementById('pokemonStatsWrapper') as HTMLDivElement,
			this.createStatsDisplay(this.dataService.getPokemonStats())
		);
	}

	private createStatsDisplay(stats: Stats): string {
		let statDisplay = '<div id="pokemonStats"><h3>Base Stats</h3>';
		statDisplay += `<div class="stat hp"><p>HP</p><p data-label="HP">${stats.hp}</p></div>`;
		statDisplay += `<div class="stat at"><p>Atk</p><p data-label="Atk">${stats.attack}</p></div>`;
		statDisplay += `<div class="stat df"><p>Def</p><p data-label="Def">${stats.defense}</p></div>`;
		statDisplay += `<div class="stat sa"><p>Sp.Atk</p><p data-label="Sp. Atk">${stats.spatk}</p></div>`;
		statDisplay += `<div class="stat sd"><p>Sp.Def</p><p data-label="Sp. Def">${stats.spdef}</p></div>`;
		statDisplay += `<div class="stat sp"><p>Spd</p><p data-label="Spd">${stats.speed}</p></div></div>`;

		return statDisplay;
	}
}
