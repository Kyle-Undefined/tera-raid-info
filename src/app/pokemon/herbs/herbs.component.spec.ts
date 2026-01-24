import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HerbsComponent } from './herbs.component';
import { beforeEach, it, expect, describe } from 'vitest'
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

describe('HerbsComponent', () => {
	let component: HerbsComponent;
	let fixture: ComponentFixture<HerbsComponent>;

	beforeEach(async () => {
		TestBed.resetTestEnvironment();
  		TestBed.initTestEnvironment(BrowserTestingModule, platformBrowserTesting());
		
		await TestBed.configureTestingModule({
			imports: [HerbsComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(HerbsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
