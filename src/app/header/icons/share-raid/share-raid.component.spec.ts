import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ShareRaidComponent } from './share-raid.component';

describe('ShareRaidComponent', () => {
	let component: ShareRaidComponent;
	let fixture: ComponentFixture<ShareRaidComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ShareRaidComponent],
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

		spyOn(navigator.clipboard, 'writeText');
		component.shareRaid();
		expect(navigator.clipboard.writeText).toHaveBeenCalled();
		expect(div.innerHTML).toBe('Copied to Clipboard');
	});

	it('should update div text on mouseout', () => {
		const element = fixture.debugElement;
		const div: HTMLDivElement = element.query(
			By.css('#shareText')
		).nativeElement;

		component.shareRaidMouseOut();
		fixture.detectChanges();
		expect(div.innerHTML).toBe('Share Raid');
	});
});
