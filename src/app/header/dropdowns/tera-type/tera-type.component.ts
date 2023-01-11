import { Component } from '@angular/core';
import { StateService } from 'src/shared/services/state.service';

@Component({
	selector: 'app-tera-type',
	templateUrl: './tera-type.component.html',
})
export class TeraTypeComponent {
	constructor(private state: StateService) {}

	valueChanged(event: Event) {
		this.state.changeTeraTypeValue((event.target as HTMLSelectElement).value);
		this.state.changeTeraTypeName(
			(event.target as HTMLSelectElement).selectedOptions[0].text
		);
	}
}
