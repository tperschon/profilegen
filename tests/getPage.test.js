const getPage = require('../src/getPage');
const { Manager, Engineer, Intern } = require('../lib/employees');

describe('getPage', () => {
    it('given an array of employees, it should return a string', () => {
        const page = getPage([new Manager(), new Engineer(), new Intern()]);

        expect(typeof page).toEqual('string');
    });

    it('when given at least one valid object, length of string should be greater than 393', () => {
        const page = getPage([new Manager()]);

        expect(page.length).toBeGreaterThan(393);
    });
});