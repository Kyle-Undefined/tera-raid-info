import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { ImagesComponent } from './images.component';

describe('ImagesComponent', () => {
	let component: ImagesComponent;
	let fixture: ComponentFixture<ImagesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ImagesComponent],
			imports: [ApolloTestingModule],
		}).compileComponents();

		fixture = TestBed.createComponent(ImagesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
