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
	previewPointer(ability: Ability, event: PointerEvent): void {
		// Touch contact must not open a hover preview before its click completes.
		if (event.pointerType === 'mouse') this.preview.set(ability);
	}
	previewFocus(ability: Ability, event: FocusEvent): void {
		if ((event.target as HTMLElement).matches(':focus-visible'))
			this.preview.set(ability);
	}
	toggle(ability: Ability): void {
		this.pinned.set(this.pinned() === ability ? null : ability);
		this.preview.set(null);
	}
	close(): void {
		this.pinned.set(null);
		this.preview.set(null);
	}
}
