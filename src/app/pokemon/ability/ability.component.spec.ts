import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { of } from 'rxjs';
import { GraphqlService } from 'src/shared/services/graphql/graphql.service';
import {
	abilitiesFiveStarResponse,
	abilitiesSixStarResponse,
} from 'src/shared/services/graphql/mocked';
import { StateService } from 'src/shared/services/state/state.service';
import { AbilityComponent } from './ability.component';
import { beforeEach, it, expect, vi, describe } from 'vitest'
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

describe('AbilityComponent', () => {
	let component: AbilityComponent;
	let fixture: ComponentFixture<AbilityComponent>;
	let stateService: StateService;
	let graphqlService: GraphqlService;

	beforeEach(async () => {
		TestBed.resetTestEnvironment();
  		TestBed.initTestEnvironment(BrowserTestingModule, platformBrowserTesting());
		
		await TestBed.configureTestingModule({
			providers: [StateService, GraphqlService],
			imports: [ApolloTestingModule, AbilityComponent],
		}).compileComponents();

		stateService = TestBed.inject(StateService);
		graphqlService = TestBed.inject(GraphqlService);
		fixture = TestBed.createComponent(AbilityComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should set abilities for 6 star Annihilape', () => {
		vi.spyOn(graphqlService, 'getAbilities').mockReturnValue(
			of(abilitiesSixStarResponse)
		);

		const element = fixture.debugElement;
		const div = element.query(By.css('#pokemonAbility')).nativeElement;

		stateService.changeRaidTier('6');
		stateService.changePokemon('Annihilape');
		fixture.detectChanges();

		expect(div.innerHTML).toBe(
			`<h3>Ability:</h3><div class="typeMatchupText" data-info="This Pokémon cannot fall asleep. Gaining this Ability while asleep cures it.">Vital Spirit</div><div class="typeMatchupText" data-info="This Pokémon cannot be made to flinch. Immune to Intimidate.">Inner Focus</div><div class="typeMatchupText" data-info="This Pokémon's Attack is raised by 2 for each of its stats that is lowered by a foe.">Defiant (H)</div>`
		);
	});

	it('should set abilities for 5 star Ditto', () => {
		vi.spyOn(graphqlService, 'getAbilities').mockReturnValue(
			of(abilitiesFiveStarResponse)
		);

		const element = fixture.debugElement;
		const div = element.query(By.css('#pokemonAbility')).nativeElement;

		stateService.changeRaidTier('5');
		stateService.changePokemon('Ditto');
		fixture.detectChanges();

		expect(div.innerHTML).toBe(
			`<h3>Ability:</h3><div class="typeMatchupText" data-info="This Pokémon cannot be paralyzed. Gaining this Ability while paralyzed cures it.">Limber</div><div class="typeMatchupText" data-info="On switch-in, this Pokémon Transforms into the opposing Pokémon that is facing it.">Imposter (H)</div>`
		);
	});
});
