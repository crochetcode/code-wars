import {toCamelCase} from '../src/camel-case.js';

describe('to camel case', () => {
    it('returns empty string', () => {
       expect(toCamelCase('')).toBe('');
    });
})