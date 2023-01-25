import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { RaidTierComponent } from './header/dropdowns/raid-tier/raid-tier.component';
import { PokemonListComponent } from './header/dropdowns/pokemon-list/pokemon-list.component';
import { TeraTypeComponent } from './header/dropdowns/tera-type/tera-type.component';
import { ShareRaidComponent } from './header/icons/share-raid/share-raid.component';
import { ImagesComponent } from './pokemon/images/images.component';
import { TypesComponent } from './pokemon/types/types.component';
import { StatsComponent } from './pokemon/stats/stats.component';
import { AbilityComponent } from './pokemon/ability/ability.component';
import { MovesComponent } from './pokemon/moves/moves.component';
import { HerbsComponent } from './pokemon/herbs/herbs.component';
import { TypeMatchupsComponent } from './pokemon/type-matchups/type-matchups.component';
import { By } from '@angular/platform-browser';
import { StateService } from 'src/shared/services/state/state.service';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	let service: StateService;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				RaidTierComponent,
				PokemonListComponent,
				TeraTypeComponent,
				ShareRaidComponent,
				ImagesComponent,
				TypesComponent,
				StatsComponent,
				AbilityComponent,
				MovesComponent,
				HerbsComponent,
				TypeMatchupsComponent,
			],
			imports: [ApolloTestingModule],
		}).compileComponents();

		service = TestBed.inject(StateService);
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create the app', () => {
		expect(component).toBeTruthy();
	});

	it(`should have as title 'Tera Raid Info'`, () => {
		expect(component.title).toEqual('Tera Raid Info');
	});

	it('pokemonList should update state', () => {
		const element = fixture.debugElement;
		const select = element.query(By.css('#pokemonList')).nativeElement;

		service.changeRaidTier('6');
		select.value = select.options[2].value;
		select.dispatchEvent(new Event('change'));
		fixture.detectChanges();

		service.pokemonList.subscribe((result) => {
			expect(result).toBe('Annihilape');
		});
	});

	it('pokemonList should update state with pokemon form', () => {
		const element = fixture.debugElement;
		const select = element.query(By.css('#pokemonList')).nativeElement;

		service.changeRaidTier('5');
		select.value = select.options[57].value;
		select.dispatchEvent(new Event('change'));
		fixture.detectChanges();

		service.pokemonList.subscribe((result) => {
			expect(result).toBe('Indeedee (Female)');
		});
	});

	it('should auto populate raid data with one name', () => {
		const element = fixture.debugElement;

		const raidTier = element.query(By.css('#raidTier')).nativeElement;
		const pokemonList = element.query(By.css('#pokemonList')).nativeElement;
		const teraList = element.query(By.css('#teraList')).nativeElement;

		component.autoPopulateSelections(
			'http://localhost/tera-raid-info/5/Abomasnow/Electric',
			'http://localhost'
		);
		fixture.detectChanges();

		expect(raidTier.value).toBe('5');
		expect(pokemonList.value).toBe('Abomasnow');
		expect(teraList.value).toBe('Electric');
	});

	it('should auto populate raid data with spaced name', () => {
		const element = fixture.debugElement;

		const raidTier = element.query(By.css('#raidTier')).nativeElement;
		const pokemonList = element.query(By.css('#pokemonList')).nativeElement;
		const teraList = element.query(By.css('#teraList')).nativeElement;

		component.autoPopulateSelections(
			'http://localhost/tera-raid-info/6/Tauros%20(Fire)/Steel',
			'http://localhost'
		);
		fixture.detectChanges();

		expect(raidTier.value).toBe('6');
		expect(pokemonList.value).toBe('Tauros (Fire)');
		expect(teraList.value).toBe('Steel');
	});
});
