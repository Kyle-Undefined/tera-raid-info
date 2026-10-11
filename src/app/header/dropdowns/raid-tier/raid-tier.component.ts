import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StateService } from 'src/shared/services/state/state.service';

@Component({
	selector: 'app-raid-tier',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './raid-tier.component.html',
})
export class RaidTierComponent {
	readonly state = inject(StateService);
	readonly select = viewChild<ElementRef<HTMLSelectElement>>('select');
	readonly options = ['5', '6'];
	valueChanged(value = this.select()?.nativeElement.value ?? ''): void {
		this.state.changeRaidTier(value);
	}
}
