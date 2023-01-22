import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { MovesComponent } from './moves.component';

describe('MovesComponent', () => {
	let component: MovesComponent;
	let fixture: ComponentFixture<MovesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MovesComponent],
			imports: [ApolloTestingModule],
		}).compileComponents();

		fixture = TestBed.createComponent(MovesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
