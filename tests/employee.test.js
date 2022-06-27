const Employee = require('../lib/employee');

// Employee test
describe('Employee', () => {
    // Initialization tests
    describe('Initialization', () => {
        // zero parameter test
        it('should create an employee object with \'name\', \'id\', \'email\', \'position\' properties', () => {
            // declare a new Employee object
            const employee = new Employee();
            // test the object has expected key-value pairs
            expect(employee).toEqual(
                {
                    name:undefined,
                    id:undefined,
                    email:undefined,
                    position:'Unassigned',
                }
            );
        });
        // test with parameters given
        it('should create an employee object with defined values', () => {
            // declare a new Employee object
            const manager = new Employee('name', '1234', 'email@example.com', 'Manager');
            // test the object has expected key-value pairs
            expect(manager).toEqual(
                {
                    name:'name',
                    id:'1234',
                    email:'email@example.com',
                    position:'Manager',
                }
            );
        });
        // test that the object is an Employee object
        it('created object should be an instance of Employee', () => {
            // declare a new Employee object
            const manager = new Employee();
            // test that the new Employee object is an instance of Employee
            expect(manager instanceof Employee);
        });
    });
});