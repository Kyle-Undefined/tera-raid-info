import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { StatsComponent } from './stats.component';

describe('StatsComponent', () => {
	let component: StatsComponent;
	let fixture: ComponentFixture<StatsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [StatsComponent],
			imports: [ApolloTestingModule],
		}).compileComponents();

		fixture = TestBed.createComponent(StatsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
