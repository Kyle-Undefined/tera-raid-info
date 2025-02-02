import { Component, OnInit } from '@angular/core';
import { Ability } from '@favware/graphql-pokemon';
import { GraphqlService } from 'src/shared/services/graphql/graphql.service';
import { StateService } from 'src/shared/services/state/state.service';
import * as common from 'src/shared/utils/common';

@Component({
    selector: 'app-pokemon-ability',
    templateUrl: './ability.component.html',
    standalone: false
})
export class AbilityComponent implements OnInit {
	private raidTier = '';
	private pokemonList = '';

	constructor(
		private graphqlService: GraphqlService,
		private stateService: StateService
	) {}

	public ngOnInit(): void {
		this.stateService.raidTier.subscribe((result) => {
			this.raidTier = result;
		});
		this.stateService.pokemonList.subscribe((result) => {
			this.pokemonList = result;
			this.setAbilities();
		});
	}

	private setAbilities(): void {
		if (this.pokemonList) {
			const pokemonAbility = document.getElementById(
				'pokemonAbility'
			) as HTMLDivElement;

			this.graphqlService.getAbilities().subscribe((data) => {
				common.updateDiv(pokemonAbility, '<h3>Ability:</h3>');

				common.updateDiv(pokemonAbility, this.createAbilityDiv(data.first));

				if (data.second) {
					common.updateDiv(pokemonAbility, this.createAbilityDiv(data.second));
				}

				if (this.canShowHidden()) {
					if (data.hidden) {
						common.updateDiv(
							pokemonAbility,
							this.createAbilityDiv(data.hidden, true)
						);
					}
				}
			});
		}
	}

	private createAbilityDiv(ability: Ability, hidden?: boolean): string {
		return `<div class="typeMatchupText" data-info="${ability.shortDesc}">${
			ability.name
		}${hidden ? ' (H)' : ''}</div>`;
	}

	private canShowHidden(): boolean {
		return (
			this.raidTier == '6' ||
			(this.raidTier == '5' && this.pokemonList == 'Ditto')
		);
	}
}
