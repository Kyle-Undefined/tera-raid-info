import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { AbilityComponent } from './ability.component';

describe('AbilityComponent', () => {
	let component: AbilityComponent;
	let fixture: ComponentFixture<AbilityComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AbilityComponent],
			imports: [ApolloTestingModule],
		}).compileComponents();

		fixture = TestBed.createComponent(AbilityComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
