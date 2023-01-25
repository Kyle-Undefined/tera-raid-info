import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { StateService } from 'src/shared/services/state/state.service';

import { PokemonListComponent } from './pokemon-list.component';

describe('PokemonListComponent', () => {
	let component: PokemonListComponent;
	let fixture: ComponentFixture<PokemonListComponent>;
	let service: StateService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PokemonListComponent],
			providers: [StateService],
			imports: [ApolloTestingModule],
			schemas: [NO_ERRORS_SCHEMA],
		}).compileComponents();

		service = TestBed.inject(StateService);
		fixture = TestBed.createComponent(PokemonListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should create options', () => {
		const select: HTMLSelectElement = fixture.nativeElement;
		service.changeRaidTier('6');
		expect(select.querySelector('select')?.options.length).toBeGreaterThan(1);
	});

	it('should call event with 5 star raid data', () => {
		spyOn(component, 'valueChanged');

		const element = fixture.debugElement;
		const select = element.query(By.css('select')).nativeElement;

		service.changeRaidTier('5');
		select.value = select.options[1].value;
		select.dispatchEvent(new Event('change'));
		fixture.detectChanges();

		expect(component.valueChanged).toHaveBeenCalled();
		expect(select.value).toBe('Abomasnow');
	});

	it('should call event with 6 star raid data', () => {
		spyOn(component, 'valueChanged');

		const element = fixture.debugElement;
		const select = element.query(By.css('select')).nativeElement;

		service.changeRaidTier('6');
		select.value = select.options[1].value;
		select.dispatchEvent(new Event('change'));
		fixture.detectChanges();

		expect(component.valueChanged).toHaveBeenCalled();
		expect(select.value).toBe('Amoonguss');
	});
});
