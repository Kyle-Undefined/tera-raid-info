import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/shared/services/state.service';

@Component({
	selector: 'app-pokemon-list',
	templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent implements OnInit {
	constructor(private state: StateService) {}

	raidTier = '';

	ngOnInit(): void {
		this.state.raidTier.subscribe((result) => {
			this.raidTier = result;
		});
	}

	valueChanged(event: Event) {
		this.state.changePokemon((event.target as HTMLSelectElement).value);
	}
}
