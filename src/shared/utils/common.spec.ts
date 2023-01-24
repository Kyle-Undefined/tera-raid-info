import { TestBed } from '@angular/core/testing';
import { TypeCalcResult } from '../services/type-calc/type-calc.service';
import * as common from './common';

describe('common', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({});
	});

	it('should capitalize the word', () => {
		let word = 'hello';
		expect(word).toBe('hello');
		word = common.capitalize(word);
		expect(word).toBe('Hello');
	});

	it('should update div innerHTML', () => {
		const div: HTMLDivElement = document.createElement(
			'testing'
		) as HTMLDivElement;
		div.innerHTML = 'Hello';
		common.updateDiv(div, ', world!');
		expect(div.innerHTML).toBe('Hello, world!');
	});

	it('should create type matchup div', () => {
		const result: TypeCalcResult = { name: 'ghost', multiplier: 2 };
		const div = common.createTypeMatchupDiv(result);
		expect(div).toBe('<div class="typeMatchupText ghost">Ghost - 2x</div>');
	});

	it('should pad a number with 0 and return a string', () => {
		const number = 3;
		const padded = common.padLeft(number, 3, '0');
		expect(padded).toBe('003');
	});
});
