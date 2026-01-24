import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionsComponent } from './actions.component';
import { beforeEach, it, expect, describe } from 'vitest'
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

describe('ActionsComponent', () => {
	let component: ActionsComponent;
	let fixture: ComponentFixture<ActionsComponent>;

	beforeEach(async () => {
		TestBed.resetTestEnvironment();
  		TestBed.initTestEnvironment(BrowserTestingModule, platformBrowserTesting());
		
		await TestBed.configureTestingModule({
			imports: [ActionsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ActionsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
