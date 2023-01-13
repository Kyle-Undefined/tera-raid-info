import { Component } from '@angular/core';
import { StateService } from 'src/shared/services/state/state.service';

@Component({
	selector: 'app-tera-type',
	templateUrl: './tera-type.component.html',
})
export class TeraTypeComponent {
	constructor(private stateService: StateService) {}

	public valueChanged(event: Event) {
		this.stateService.changeTeraTypeValue(
			(event.target as HTMLSelectElement).value
		);
		this.stateService.changeTeraTypeName(
			(event.target as HTMLSelectElement).selectedOptions[0].text
		);
	}
}
