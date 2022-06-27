const createFiles = require('../src/createFiles');
const { Manager, Engineer, Intern } = require('../lib/employees');
const fs = require('fs');
const getPage = require('../src/getPage');

// mock fs so we don't actually write files
jest.mock('fs');

describe('createFiles',() => { 
    it('Should call mkdirSync and writeFileSync', () => {
        // build array to test with
        const testEmployees = [
            new Manager('Man', '123', 'email', 'office'),
            new Engineer('Eng', '456', 'email', 'github'),
            new Intern('Int', '789', 'email', 'school') ];
        // test name value
        const name = 'test';
        // call function
        createFiles(testEmployees, name);
        // check that the functionality used by our function was last called with the values we expect
        expect(fs.mkdirSync).lastCalledWith(`./dist/${name}/assets/css/`, { recursive: true });
        expect(fs.writeFileSync).lastCalledWith(`./dist/${name}/index.html`, getPage(testEmployees, name));
    });
});