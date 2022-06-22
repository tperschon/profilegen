const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email, 'Manager');
        this.office = office;
    }
}

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, 'Engineer');
        this.github = github;
    }
}

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, 'Intern');
        this.school = school;
    }
}

const guy = new Intern('Bob', 2701, 'guy@guy.guy', 'aschool')
console.log(guy)
module.exports = Manager, Engineer, Intern;