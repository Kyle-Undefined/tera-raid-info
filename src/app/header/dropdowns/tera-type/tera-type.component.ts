import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/shared/services/state/state.service';
import { Types } from 'src/shared/models/types';

@Component({
	selector: 'app-tera-type',
	templateUrl: './tera-type.component.html',
})
export class TeraTypeComponent implements OnInit {
	constructor(private stateService: StateService) {}

	public ngOnInit(): void {
		Types.forEach((type) => {
			const option = document.createElement('option') as HTMLOptionElement;

			option.value = type.name;
			option.text = type.name;

			(document.getElementById('teraList') as HTMLSelectElement).add(option);
		});
	}

	public valueChanged() {
		const selectElement = document.getElementById(
			'teraList'
		) as HTMLSelectElement;
		const selectedIndex = selectElement.selectedIndex;
		const option = selectElement.options[selectedIndex];

		this.stateService.changeTeraType(option.value);
	}
}
