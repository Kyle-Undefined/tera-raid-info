import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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

	it('should change value', () => {
		spyOn(component, 'valueChanged');

		const element = fixture.debugElement;
		const select = element.query(By.css('select')).nativeElement;

		select.value = select.options[1].value;
		select.dispatchEvent(new Event('change'));
		fixture.detectChanges();

		expect(component.valueChanged).toHaveBeenCalled();
		expect(select.value).toBe('5');
	});
});
