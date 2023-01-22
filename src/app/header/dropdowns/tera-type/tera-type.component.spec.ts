import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeraTypeComponent } from './tera-type.component';

describe('TeraTypeComponent', () => {
	let component: TeraTypeComponent;
	let fixture: ComponentFixture<TeraTypeComponent>;
	let select: HTMLSelectElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TeraTypeComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(TeraTypeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should create options', () => {
		select = fixture.nativeElement;
		expect(select.querySelector('select')?.options.length).toBeGreaterThan(1);
	});
});
