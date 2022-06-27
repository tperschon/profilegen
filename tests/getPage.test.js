const getPage = require('../src/getPage');
const { Manager } = require('../lib/employees');
// getPage tests
describe('getPage', () => {
    // ensure that getPage returns a string
    it('given an array of employees, it should return a string', () => {
        // declare a constant with a value returned by the getPage function
        const page = getPage([]);
        // test to see if page's value is a string
        expect(typeof page).toEqual('string');
    });
    // ensure that getPage's length is longer than the base when at least one object is given within the array
    it('when given at least one valid object, length of string should be greater than 393', () => {
        // declare a constant with a value returned by the getPage function given at least one Object within the array
        const page = getPage([new Manager()]);
        // test to see that page's length is greater than 393, with 393 being what we'd get if we passed in nothing
        expect(page.length).toBeGreaterThan(393);
    });
});