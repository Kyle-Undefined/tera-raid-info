import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StateService } from 'src/shared/services/state/state.service';
import { DataService } from 'src/shared/services/data/data.service';
import { TypeCalcService } from 'src/shared/services/type-calc/type-calc.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
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

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
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
	imports: [BrowserModule],
	providers: [StateService, DataService, TypeCalcService],
	bootstrap: [AppComponent],
})
export class AppModule {}
