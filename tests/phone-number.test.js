import {createPhoneNumber, createPhoneNumberSolution} from '../src/phone-number';

describe('phone number', () => {
    it('should return numbers in phone format', () => {
        expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
            .toBe('(123) 456-7890');
    });
});

describe('phone number solution', () => {
    it('should return numbers in phone format', () => {
        expect(createPhoneNumberSolution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
            .toBe('(123) 456-7890');
    });
});