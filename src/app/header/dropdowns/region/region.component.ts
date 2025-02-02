import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/shared/services/state/state.service';
import { RaidRegion } from 'src/shared/models/raids';

@Component({
    selector: 'app-region',
    templateUrl: './region.component.html',
    standalone: true,
})
export class RegionComponent implements OnInit {
	constructor(private stateService: StateService) {}

	public ngOnInit(): void {
		const regionKeys = Object.keys(RaidRegion) as (keyof typeof RaidRegion)[];

		regionKeys.map((regionKey) => {
			const option = document.createElement('option') as HTMLOptionElement;

			option.value = regionKey;
			option.text = RaidRegion[regionKey];

			if (option.text == 'Paldea') {
				option.selected = true;
				this.stateService.changeRegionList(option.value);
			}

			(document.getElementById('regionList') as HTMLSelectElement).add(option);
		});
	}

	public valueChanged() {
		const selectElement = document.getElementById(
			'regionList'
		) as HTMLSelectElement;
		const selectedIndex = selectElement.selectedIndex;
		const option = selectElement.options[selectedIndex];

		this.stateService.changeRegionList(option.value);
	}
}
