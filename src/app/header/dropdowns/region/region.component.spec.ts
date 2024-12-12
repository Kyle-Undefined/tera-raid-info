import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StateService } from 'src/shared/services/state/state.service';

import { RegionComponent } from './region.component';

describe('RegionComponent', () => {
	let component: RegionComponent;
	let fixture: ComponentFixture<RegionComponent>;
	let service: StateService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RegionComponent],
			providers: [StateService],
		}).compileComponents();

		service = TestBed.inject(StateService);
		fixture = TestBed.createComponent(RegionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should default to Paldea', () => {
		const element = fixture.debugElement;
		const select = element.query(By.css('select')).nativeElement;

		expect(select.value).toBe('Paldea');
	});

	it('should call event', () => {
		spyOn(component, 'valueChanged');

		const element = fixture.debugElement;
		const select = element.query(By.css('select')).nativeElement;

		select.value = select.options[3].value;
		select.dispatchEvent(new Event('change'));
		fixture.detectChanges();

		expect(component.valueChanged).toHaveBeenCalled();
		expect(select.value).toBe('Terarium');
	});

	it('should update state', () => {
		const element = fixture.debugElement;
		const select = element.query(By.css('select')).nativeElement;

		select.value = select.options[2].value;
		fixture.detectChanges();

		component.valueChanged();

		service.regionList.subscribe((result) => {
			expect(result).toBe('Kitakami');
		});
	});
});
