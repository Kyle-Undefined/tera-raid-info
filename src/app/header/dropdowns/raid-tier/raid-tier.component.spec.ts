import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StateService } from 'src/shared/services/state/state.service';
import { beforeEach, it, expect, vi, describe } from 'vitest'
import { RaidTierComponent } from './raid-tier.component';
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

describe('RaidTierComponent', () => {
	let component: RaidTierComponent;
	let fixture: ComponentFixture<RaidTierComponent>;
	let service: StateService;

	beforeEach(async () => {
		TestBed.resetTestEnvironment();
  		TestBed.initTestEnvironment(BrowserTestingModule, platformBrowserTesting());
		
		await TestBed.configureTestingModule({
			imports: [RaidTierComponent],
			providers: [StateService],
		}).compileComponents();

		service = TestBed.inject(StateService);
		fixture = TestBed.createComponent(RaidTierComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should call event', () => {
		vi.spyOn(component, 'valueChanged');

		const element = fixture.debugElement;
		const select = element.query(By.css('select')).nativeElement;

		select.value = select.options[1].value;
		select.dispatchEvent(new Event('change'));
		fixture.detectChanges();

		expect(component.valueChanged).toHaveBeenCalled();
		expect(select.value).toBe('5');
	});

	it('should update state', () => {
		const element = fixture.debugElement;
		const select = element.query(By.css('select')).nativeElement;

		select.value = select.options[2].value;
		fixture.detectChanges();

		component.valueChanged();

		service.raidTier.subscribe((result) => {
			expect(result).toBe('6');
		});
	});
});
