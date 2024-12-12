import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PokemonEnum } from '@favware/graphql-pokemon';
import { GraphqlService } from 'src/shared/services/graphql/graphql.service';
import { StateService } from 'src/shared/services/state/state.service';
import { FiveStarRaids, SixStarRaids } from 'src/shared/models/raids';
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
		private graphqlService: GraphqlService
	) {}

	private raidTier = '';
	private region = '';

	public ngOnInit(): void {
		this.stateService.raidTier.subscribe((result) => {
			this.raidTier = result;
			this.populatePokemonList();
		});

		this.stateService.regionList.subscribe((result) => {
			this.region = result;
			this.populatePokemonList();
		});
	}

	public ngAfterViewInit(): void {
		this.pokemonList = document.getElementById(
			'pokemonList'
		) as HTMLSelectElement;
	}

	private populatePokemonList(): void {
		if (this.pokemonList) {
			this.resetPokemonList();

			const raidData = this.raidTier == '5' ? FiveStarRaids : SixStarRaids;

			raidData
				.sort((a, b) => a.name.localeCompare(b.name))
				.filter((pokemon) => pokemon.region.toString() == this.region)
				.forEach((pokemon) => {
					const option = document.createElement('option') as HTMLOptionElement;

					option.value = pokemon.name;
					option.text = pokemon.name;

					if (pokemon.formName) {
						option.id = pokemon.formName;
					}

					this.pokemonList.add(option);
				});
		}
	}

	private resetPokemonList(): void {
		this.pokemonList.innerHTML = '';
		this.pokemonList.innerHTML = '<option value="">-- Pokemon --</option>';
	}

	public valueChanged() {
		const selectElement = document.getElementById(
			'pokemonList'
		) as HTMLSelectElement;
		const selectedIndex = selectElement.selectedIndex;
		const option = selectElement.options[selectedIndex];
		const pokemonForm = option.id;

		common.clearData();

		if (option.value) {
			this.graphqlService.getPokemon(
				(pokemonForm ? pokemonForm : option.value.toLowerCase()) as PokemonEnum
			);

			this.stateService.changePokemon(option.value);

			(
				document.getElementById('pokemonContent') as HTMLDivElement
			).style.display = 'none';

			this.stateService.changeLoading(true);
		}
	}
}
