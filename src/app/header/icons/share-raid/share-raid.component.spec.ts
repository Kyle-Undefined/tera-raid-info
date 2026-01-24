import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ShareRaidComponent } from './share-raid.component';
import { StateService } from 'src/shared/services/state/state.service';
import { beforeEach, it, expect, vi, describe } from 'vitest';
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

Object.assign(navigator, {
	clipboard: {
		writeText: vi.fn(() => Promise.resolve()),
	},
});

Object.assign(global, {
	location: {
		origin: 'http://localhost',
	},
});

describe('ShareRaidComponent', () => {
	let component: ShareRaidComponent;
	let fixture: ComponentFixture<ShareRaidComponent>;

	beforeEach(async () => {
		TestBed.resetTestEnvironment();
  		TestBed.initTestEnvironment(BrowserTestingModule, platformBrowserTesting());

		await TestBed.configureTestingModule({
			imports: [ShareRaidComponent],
			providers: [StateService],
		}).compileComponents();

		fixture = TestBed.createComponent(ShareRaidComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should generate raid link', () => {
		const element = fixture.debugElement;
		const div: HTMLDivElement = element.query(
			By.css('#shareText')
		).nativeElement;

		vi.spyOn(document, 'getElementById').mockReturnValue(div);

		const clipboardSpy = vi.spyOn(navigator.clipboard, 'writeText');
		component.shareRaid();
		expect(clipboardSpy).toHaveBeenCalled();
		expect(div.innerText).toBe('Copied to Clipboard');
	});

	it('should update div text on mouseout', () => {
		const element = fixture.debugElement;
		const div: HTMLDivElement = element.query(
			By.css('#shareText')
		).nativeElement;

		vi.spyOn(document, 'getElementById').mockReturnValue(div);

		component.shareRaidMouseOut();
		fixture.detectChanges();
		expect(div.innerText).toBe('Share Raid');
	});
});
