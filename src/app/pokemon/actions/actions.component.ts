import { Component, computed, inject } from '@angular/core';
import { RaidDataService } from 'src/shared/services/raid-data/raid-data.service';

@Component({
	selector: 'app-pokemon-actions',
	standalone: true,
	templateUrl: './actions.component.html',
})
export class ActionsComponent {
	readonly data = inject(RaidDataService);
	readonly actions = computed(() =>
		[...(this.data.view()?.raid.info.actions ?? [])].sort(
			(a, b) => b.threshold - a.threshold
		)
	);
}
