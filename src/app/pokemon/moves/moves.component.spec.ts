import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { MovesComponent } from './moves.component';
import { beforeEach, it, expect, describe } from 'vitest'
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

describe('MovesComponent', () => {
	let component: MovesComponent;
	let fixture: ComponentFixture<MovesComponent>;

	beforeEach(async () => {
		TestBed.resetTestEnvironment();
  		TestBed.initTestEnvironment(BrowserTestingModule, platformBrowserTesting());
		
		await TestBed.configureTestingModule({
			imports: [ApolloTestingModule, MovesComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(MovesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
