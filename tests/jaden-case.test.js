import {jadenCase} from '../src/jaden-case';

describe('jaden case', () => {
    it('returns expected tweet', () => {
        expect(jadenCase("How can mirrors be real if our eyes aren't real"))
            .toBe("How Can Mirrors Be Real If Our Eyes Aren't Real");
    });

    it('returns expected tweet', () => {
        const str = "How can mirrors be real if our eyes aren't real";
        expect(str.toJadenCase()).toBe("How Can Mirrors Be Real If Our Eyes Aren't Real");
    });
});