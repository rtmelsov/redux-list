import { Formatter } from '../../src/utils/Formatter';

describe('Formatter', () => {
    it('should return correct amount value', () => {
        const result = Formatter(1234.56);
        expect(result).toBe('$1,234.56'); // Example expected output, adjust if necessary
    });
});
