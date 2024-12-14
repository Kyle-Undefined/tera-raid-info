import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { ImagesComponent } from './images.component';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { GraphqlService } from 'src/shared/services/graphql/graphql.service';
import { StateService } from 'src/shared/services/state/state.service';

describe('ImagesComponent', () => {
	let component: ImagesComponent;
	let fixture: ComponentFixture<ImagesComponent>;
	let stateService: StateService;
	let graphqlService: GraphqlService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ImagesComponent],
			providers: [StateService, GraphqlService],
			imports: [ApolloTestingModule],
		}).compileComponents();

		stateService = TestBed.inject(StateService);
		graphqlService = TestBed.inject(GraphqlService);
		fixture = TestBed.createComponent(ImagesComponent);
		component = fixture.componentInstance;
		stateService.changeRegionList('Paldea');
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should set images for 5 Star Toxtricity (Amped)', () => {
		spyOn(graphqlService, 'getDexNumber').and.returnValue(of(849));

		const element = fixture.debugElement;
		const normalImage = element.query(
			By.css('#pokemonImageNormal')
		).nativeElement;
		const shinyImage = element.query(
			By.css('#pokemonImageShiny')
		).nativeElement;

		stateService.changeRaidTier('5');
		stateService.changePokemon('Toxtricity (Amped)');
		fixture.detectChanges();

		expect(normalImage.innerHTML).toBe(
			'<img alt="Normal" title="Normal" src="./assets/pokemon/849.png">'
		);
		expect(shinyImage.innerHTML).toBe(
			'<img alt="Shiny" title="Shiny" src="./assets/pokemon/shiny/849.png">'
		);
	});

	it('should set images for 6 Star Tauros (Fire)', () => {
		spyOn(graphqlService, 'getDexNumber').and.returnValue(of(128));

		const element = fixture.debugElement;
		const normalImage = element.query(
			By.css('#pokemonImageNormal')
		).nativeElement;
		const shinyImage = element.query(
			By.css('#pokemonImageShiny')
		).nativeElement;

		stateService.changeRaidTier('6');
		stateService.changePokemon('Tauros (Fire)');
		fixture.detectChanges();

		expect(normalImage.innerHTML).toBe(
			'<img alt="Normal" title="Normal" src="./assets/pokemon/128-b.png">'
		);
		expect(shinyImage.innerHTML).toBe(
			'<img alt="Shiny" title="Shiny" src="./assets/pokemon/shiny/128-b.png">'
		);
	});
});
