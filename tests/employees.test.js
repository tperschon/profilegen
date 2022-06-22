const { Manager, Engineer, Intern } = require('../lib/employees');

describe('Manager', () => {
    describe('Initialization', () => {
        it("should create a new manager object with 'name', 'id', 'email', 'position', 'icon' and 'office' properties", () => {
            const manager = new Manager();

            expect(manager).toEqual(
                {
                    name:undefined,
                    id:NaN,
                    email:undefined,
                    position:'Manager',
                    icon:'<i class="fa-solid fa-mug-hot"></i>',
                    office:undefined
                }
            );
        });
        
        it("properties should be defined based upon input", () => {
            const manager = new Manager('name', 1234, 'email@example.com', 'office');
            
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
        
        it("created object should be an instance of Manager", () => {
            const manager = new Manager();
            
            expect(manager instanceof Manager)
        });
    });
});

describe('Engineer', () => {
    describe('Initialization', () => {
        it("should create a new engineer object with 'name', 'id', 'email', 'position', 'icon' and 'github' properties", () => {
            const engineer = new Engineer();

            expect(engineer).toEqual(
                {
                    name:undefined,
                    id:NaN,
                    email:undefined,
                    position:'Engineer',
                    icon:'<i class="fa-solid fa-glasses"></i>',
                    github:undefined
                }
            );
        });
        
        it("properties should be defined based upon input", () => {
            const engineer = new Engineer('name', 1234, 'email@example.com', 'github');

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
        
        it("created object should be an instance of Engineer", () => {
            const engineer = new Engineer();

            expect(engineer instanceof Engineer);
        });
    });
});

describe('Intern', () => {
    describe('Initialization', () => {
        it("should create a new intern object with 'name', 'id', 'email', 'position', 'icon' and 'school' properties", () => {
            const intern = new Intern();

            expect(intern).toEqual(
                {
                    name:undefined,
                    id:NaN,
                    email:undefined,
                    position:'Intern',
                    icon:'<i class="fa-solid fa-user-graduate"></i>',
                    school:undefined
                }
            );
        });
        
        it("properties should be defined based upon input", () => {
            const intern = new Intern('name', 1234, 'email@example.com', 'school');

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
        
        it("created object should be an instance of Engineer", () => {
            const intern = new Intern();

            expect(intern instanceof Intern);
        });
    });
});