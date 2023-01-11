import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareRaidComponent } from './share-raid.component';

describe('ShareRaidComponent', () => {
	let component: ShareRaidComponent;
	let fixture: ComponentFixture<ShareRaidComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ShareRaidComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ShareRaidComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
