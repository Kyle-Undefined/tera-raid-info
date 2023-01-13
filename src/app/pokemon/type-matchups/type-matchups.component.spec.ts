import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeMatchupsComponent } from './type-matchups.component';

describe('TypeMatchupsComponent', () => {
	let component: TypeMatchupsComponent;
	let fixture: ComponentFixture<TypeMatchupsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TypeMatchupsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(TypeMatchupsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
