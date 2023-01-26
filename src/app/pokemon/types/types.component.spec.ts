import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { TypesComponent } from './types.component';
import * as common from 'src/shared/utils/common';
import { By } from '@angular/platform-browser';
import { StateService } from 'src/shared/services/state/state.service';
import { GraphqlService } from 'src/shared/services/graphql/graphql.service';
import { of } from 'rxjs';
import { typeResponse } from 'src/shared/services/graphql/mocked';

describe('TypesComponent', () => {
	let component: TypesComponent;
	let fixture: ComponentFixture<TypesComponent>;
	let stateService: StateService;
	let graphqlService: GraphqlService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TypesComponent],
			providers: [StateService, GraphqlService],
			imports: [ApolloTestingModule],
		}).compileComponents();

		stateService = TestBed.inject(StateService);
		graphqlService = TestBed.inject(GraphqlService);
		fixture = TestBed.createComponent(TypesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should clear div innerHTML by section', () => {
		const element = fixture.debugElement;
		const div = element.query(By.css('#pokemonTypes')).nativeElement;

		div.innerHTML = 'Foo, bar';
		common.clearData('pokemonTypes');
		expect(div.innerHTML).toBe('');
	});

	it('should set types', () => {
		spyOn(graphqlService, 'getTypes').and.returnValue(of(typeResponse));

		const element = fixture.debugElement;
		const div = element.query(By.css('#pokemonTypes')).nativeElement;

		stateService.changeRaidTier('5');
		stateService.changePokemon('Amoonguss');
		fixture.detectChanges();

		expect(div.innerHTML).toBe(
			'<div class="typeText grass">Grass</div><div class="typeText poison">Poison</div>'
		);
	});
});
