import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StateService } from 'src/shared/services/state/state.service';
import { RaidRegion } from 'src/shared/models/raids';
@Component({
	selector: 'app-region',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './region.component.html',
})
export class RegionComponent {
	readonly state = inject(StateService);
	readonly select = viewChild<ElementRef<HTMLSelectElement>>('select');
	readonly options = Object.values(RaidRegion);
	valueChanged(value = this.select()?.nativeElement.value ?? ''): void {
		this.state.changeRegionList(value);
	}
}
