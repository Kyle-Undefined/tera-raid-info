import { TestBed } from '@angular/core/testing';
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

describe('AppComponent', () => {
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
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'Tera Raid Info'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual('Tera Raid Info');
	});
});
