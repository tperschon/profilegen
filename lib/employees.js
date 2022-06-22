const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email, 'Manager');
        this.office = office;
        this.icon = '<i class="fa-solid fa-mug-hot"></i>';
    };
};

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, 'Engineer');
        this.github = github;
        this.icon = '<i class="fa-solid fa-glasses"></i>';
    };
};

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, 'Intern');
        this.school = school;
        this.icon = '<i class="fa-solid fa-user-graduate"></i>';
    };
};

module.exports = {Manager, Engineer, Intern};