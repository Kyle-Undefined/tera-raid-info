import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { TypesComponent } from './types.component';
import * as common from 'src/shared/utils/common';
import { By } from '@angular/platform-browser';

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

	it('should clear div innerHTML by section', () => {
		const element = fixture.debugElement;
		const div = element.query(By.css('#pokemonTypes'));

		div.nativeElement.innerHTML = 'Foo, bar';
		common.clearData('pokemonTypes');
		expect(div.nativeElement.innerHTML).toBe('');
	});
});
