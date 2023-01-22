import { TestBed } from '@angular/core/testing';

import { TypeCalcResult, TypeCalcService } from './type-calc.service';

describe('TypeCalcService', () => {
	let service: TypeCalcService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(TypeCalcService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should calculate Steel Type Advantages', () => {
		const advantages: TypeCalcResult[] = service.advantages('Steel');
		expect(advantages).toHaveSize(3);

		advantages.forEach((type) => {
			expect(type.multiplier).toEqual(2);
		});

		expect(advantages[0].name).toEqual('fairy');
		expect(advantages[1].name).toEqual('ice');
		expect(advantages[2].name).toEqual('rock');
	});

	it('should calculate Steel Type Advantages with non effectives', () => {
		const advantages: TypeCalcResult[] = service.advantages('Steel', true);
		expect(advantages).toHaveSize(7);

		expect(advantages[0].name).toEqual('fairy');
		expect(advantages[0].multiplier).toEqual(2);
		expect(advantages[1].name).toEqual('ice');
		expect(advantages[1].multiplier).toEqual(2);
		expect(advantages[2].name).toEqual('rock');
		expect(advantages[2].multiplier).toEqual(2);

		expect(advantages[3].name).toEqual('electric');
		expect(advantages[3].multiplier).toEqual(0.5);
		expect(advantages[4].name).toEqual('fire');
		expect(advantages[4].multiplier).toEqual(0.5);
		expect(advantages[5].name).toEqual('steel');
		expect(advantages[5].multiplier).toEqual(0.5);
		expect(advantages[6].name).toEqual('water');
		expect(advantages[6].multiplier).toEqual(0.5);
	});

	it('should calculate Steel Type Weaknesses', () => {
		const weaknesses: TypeCalcResult[] = service.weaknesses('Steel');
		expect(weaknesses).toHaveSize(14);

		expect(weaknesses[0].name).toEqual('fighting');
		expect(weaknesses[0].multiplier).toEqual(2);
		expect(weaknesses[1].name).toEqual('fire');
		expect(weaknesses[1].multiplier).toEqual(2);
		expect(weaknesses[2].name).toEqual('ground');
		expect(weaknesses[2].multiplier).toEqual(2);

		expect(weaknesses[3].name).toEqual('bug');
		expect(weaknesses[3].multiplier).toEqual(0.5);
		expect(weaknesses[4].name).toEqual('dragon');
		expect(weaknesses[4].multiplier).toEqual(0.5);
		expect(weaknesses[5].name).toEqual('fairy');
		expect(weaknesses[5].multiplier).toEqual(0.5);
		expect(weaknesses[6].name).toEqual('flying');
		expect(weaknesses[6].multiplier).toEqual(0.5);
		expect(weaknesses[7].name).toEqual('grass');
		expect(weaknesses[7].multiplier).toEqual(0.5);
		expect(weaknesses[8].name).toEqual('ice');
		expect(weaknesses[8].multiplier).toEqual(0.5);
		expect(weaknesses[9].name).toEqual('normal');
		expect(weaknesses[9].multiplier).toEqual(0.5);
		expect(weaknesses[10].name).toEqual('psychic');
		expect(weaknesses[10].multiplier).toEqual(0.5);
		expect(weaknesses[11].name).toEqual('rock');
		expect(weaknesses[11].multiplier).toEqual(0.5);
		expect(weaknesses[12].name).toEqual('steel');
		expect(weaknesses[12].multiplier).toEqual(0.5);

		expect(weaknesses[13].name).toEqual('poison');
		expect(weaknesses[13].multiplier).toEqual(0);
	});

	it('should calculate Normal Type Advantages', () => {
		const advantages: TypeCalcResult[] = service.advantages('Normal');
		expect(advantages).toHaveSize(0);
	});

	it('should calculate Normal Type Advantages with non effectives', () => {
		const advantages: TypeCalcResult[] = service.advantages('Normal', true);
		expect(advantages).toHaveSize(3);

		expect(advantages[0].name).toEqual('rock');
		expect(advantages[0].multiplier).toEqual(0.5);
		expect(advantages[1].name).toEqual('steel');
		expect(advantages[1].multiplier).toEqual(0.5);

		expect(advantages[2].name).toEqual('ghost');
		expect(advantages[2].multiplier).toEqual(0);
	});

	it('should calculate Normal Type Weaknesses', () => {
		const weaknesses: TypeCalcResult[] = service.weaknesses('Normal');
		expect(weaknesses).toHaveSize(2);

		expect(weaknesses[0].name).toEqual('fighting');
		expect(weaknesses[0].multiplier).toEqual(2);

		expect(weaknesses[1].name).toEqual('ghost');
		expect(weaknesses[1].multiplier).toEqual(0);
	});
});
