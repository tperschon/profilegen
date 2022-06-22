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
        employees.push(new Manager(res.name, res.id, res.email, res.office));
        addEmployee(res.project);
    }
);

// recursively adds employees to the employees array using inquirer prompts
function addEmployee(project) {
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
            // if the user wants to add more employees
            if (res.continue) {
                // ask what kind of employee and then ask generic questions about the employee
                inquirer.prompt([
                    {
                        type: 'list',
                        message: 'What kind of employee?',
                        name: 'type',
                        choices: ['Engineer', 'Intern']
                    },
                    ...employeeQuestions]
                ).then(res => {
                    // retrieve given answers and store them in variables
                    let { name, id, email } = res;
                    // switch statement to decide what to do depending on employee type
                    switch (res.type) {
                        case 'Engineer': {
                            // engineer selected, ask for their github
                            inquirer.prompt([
                                {
                                    type: 'input',
                                    message: 'What is their GitHub?',
                                    name: 'github'
                                }
                            ])
                            // after we get their github 
                            .then(res => {
                                //push a new Engineer to the employees array and start the function over, passing project back in so we preserve its value
                                employees.push(new Engineer(name, id, email, res.github));
                                addEmployee(project);
                            })
                            break;
                        }
                        case 'Intern': {
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
                                addEmployee(project);
                            })
                            break;
                        }
                    }
                })
            }
            else {
                // if the user answers no, we create the full path we need and write the files
                fs.mkdirSync(`./dist/${project}/assets/css/`, { recursive: true })
                fs.writeFileSync(`./dist/${project}/assets/css/style.css`, generateStylesheet(project));
                fs.writeFileSync(`./dist/${project}/index.html`, generatePage.getPage(employees, project));
            }
        })
}