import { Component, OnInit } from '@angular/core';
import { AbilityDex } from 'src/shared/models/abilities';
import { DataService } from 'src/shared/services/data/data.service';
import { StateService } from 'src/shared/services/state/state.service';
import * as common from 'src/shared/utils/common';

@Component({
	selector: 'app-pokemon-ability',
	templateUrl: './ability.component.html',
})
export class AbilityComponent implements OnInit {
	constructor(
		private dataService: DataService,
		private stateService: StateService
	) {}

	public ngOnInit(): void {
		this.stateService.pokemonList.subscribe((result) => {
			if (result) {
				this.setAbilities();
			}
		});
	}

	private setAbilities(): void {
		common.updateDiv(
			document.getElementById('pokemonAbility') as HTMLDivElement,
			'<h3>Ability:</h3>'
		);

		this.dataService.getPokemonAbilities().forEach((ability) => {
			common.updateDiv(
				document.getElementById('pokemonAbility') as HTMLDivElement,
				this.createAbilityDiv(this.dataService.getAbilityDexData(ability))
			);
		});

		if (this.dataService.getPokemonHiddenAbility()) {
			common.updateDiv(
				document.getElementById('pokemonAbility') as HTMLDivElement,
				this.createAbilityDiv(
					this.dataService.getAbilityDexData(
						this.dataService.getPokemonHiddenAbility()
					),
					true
				)
			);
		}
	}

	private createAbilityDiv(ability: AbilityDex, hidden?: boolean): string {
		return `<div class="typeMatchupText" data-info="${ability.desc}">${
			ability.name
		}${hidden ? ' (H)' : ''}</div>`;
	}
}
