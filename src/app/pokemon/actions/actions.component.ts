import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/shared/services/state/state.service';
import {
	FiveStarRaids,
	SixStarRaids,
	RaidAction,
	RaidRegion,
} from 'src/shared/models/raids';
import * as common from 'src/shared/utils/common';

@Component({
    selector: 'app-pokemon-actions',
    templateUrl: './actions.component.html',
    standalone: false
})
export class ActionsComponent implements OnInit {
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
			this.setActions();
		});
		this.stateService.regionList.subscribe((result) => {
			this.region = result;
		});
	}

	private setActions(): void {
		if (this.pokemonList) {
			common.updateDiv(
				document.getElementById('pokemonActions') as HTMLDivElement,
				'<h3>Actions:</h3>'
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
					pokemon.info.actions
						?.sort((a, b) => b.threshold - a.threshold)
						.forEach((action) => {
							common.updateDiv(
								document.getElementById('pokemonActions') as HTMLDivElement,
								this.createActionDiv(action)
							);
						});
				});
		}
	}

	private createActionDiv(action: RaidAction): string {
		return `<div class="actions ${action.type.toLowerCase()}-${action.threshold.toString()}" data-info="${action.threshold.toString()}% ${action.type.toString()} Remaining">${
			action.action
		}</div>`;
	}
}
