import { Component, computed, effect, inject, signal } from '@angular/core';
import { RaidDataService } from 'src/shared/services/raid-data/raid-data.service';
import type { Ability } from '@favware/graphql-pokemon';
@Component({
	selector: 'app-pokemon-ability',
	standalone: true,
	templateUrl: './ability.component.html',
})
export class AbilityComponent {
	readonly data = inject(RaidDataService);
	readonly abilities = computed(() => {
		const view = this.data.view();
		if (!view) return [];
		const { first, second, hidden } = view.pokemon.abilities;
		return [
			first && { ability: first, hidden: false },
			second && { ability: second, hidden: false },
			(view.tier === '6' || view.raid.name === 'Ditto') &&
				hidden && { ability: hidden, hidden: true },
		].filter(Boolean) as { ability: Ability; hidden: boolean }[];
	});
	readonly preview = signal<Ability | null>(null);
	readonly pinned = signal<Ability | null>(null);
	readonly inspected = computed(() => this.pinned() ?? this.preview());
	constructor() {
		effect(() => {
			this.data.view();
			this.close();
		});
	}
	toggle(ability: Ability): void {
		this.preview.set(null);
		this.pinned.set(this.pinned() === ability ? null : ability);
	}
	close(): void {
		this.pinned.set(null);
		this.preview.set(null);
	}
}
