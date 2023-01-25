import { Component } from '@angular/core';
import { StateService } from 'src/shared/services/state/state.service';

@Component({
	selector: 'app-raid-tier',
	templateUrl: './raid-tier.component.html',
})
export class RaidTierComponent {
	constructor(private stateService: StateService) {}

	public valueChanged() {
		const selectElement = document.getElementById(
			'raidTier'
		) as HTMLSelectElement;
		const selectedIndex = selectElement.selectedIndex;
		const option = selectElement.options[selectedIndex];

		this.stateService.changeRaidTier(option.value);
	}
}
