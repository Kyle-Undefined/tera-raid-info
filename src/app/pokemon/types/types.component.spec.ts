import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { TypesComponent } from './types.component';

describe('TypesComponent', () => {
	let component: TypesComponent;
	let fixture: ComponentFixture<TypesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TypesComponent],
			imports: [ApolloTestingModule],
		}).compileComponents();

		fixture = TestBed.createComponent(TypesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
