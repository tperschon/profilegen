const generateStylesheet = require('../src/generateStylesheet');

describe('generateStylesheet', () => {
    it('it should return a string', () => {
        const sheet = generateStylesheet();

        expect(typeof sheet).toEqual('string');
    });

    it('string length should be 1481 characters', () => {
        const sheet = generateStylesheet();
        
        expect(sheet.length).toEqual(1481);
    });
});