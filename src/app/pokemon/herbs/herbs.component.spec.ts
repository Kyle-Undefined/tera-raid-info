import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbsComponent } from './herbs.component';

describe('HerbsComponent', () => {
	let component: HerbsComponent;
	let fixture: ComponentFixture<HerbsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HerbsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(HerbsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
