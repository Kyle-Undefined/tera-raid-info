import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StateService } from 'src/shared/services/state/state.service';
import { Types } from 'src/shared/models/types';
@Component({
	selector: 'app-tera-type',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './tera-type.component.html',
})
export class TeraTypeComponent {
	readonly state = inject(StateService);
	readonly select = viewChild<ElementRef<HTMLSelectElement>>('select');
	readonly options = Types.map((type) => type.name);
	valueChanged(value = this.select()?.nativeElement.value ?? ''): void {
		this.state.changeTeraType(value);
	}
}
