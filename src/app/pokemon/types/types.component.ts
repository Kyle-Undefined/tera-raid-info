import { Component, inject } from '@angular/core';
import { RaidDataService } from 'src/shared/services/raid-data/raid-data.service';

@Component({
	selector: 'app-pokemon-types',
	standalone: true,
	templateUrl: './types.component.html',
})
export class TypesComponent {
	readonly data = inject(RaidDataService);
}
