import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/shared/services/data/data.service';
import { StateService } from 'src/shared/services/state/state.service';
import * as common from 'src/shared/utils/common';

@Component({
	selector: 'app-pokemon-types',
	templateUrl: './types.component.html',
})
export class TypesComponent implements OnInit {
	constructor(
		private dataService: DataService,
		private stateService: StateService
	) {}

	public ngOnInit(): void {
		this.stateService.pokemonList.subscribe(() => {
			this.setTypes();
		});
	}

	private setTypes(): void {
		this.dataService.getPokemonTypeNames().forEach((type) => {
			common.updateDiv(
				document.getElementById('pokemonTypes') as HTMLDivElement,
				this.createTypeDisplay(type)
			);
		});
	}

	private createTypeDisplay(type: string): string {
		return `<div class="typeText ${type.toLowerCase()}">${type}</div>`;
	}
}
