import { Component, effect, inject, signal } from '@angular/core';
import { StateService } from 'src/shared/services/state/state.service';
@Component({
	selector: 'app-share-raid',
	standalone: true,
	templateUrl: './share-raid.component.html',
})
export class ShareRaidComponent {
	readonly state = inject(StateService);
	readonly status = signal('');
	readonly fallbackUrl = signal('');
	constructor() {
		effect(() => {
			this.state.selection();
			this.status.set('');
			this.fallbackUrl.set('');
		});
	}
	async shareRaid(): Promise<void> {
		const selection = this.state.selection();
		if (!selection.pokemon) return;
		const base = new URL(document.baseURI);
		const path = [
			selection.tier,
			selection.region,
			selection.pokemon,
			selection.tera,
		]
			.map(encodeURIComponent)
			.join('/');
		const url = new URL(path, base).href;
		try {
			await navigator.clipboard.writeText(url);
			this.fallbackUrl.set('');
			this.status.set('Raid link copied');
		} catch {
			this.fallbackUrl.set(url);
			this.status.set('Copy this raid link');
		}
	}
}
