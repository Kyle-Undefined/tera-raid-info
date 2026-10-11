import { Component, computed, inject } from '@angular/core';
import { RaidDataService } from 'src/shared/services/raid-data/raid-data.service';

@Component({
	selector: 'app-pokemon-stats',
	standalone: true,
	templateUrl: './stats.component.html',
})
export class StatsComponent {
	readonly data = inject(RaidDataService);
	readonly stats = computed(() => {
		const stats = this.data.view()?.pokemon.baseStats;
		return stats
			? [
					{ label: 'HP', value: stats.hp },
					{ label: 'Atk', value: stats.attack },
					{ label: 'Def', value: stats.defense },
					{ label: 'Sp. Atk', value: stats.specialattack },
					{ label: 'Sp. Def', value: stats.specialdefense },
					{ label: 'Spd', value: stats.speed },
				]
			: [];
	});
}
