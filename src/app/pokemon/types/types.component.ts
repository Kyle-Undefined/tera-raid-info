import { Component, OnInit } from '@angular/core';
import { GraphqlService } from 'src/shared/services/graphql/graphql.service';
import { StateService } from 'src/shared/services/state/state.service';
import * as common from 'src/shared/utils/common';

@Component({
    selector: 'app-pokemon-types',
    templateUrl: './types.component.html',
    standalone: false
})
export class TypesComponent implements OnInit {
	constructor(
		private graphqlService: GraphqlService,
		private stateService: StateService
	) {}

	private pokemonList = '';

	public ngOnInit(): void {
		this.stateService.pokemonList.subscribe((result) => {
			this.pokemonList = result;
			this.setTypes();
		});
	}

	private setTypes(): void {
		if (this.pokemonList) {
			this.graphqlService.getTypes().subscribe((data) => {
				data.forEach((type) => {
					common.updateDiv(
						document.getElementById('pokemonTypes') as HTMLDivElement,
						this.createTypeDisplay(type.name)
					);
				});
			});
		}
	}

	private createTypeDisplay(type: string): string {
		return `<div class="typeText ${type.toLowerCase()}">${type}</div>`;
	}
}
