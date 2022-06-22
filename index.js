// import dependencies
const { Manager, Engineer, Intern } = require('./lib/employees.js');
const generatePage = require('./src/generatePage');
const generateStylesheet = require('./src/generateStylesheet');
const inquirer = require('inquirer');
const fs = require('fs');

// initialize empty employees array
let employees = [];
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
// prompt for the manager's info
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What\'s your project\'s name?',
            name: 'project'
        },
        ...employeeQuestions,
        {
            type: 'input',
            message: 'Enter their office:',
            name: 'office'
        }
    ]).then(res => {
        employees.push(new Manager(res.name, res.id, res.email, res.office));
        addEmployee(res.project);
    }
)

function addEmployee(project) {
    inquirer.prompt([
        {
            type: 'confirm',
            message: 'Would you like to add any more employees?',
            name: 'continue'
        }
    ]).then(res => {
        if (res.continue) {
            inquirer.prompt([
                {
                    type: 'list',
                    message: 'What kind of employee?',
                    name: 'type',
                    choices: ['Engineer', 'Intern']
                },
                ...employeeQuestions]
            ).then(res => {
                let { name, id, email } = res;
                switch (res.type) {
                    case 'Engineer': {
                        inquirer.prompt([
                            {
                                type: 'input',
                                message: 'What is their GitHub?',
                                name: 'github'
                            }
                        ]).then(res => {
                            employees.push(new Engineer(name, id, email, res.github));
                            addEmployee(project);
                            return;
                        }).then(() => {
                            return;
                        })
                        break;
                    }
                    case 'Intern': {
                        inquirer.prompt([
                            {
                                type: 'input',
                                message: 'What school did they attend?',
                                name: 'school'
                            }
                        ]).then(res => {
                            employees.push(new Intern(name, id, email, res.school));
                            addEmployee(project);
                        }).then(() => {
                            return;
                        })
                        break;
                    }
                }
            })
        }
        else {
            fs.mkdirSync(`./dist/${project}`);
            generateStylesheet(project);
            generatePage.writePage(employees, project);
        }
    })
}
