const generateStylesheet = require('../src/generateStylesheet');
// tests for generateStylesheet
describe('generateStylesheet', () => {
    // test if it returns a string
    it('it should return a string', () => {
        // create a constant with the value assigned by the function
        const sheet = generateStylesheet();
        // ensure that the constant's value is a string
        expect(typeof sheet).toEqual('string');
    });
});