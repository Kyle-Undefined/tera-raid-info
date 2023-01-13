import { TestBed } from '@angular/core/testing';

import { TypeCalcService } from './type-calc.service';

describe('TypeCalcService', () => {
	let service: TypeCalcService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(TypeCalcService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
