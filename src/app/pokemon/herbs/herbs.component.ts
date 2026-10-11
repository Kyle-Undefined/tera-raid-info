import { Component, inject } from '@angular/core';
import { RaidDataService } from 'src/shared/services/raid-data/raid-data.service';

@Component({
	selector: 'app-pokemon-herbs',
	standalone: true,
	templateUrl: './herbs.component.html',
})
export class HerbsComponent {
	readonly data = inject(RaidDataService);
}
