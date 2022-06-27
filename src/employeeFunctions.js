const inquirer = require('inquirer');
const { Manager, Engineer, Intern } = require('../lib/employees');
const createFiles = require('./createFiles');

// initialize empty employees array
const employees = [];
// empty project variable so we don't have to keep passing it around
let project;

// questions used for multiple employee types
const employeeQuestions = [
    {
        type: 'input',
        message: 'Enter the name of the employee:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter their employee ID:',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Enter their email address:',
        name: 'email'
    },
];

// first ask for project name and manager's info, then start adding more employees
function createProjectTeam() {
    // prompt for the manager's info
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What\'s your project\'s name?',
                name: 'project'
            },
            {
                type: 'input',
                message: 'Enter the name of the project manager:',
                name: 'name',
            },
            ...employeeQuestions.slice(1),
            {
                type: 'input',
                message: 'Enter their office:',
                name: 'office'
            },
        ])
        // after getting manager's info, push them to the employees array as a new Manager object and then start the cycle of addEmployee
        .then(res => {
            project = res.project;
            employees.push(new Manager(res.name, res.id, res.email, res.office));
            addEmployees();
        }
    );
};

// recursively adds employees to the employees array using inquirer prompts
function addEmployees() {
    // first prompt asking if we want to add any more employees
    inquirer
        .prompt([
            {
                type: 'confirm',
                message: 'Would you like to add any more employees?',
                name: 'continue'
            },
        ])
        // if the user wants to add an employee, do so, otherwise create the files
        .then(res => res.continue ? addAnEmployee() : createFiles(employees, project));
};

// ask what kind of employee and then ask generic questions about the employee
async function addAnEmployee() {
    const inq = await inquirer.prompt([
        {
            type: 'list',
            message: 'What kind of employee?',
            name: 'type',
            choices: ['Engineer', 'Intern']
        },
        ...employeeQuestions]
    );
    // with our answers, pick the employee type to add, then start the cycle over
    await pickEmployee(inq);
    addEmployees();
};

// prompt user to pick what kind of employee, then run another function with that info and prior info
async function pickEmployee(employee) {
    switch(employee.type) {
        // if it's an engineer, call function to add engineer, feeding in generic data we've gathered so far
        case 'Engineer': {
            await addEngineer(employee.name, employee.id, employee.email);
            break;
        }
        // if it's an intern, call function to add intern, feeding in generic data we've gathered so far
        case 'Intern': {
            await addIntern(employee.name, employee.id, employee.email);
            break;
        }
    };
};

// with given info, ask for engineer-specific information, then push a new Engineer to our employees array
async function addEngineer(name, id, email) {
    // ask for their github
    const inq = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is their GitHub?',
            name: 'github'
        },
    ]);
    employees.push(new Engineer(name, id, email, inq.github));
};

// with given info, ask for intern-specific information, then push a new Intern to our employees array
async function addIntern(name, id, email) {
    // ask for their school
    const inq = await inquirer.prompt([
        {
            type: 'input',
            message: 'What school did they attend?',
            name: 'school'
        },
    ]);
    // push a new Intern to the employees array
    employees.push(new Intern(name, id, email, inq.school));
};

module.exports = {
    createProjectTeam,
    addIntern,
    addEngineer,
    pickEmployee,
    addAnEmployee,
    addEmployees,
    employeeQuestions,
    employees
};