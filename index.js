// import dependencies
const { Manager, Engineer, Intern } = require('./lib/employees.js');
const getPage = require('./src/getPage');
const generateStylesheet = require('./src/generateStylesheet');
const inquirer = require('inquirer');
const fs = require('fs');

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

// ask what kind of employee and then ask generic questions about the employee
function addAnEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What kind of employee?',
            name: 'type',
            choices: ['Engineer', 'Intern']
        },
        ...employeeQuestions]
    )
    // with our answers
    .then(res => {
        // switch statement to decide what to do depending on employee type
        switch (res.type) {
            // if it's an engineer, call function to add engineer, feeding in generic data we've gathered so far
            case 'Engineer': {
                addEngineer(res.name, res.id, res.email);
                break;
            }
            // if it's an intern, call function to add intern, feeding in generic data we've gathered so far
            case 'Intern': {
                addIntern(res.name, res.id, res.email);
                break;
            }
        };
    });
};

// with given info, ask for one more bit of information, then push a new Engineer to our employees array
function addEngineer(name, id, email) {
    // ask for their github
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is their GitHub?',
            name: 'github'
        }
    ])
    // after we get their github 
    .then(res => {
        // push a new Engineer to the employees array
        employees.push(new Engineer(name, id, email, res.github));
        // we're at the end of the chain, start it over
        addEmployees();
    });
};

function addIntern(name, id, email) {
    // intern selected, ask for their school
    inquirer.prompt([
        {
            type: 'input',
            message: 'What school did they attend?',
            name: 'school'
        }
    ])
    // after we get their school
    .then(res => {
        // push a new Intern to the employees array start the function over, passing project back in to preserve its value
        employees.push(new Intern(name, id, email, res.school));
        // we're at the end of the chain, start it over
        addEmployees();
    });
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
            }
        ])
        .then(res => {
            // if the user wants to add an employee, do so, otherwise create files
            res.continue ? addAnEmployee() : createFiles(employees, project);
        });
};

// take in an array of employees and the project name, create files and folders structure
function createFiles(empArray, projName) {
    fs.mkdirSync(`./dist/${projName}/assets/css/`, { recursive: true });
    fs.writeFileSync(`./dist/${projName}/assets/css/style.css`, generateStylesheet(projName));
    fs.writeFileSync(`./dist/${projName}/index.html`, getPage(empArray, projName));
};

// first ask for project name and manager's info, then start adding more employees
function start() {
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
            }
        ])
        // after getting manager's info, push them to the employees array as a new Manager object and then start the cycle of addEmployee
        .then(res => {
            project = res.project;
            employees.push(new Manager(res.name, res.id, res.email, res.office));
            addEmployees();
        }
    );
};

start();