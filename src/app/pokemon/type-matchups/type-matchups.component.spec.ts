import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypeMatchupsComponent } from './type-matchups.component';
import { beforeEach, it, expect, describe } from 'vitest'
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

describe('TypeMatchupsComponent', () => {
	let component: TypeMatchupsComponent;
	let fixture: ComponentFixture<TypeMatchupsComponent>;

	beforeEach(async () => {
		TestBed.resetTestEnvironment();
  		TestBed.initTestEnvironment(BrowserTestingModule, platformBrowserTesting());
		
		await TestBed.configureTestingModule({
			imports: [TypeMatchupsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(TypeMatchupsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
