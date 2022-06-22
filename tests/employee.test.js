const Employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should create an employee object with \'name\', \'id\', \'email\', \'position\' properties', () => {
            const employee = new Employee();

            expect(employee).toEqual(
                {
                    name:undefined,
                    id:undefined,
                    email:undefined,
                    position:'Unassigned',
                }
            );
        });

        it('should create an employee object with defined values', () => {
            const manager = new Employee('name', '1234', 'email@example.com', 'Manager');

            expect(manager).toEqual(
                {
                    name:'name',
                    id:'1234',
                    email:'email@example.com',
                    position:'Manager',
                }
            );
        });

        it('created object should be an instance of Employee', () => {
            const manager = new Employee();

            expect(manager instanceof Employee);
        });
    })
})