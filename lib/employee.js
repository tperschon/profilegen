// all employees regardless of position have a name, id, email and icon, icon depending on their position
class Employee {
    constructor(name, id, email, position = 'Unassigned') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.position = position;
    };
};

module.exports = Employee;