import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/shared/services/state/state.service';

@Component({
	selector: 'app-share-raid',
	templateUrl: './share-raid.component.html',
})
export class ShareRaidComponent implements OnInit {
	constructor(private stateService: StateService) {}

	private raidTier = '';
	private pokemonList = '';
	private teraTypeValue = '';
	private teraTypeName = '';

	public ngOnInit(): void {
		this.stateService.raidTier.subscribe((result) => {
			this.raidTier = result;
		});
		this.stateService.pokemonList.subscribe((result) => {
			this.pokemonList = result;
		});
		this.stateService.teraTypeValue.subscribe((result) => {
			this.teraTypeValue = result;
		});
		this.stateService.teraTypeName.subscribe((result) => {
			this.teraTypeName = result;
		});
	}

	public shareRaid(): void {
		let url: string = location.origin + '/tera-raid-info/';

		url += this.raidTier;
		url += '/' + this.pokemonList;
		url += '/' + this.teraTypeName;

		navigator.clipboard.writeText(url);

		const div = document.getElementById('shareText') as HTMLDivElement;
		div.innerText = 'Copied to Clipboard';
	}

	public shareRaidMouseOut(): void {
		const div = document.getElementById('shareText') as HTMLDivElement;
		div.innerText = 'Share Raid';
	}
}
