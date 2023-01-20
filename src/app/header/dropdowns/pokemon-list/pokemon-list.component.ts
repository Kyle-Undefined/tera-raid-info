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

			const raidData = raidTier == '5' ? FiveStarRaids : SixStarRaids;

			raidData
				.sort((a, b) => a.name.localeCompare(b.name))
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

	public valueChanged(event: Event) {
		const pokemon = (event.target as HTMLSelectElement).value;

		const selectElement = document.getElementById(
			'pokemonList'
		) as HTMLSelectElement;
		const selectedIndex = selectElement.selectedIndex;
		const option = selectElement.options[selectedIndex];
		const pokemonForm = option.id;

		common.clearData();

		if (pokemon) {
			this.graphqlService.getPokemon(
				(pokemonForm ? pokemonForm : pokemon.toLowerCase()) as PokemonEnum
			);
			this.stateService.changePokemon(pokemon);

			this.doLoad();
		}
	}

	private doLoad(): void {
		(
			document.getElementById('pokemonContent') as HTMLDivElement
		).style.display = 'none';

		(document.getElementById('dataLoading') as HTMLDivElement).hidden = false;

		setTimeout(() => {
			(
				document.getElementById('pokemonContent') as HTMLDivElement
			).style.display = '';

			(document.getElementById('dataLoading') as HTMLDivElement).hidden = true;
		}, Math.floor(Math.random() * (3000 - 2200) + 2200));
	}
}
