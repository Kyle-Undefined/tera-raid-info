import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from 'src/shared/services/data/data.service';
import { StateService } from 'src/shared/services/state/state.service';
import * as common from 'src/shared/utils/common';

@Component({
	selector: 'app-pokemon-list',
	templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent implements OnInit, AfterViewInit {
	private pokemonList = document.getElementById(
		'pokemonList'
	) as HTMLSelectElement;

	constructor(
		private stateService: StateService,
		private dataService: DataService
	) {}

	public ngOnInit(): void {
		this.stateService.raidTier.subscribe((result) => {
			this.populatePokemonList(result);
		});
	}

	public ngAfterViewInit(): void {
		this.pokemonList = document.getElementById(
			'pokemonList'
		) as HTMLSelectElement;
	}

	private populatePokemonList(raidTier: string): void {
		if (this.pokemonList) {
			this.resetPokemonList();
		}

		Object.entries(this.dataService.getRaidData(raidTier).pokemon)
			.sort()
			.forEach((pokemon) => {
				const [mon] = pokemon;
				const option = document.createElement('option') as HTMLOptionElement;

				option.value = mon;
				option.text = mon;

				this.pokemonList.add(option);
			});
	}

	private resetPokemonList(): void {
		this.pokemonList.innerHTML = '';
		this.pokemonList.innerHTML = '<option value="">-- Pokemon --</option>';
	}

	public valueChanged(event: Event) {
		common.clearData();

		this.dataService.getPokemonData((event.target as HTMLSelectElement).value);
		this.stateService.changePokemon((event.target as HTMLSelectElement).value);
	}
}
