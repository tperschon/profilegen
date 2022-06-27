const { Manager, Engineer, Intern } = require('../lib/employees');

// Manager tests
describe('Manager', () => {
    // initalization tests
    describe('Initialization', () => {
        // zero parameter test
        it("should create a new manager object with 'name', 'id', 'email', 'position', 'icon' and 'office' properties", () => {
            // declare a new Manager object
            const manager = new Manager();
            // test the object has the expected key-value pairs
            expect(manager).toEqual(
                {
                    name:undefined,
                    id:undefined,
                    email:undefined,
                    position:'Manager',
                    icon:'<i class="fa-solid fa-mug-hot"></i>',
                    office:undefined
                }
            );
        });
        // test with parameters given
        it("properties should be defined based upon input", () => {
            // declare a new Manager object
            const manager = new Manager('name', 1234, 'email@example.com', 'office');
            // test the object has the expected key-value pairs
            expect(manager).toEqual(
                {
                    name:'name',
                    id:1234,
                    email:'email@example.com',
                    position:'Manager',
                    icon:'<i class="fa-solid fa-mug-hot"></i>',
                    office:'office'
                }
            );
        });
        // test that the object is a Manager object
        it("created object should be an instance of Manager", () => {
            // declare a new Manager object
            const manager = new Manager();
            // test that the new Manager object is an instance of Manager
            expect(manager instanceof Manager)
        });
    });
});
// Engineer tests
describe('Engineer', () => {
    // initalization tests
    describe('Initialization', () => {
        // zero parameter test
        it("should create a new engineer object with 'name', 'id', 'email', 'position', 'icon' and 'github' properties", () => {
            // declare a new Engineer object
            const engineer = new Engineer();
            // test the object has the expected key-value pairs
            expect(engineer).toEqual(
                {
                    name:undefined,
                    id:undefined,
                    email:undefined,
                    position:'Engineer',
                    icon:'<i class="fa-solid fa-glasses"></i>',
                    github:undefined
                }
            );
        });
        // test with parameters given
        it("properties should be defined based upon input", () => {
            // declare a new Engineer object
            const engineer = new Engineer('name', 1234, 'email@example.com', 'github');
            // test the object has the expected key-value pairs
            expect(engineer).toEqual(
                {
                    name:'name',
                    id:1234,
                    email:'email@example.com',
                    position:'Engineer',
                    icon:'<i class="fa-solid fa-glasses"></i>',
                    github:'github'
                }
            );
        });
        // test that the object is a Engineer object
        it("created object should be an instance of Engineer", () => {
            // declare a new Engineer object
            const engineer = new Engineer();
            // test that the new Engineer object is an instance of Engineer
            expect(engineer instanceof Engineer);
        });
    });
});
// Intern tests
describe('Intern', () => {
    // initalization tests
    describe('Initialization', () => {
        // zero parameter test
        it("should create a new intern object with 'name', 'id', 'email', 'position', 'icon' and 'school' properties", () => {
            // declare a new Intern object
            const intern = new Intern();
            // test the object has the expected key-value pairs
            expect(intern).toEqual(
                {
                    name:undefined,
                    id:undefined,
                    email:undefined,
                    position:'Intern',
                    icon:'<i class="fa-solid fa-user-graduate"></i>',
                    school:undefined
                }
            );
        });
        // test with parameters given
        it("properties should be defined based upon input", () => {
            // declare a new Intern object
            const intern = new Intern('name', 1234, 'email@example.com', 'school');
            // test the object has the expected key-value pairs
            expect(intern).toEqual(
                {
                    name:'name',
                    id:1234,
                    email:'email@example.com',
                    position:'Intern',
                    icon:'<i class="fa-solid fa-user-graduate"></i>',
                    school:'school'
                }
            );
        });
        // test that the object is a Intern object
        it("created object should be an instance of Intern", () => {
            // declare a new Intern object
            const intern = new Intern();
            // test that the new Intern object is an instance of Intern
            expect(intern instanceof Intern);
        });
    });
});