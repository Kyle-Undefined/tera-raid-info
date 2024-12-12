import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

import { StateService } from 'src/shared/services/state/state.service';
import { GraphqlService } from 'src/shared/services/graphql/graphql.service';
import { TypeCalcService } from 'src/shared/services/type-calc/type-calc.service';

import { AppComponent } from './app.component';
import { RaidTierComponent } from './header/dropdowns/raid-tier/raid-tier.component';
import { RegionComponent } from './header/dropdowns/region/region.component';
import { PokemonListComponent } from './header/dropdowns/pokemon-list/pokemon-list.component';
import { TeraTypeComponent } from './header/dropdowns/tera-type/tera-type.component';
import { ShareRaidComponent } from './header/icons/share-raid/share-raid.component';
import { ImagesComponent } from './pokemon/images/images.component';
import { TypesComponent } from './pokemon/types/types.component';
import { StatsComponent } from './pokemon/stats/stats.component';
import { AbilityComponent } from './pokemon/ability/ability.component';
import { MovesComponent } from './pokemon/moves/moves.component';
import { ActionsComponent } from './pokemon/actions/actions.component';
import { HerbsComponent } from './pokemon/herbs/herbs.component';
import { TypeMatchupsComponent } from './pokemon/type-matchups/type-matchups.component';

@NgModule({
	declarations: [
		AppComponent,
		RaidTierComponent,
		RegionComponent,
		PokemonListComponent,
		TeraTypeComponent,
		ShareRaidComponent,
		ImagesComponent,
		TypesComponent,
		StatsComponent,
		AbilityComponent,
		MovesComponent,
		ActionsComponent,
		HerbsComponent,
		TypeMatchupsComponent,
	],
	imports: [BrowserModule, GraphQLModule, HttpClientModule],
	providers: [StateService, GraphqlService, TypeCalcService],
	bootstrap: [AppComponent],
})
export class AppModule {}
