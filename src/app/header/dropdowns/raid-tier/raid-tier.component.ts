import { Component } from '@angular/core';
import { StateService } from 'src/shared/services/state/state.service';
import * as common from 'src/shared/utils/common';

@Component({
	selector: 'app-raid-tier',
	templateUrl: './raid-tier.component.html',
})
export class RaidTierComponent {
	constructor(private stateService: StateService) {}

	public valueChanged(event: Event) {
		common.clearData();
		this.stateService.changeRaidTier((event.target as HTMLSelectElement).value);
	}
}
