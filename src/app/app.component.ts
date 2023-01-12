import { AfterViewInit, Component, OnInit } from '@angular/core';
import { StateService } from 'src/shared/services/state/state.service';
import * as common from 'src/shared/utils/common';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterViewInit {
	constructor(private stateService: StateService) {}

	private raidTier = '';
	private pokemonList = '';
	private teraTypeName = '';
	private title = 'Tera Raid Info';

	public ngOnInit(): void {
		this.stateService.raidTier.subscribe((result) => {
			this.raidTier = result;
		});
		this.stateService.pokemonList.subscribe((result) => {
			this.pokemonList = result;
		});
		this.stateService.teraTypeName.subscribe((result) => {
			this.teraTypeName = result;
		});
	}

	public ngAfterViewInit(): void {
		this.autoPopulateSelections();
	}

	private autoPopulateSelections(): void {
		if (location.href.replace(location.origin + '/tera-raid-info/', '')) {
			const build = location.href
				.replace(location.origin + '/tera-raid-info/', '')
				.split('/');
			const event = new Event('change');

			if (Number(build[0])) {
				const raidTier = document.getElementById(
					'raidTier'
				) as HTMLSelectElement;

				raidTier.value = build[0];
				raidTier.dispatchEvent(event);
			}

			if (build[1]) {
				let name: string = common.capitalize(
					build[1].replaceAll('%20', ' ').toLowerCase()
				);
				const replacement = name.match(/(\(.*\))/);

				if (replacement) {
					const words = replacement[0].split(' ');

					for (let i = 0; i < words.length; i++) {
						name = name.replaceAll(words[i], common.capitalize(words[i]));
					}
				}

				const pokemonList = document.getElementById(
					'pokemonList'
				) as HTMLSelectElement;

				pokemonList.value = name;
				pokemonList.dispatchEvent(event);
			}

			if (build[2]) {
				const teraList = document.getElementById(
					'teraList'
				) as HTMLSelectElement;

				for (let i = 0; i < teraList.length; i++) {
					const tera = teraList[i] as HTMLOptionElement;

					if (tera.text == build[2]) {
						teraList.selectedIndex = tera.index;
					}
				}

				teraList.dispatchEvent(event);
			}
		}
	}
}
