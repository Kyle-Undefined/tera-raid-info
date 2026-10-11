import {
	Component,
	computed,
	ElementRef,
	inject,
	viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StateService } from 'src/shared/services/state/state.service';
import { raidsFor } from 'src/shared/services/raid-data/raid-data.service';
@Component({
	selector: 'app-pokemon-list',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent {
	readonly state = inject(StateService);
	readonly select = viewChild<ElementRef<HTMLSelectElement>>('select');
	readonly options = computed(() =>
		raidsFor(this.state.selection().tier, this.state.selection().region).map(
			(raid) => raid.name
		)
	);
	valueChanged(value = this.select()?.nativeElement.value ?? ''): void {
		this.state.changePokemon(value);
	}
}
