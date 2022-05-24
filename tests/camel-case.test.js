import {toCamelCase} from '../src/camel-case.js';

describe('to camel case', () => {
    it('returns empty string', () => {
       expect(toCamelCase('')).toBe('');
    });

    it('converts snake_case to camelCase', () => {
        expect(toCamelCase('example_number_one')).toBe('exampleNumberOne');
    });

    it('converts kebob-case to PascalCase', () => {
        expect(toCamelCase('Example-Number-Two')).toBe('ExampleNumberTwo');
    });

    it('converts snake_case to PascalCase', () => {
        expect(toCamelCase('A-B-C')).toBe('ABC');
    });
});
