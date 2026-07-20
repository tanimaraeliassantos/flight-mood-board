import { expect } from 'chai';
import { filterDestinations } from '../src/utils/destinations.js';

const mockDestinations = [
	{ id: 1, name: 'Test Paris', mood: 'culture' },
	{ id: 2, name: 'Test Hawaii', mood: 'relax' },
	{ id: 3, name: 'Test Swiss', mood: 'adventure' },
];

describe('Destination Filtering Utility', () => {
	it('should return all destinations when mood is "all"', () => {
		const result = filterDestinations(mockDestinations, 'all');
		expect(result).to.have.lengthOf(3);
	});

	it('should filter correctly based on selected mood', () => {
		const result = filterDestinations(mockDestinations, 'relax');
		expect(result).to.have.lengthOf(1);
		expect(result[0].name).to.equal('Test Hawaii');
	});

	it('should handle empty or undefined inputs gracefully by returning everything', () => {
		const result = filterDestinations(mockDestinations, null);
		expect(result).to.have.lengthOf(3);
	});
});
