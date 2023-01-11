import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/shared/services/state.service';

@Component({
	selector: 'app-share-raid',
	templateUrl: './share-raid.component.html',
})
export class ShareRaidComponent implements OnInit {
	constructor(private state: StateService) {}

	raidTier = '';
	pokemonList = '';
	teraTypeValue = '';
	teraTypeName = '';

	ngOnInit(): void {
		this.state.raidTier.subscribe((result) => {
			this.raidTier = result;
		});
		this.state.pokemonList.subscribe((result) => {
			this.pokemonList = result;
		});
		this.state.teraTypeValue.subscribe((result) => {
			this.teraTypeValue = result;
		});
		this.state.teraTypeName.subscribe((result) => {
			this.teraTypeName = result;
		});
	}

	shareRaid(): void {
		let url: string = location.origin + '/tera-raid-info/';

		url += this.raidTier;
		url += '/' + this.pokemonList;
		url += '/' + this.teraTypeName;

		navigator.clipboard.writeText(url);

		const div = document.getElementById('shareText') as HTMLDivElement;
		div.innerText = 'Copied to Clipboard';
	}

	shareRaidMouseOut(): void {
		const div = document.getElementById('shareText') as HTMLDivElement;
		div.innerText = 'Share Raid';
	}
}
