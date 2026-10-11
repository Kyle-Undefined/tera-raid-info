import { TestBed } from '@angular/core/testing';
import {
	BrowserTestingModule,
	platformBrowserTesting,
} from '@angular/platform-browser/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { StateService } from 'src/shared/services/state/state.service';
import { ShareRaidComponent } from './share-raid.component';
describe('ShareRaidComponent', () => {
	let component: ShareRaidComponent;
	let state: StateService;
	const writeText = vi.fn();
	beforeEach(() => {
		TestBed.resetTestEnvironment();
		TestBed.initTestEnvironment(BrowserTestingModule, platformBrowserTesting());
		TestBed.configureTestingModule({ imports: [ShareRaidComponent] });
		state = TestBed.inject(StateService);
		component = TestBed.createComponent(ShareRaidComponent).componentInstance;
		Object.defineProperty(navigator, 'clipboard', {
			configurable: true,
			value: { writeText },
		});
		writeText.mockReset().mockResolvedValue(undefined);
		const base = document.createElement('base');
		base.href = 'https://example.test/tera-raid-info/';
		document.head.querySelector('base')?.remove();
		document.head.append(base);
	});
	it('does not share an empty selection', async () => {
		await component.shareRaid();
		expect(writeText).not.toHaveBeenCalled();
	});
	it('encodes forms and includes the tier, region and Tera type', async () => {
		state.changePokemon('Tauros (Fire)');
		state.changeTeraType('Fairy');
		await component.shareRaid();
		expect(writeText).toHaveBeenCalledWith(
			'https://example.test/tera-raid-info/6/Paldea/Tauros%20(Fire)/Fairy'
		);
		expect(component.status()).toBe('Raid link copied');
	});
	it('provides a copyable link when clipboard access fails', async () => {
		state.changePokemon('Garchomp');
		writeText.mockRejectedValue(new Error('denied'));
		await component.shareRaid();
		expect(component.fallbackUrl()).toContain('/6/Paldea/Garchomp/');
		expect(component.status()).toBe('Copy this raid link');
	});
});
