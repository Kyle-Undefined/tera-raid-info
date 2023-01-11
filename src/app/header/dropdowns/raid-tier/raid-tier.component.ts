import { Component } from '@angular/core';
import { StateService } from 'src/shared/services/state.service';

@Component({
	selector: 'app-raid-tier',
	templateUrl: './raid-tier.component.html',
})
export class RaidTierComponent {
	constructor(private state: StateService) {}

	valueChanged(event: Event) {
		this.state.changeRaidTier((event.target as HTMLSelectElement).value);
	}
}
