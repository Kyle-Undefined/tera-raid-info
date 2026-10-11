import { Component, computed, inject } from '@angular/core';
import { RaidDataService } from 'src/shared/services/raid-data/raid-data.service';

@Component({
	selector: 'app-pokemon-images',
	standalone: true,
	templateUrl: './images.component.html',
})
export class ImagesComponent {
	readonly data = inject(RaidDataService);
	readonly imageName = computed(() => {
		const view = this.data.view();
		return view
			? String(view.pokemon.num).padStart(3, '0') + (view.raid.imageAlt ?? '')
			: '';
	});
}
