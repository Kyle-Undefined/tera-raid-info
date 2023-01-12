import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StateService } from 'src/shared/services/state/state.service';
import { DataService } from 'src/shared/services/data/data.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RaidTierComponent } from './header/dropdowns/raid-tier/raid-tier.component';
import { PokemonListComponent } from './header/dropdowns/pokemon-list/pokemon-list.component';
import { TeraTypeComponent } from './header/dropdowns/tera-type/tera-type.component';
import { ShareRaidComponent } from './header/icons/share-raid/share-raid.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		RaidTierComponent,
		PokemonListComponent,
		TeraTypeComponent,
		ShareRaidComponent,
	],
	imports: [BrowserModule],
	providers: [StateService, DataService],
	bootstrap: [AppComponent],
})
export class AppModule {}
