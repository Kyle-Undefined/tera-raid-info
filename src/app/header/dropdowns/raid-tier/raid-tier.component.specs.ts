import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidTierComponent } from './raid-tier.component';

describe('RaidTierComponent', () => {
	let component: RaidTierComponent;
	let fixture: ComponentFixture<RaidTierComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RaidTierComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(RaidTierComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
