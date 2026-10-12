import { Component, computed, effect, inject, signal } from '@angular/core';
import { RaidDataService } from 'src/shared/services/raid-data/raid-data.service';
import type { Move } from '@favware/graphql-pokemon';
import { TypeCalcService } from 'src/shared/services/type-calc/type-calc.service';
@Component({
	selector: 'app-pokemon-moves',
	standalone: true,
	templateUrl: './moves.component.html',
})
export class MovesComponent {
	readonly data = inject(RaidDataService);
	readonly preview = signal<Move | null>(null);
	readonly pinned = signal<Move | null>(null);
	readonly inspected = computed(() => this.pinned() ?? this.preview());
	readonly typeCalc = inject(TypeCalcService);
	constructor() {
		effect(() => {
			this.data.view();
			this.close();
		});
	}
	previewPointer(move: Move, event: PointerEvent): void {
		// Touch contact must not open a hover preview before its click completes.
		if (event.pointerType === 'mouse') this.preview.set(move);
	}
	previewFocus(move: Move, event: FocusEvent): void {
		if ((event.target as HTMLElement).matches(':focus-visible'))
			this.preview.set(move);
	}
	toggle(move: Move): void {
		this.pinned.set(this.pinned() === move ? null : move);
		this.preview.set(null);
	}
	close(): void {
		this.pinned.set(null);
		this.preview.set(null);
	}
	advantages(move: Move): string {
		return move.category === 'Status'
			? ''
			: this.typeCalc
					.advantages(move.type)
					.map((type) => type.name.charAt(0).toUpperCase() + type.name.slice(1))
					.join(', ');
	}
}
