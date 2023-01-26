import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { StatsComponent } from './stats.component';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { GraphqlService } from 'src/shared/services/graphql/graphql.service';
import { StateService } from 'src/shared/services/state/state.service';
import { statsResponse } from 'src/shared/services/graphql/mocked';

describe('StatsComponent', () => {
	let component: StatsComponent;
	let fixture: ComponentFixture<StatsComponent>;
	let stateService: StateService;
	let graphqlService: GraphqlService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [StatsComponent],
			providers: [StateService, GraphqlService],
			imports: [ApolloTestingModule],
		}).compileComponents();

		stateService = TestBed.inject(StateService);
		graphqlService = TestBed.inject(GraphqlService);
		fixture = TestBed.createComponent(StatsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should set stats', () => {
		spyOn(graphqlService, 'getStats').and.returnValue(of(statsResponse));

		const element = fixture.debugElement;
		const div = element.query(By.css('#pokemonStatsWrapper')).nativeElement;

		stateService.changeRaidTier('6');
		stateService.changePokemon('Tauros (Fire)');
		fixture.detectChanges();

		expect(div.innerHTML).toBe(
			'<div id="pokemonStats"><h3>Base Stats</h3><div class="stat hp"><p>HP</p><p data-label="HP">75</p></div><div class="stat at"><p>Atk</p><p data-label="Atk">110</p></div><div class="stat df"><p>Def</p><p data-label="Def">105</p></div><div class="stat sa"><p>Sp.Atk</p><p data-label="Sp. Atk">30</p></div><div class="stat sd"><p>Sp.Def</p><p data-label="Sp. Def">70</p></div><div class="stat sp"><p>Spd</p><p data-label="Spd">100</p></div></div>'
		);
	});
});
