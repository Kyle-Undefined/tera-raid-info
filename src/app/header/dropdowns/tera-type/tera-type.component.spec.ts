import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StateService } from 'src/shared/services/state/state.service';

import { TeraTypeComponent } from './tera-type.component';

describe('TeraTypeComponent', () => {
	let component: TeraTypeComponent;
	let fixture: ComponentFixture<TeraTypeComponent>;
	let service: StateService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TeraTypeComponent],
			providers: [StateService],
		}).compileComponents();

		service = TestBed.inject(StateService);
		fixture = TestBed.createComponent(TeraTypeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should create options', () => {
		const select: HTMLSelectElement = fixture.nativeElement;
		expect(select.querySelector('select')?.options.length).toBeGreaterThan(1);
	});

	it('should call event', () => {
		spyOn(component, 'valueChanged');

		const element = fixture.debugElement;
		const select = element.query(By.css('select')).nativeElement;

		select.value = select.options[1].value;
		select.dispatchEvent(new Event('change'));
		fixture.detectChanges();

		expect(component.valueChanged).toHaveBeenCalled();
		expect(select.value).toBe('Bug');
	});

	it('should update state', () => {
		const element = fixture.debugElement;
		const select = element.query(By.css('select')).nativeElement;

		select.value = select.options[17].value;
		fixture.detectChanges();

		component.valueChanged();

		service.teraType.subscribe((result) => {
			expect(result).toBe('Steel');
		});
	});
});
