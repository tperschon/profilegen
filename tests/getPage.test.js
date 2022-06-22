const getPage = require('../src/getPage');
const { Manager, Engineer, Intern } = require('../lib/employees');

describe('getPage', () => {
    it('given an array of employees, it should return a string', () => {
        const page = getPage([new Manager(), new Engineer(), new Intern()]);

        expect(typeof page === 'string');
    });
});