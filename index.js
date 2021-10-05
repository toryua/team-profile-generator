// TODO: Include packages needed for this application
const inquirer = require('inquirer');
let fs = require('fs');
let path = require('path');

// create parent class for Employee
const Employee = require('./lib/Employee.js');

// create parent class for Manager, same as Employee but with officeNumber
const Manager = require('./lib/Manager.js');

// create parent class for Engineer; same as Employee but with github
const Engineer = require('./lib/Engineer.js');

// create parent class for Intern; same as Employee but with school
const Intern = require('./lib/Intern.js'); 

// create functions for Engineer, Intern, Manager
function createEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is your name?'
    },
    {
            type: 'input',
            name: 'id',
            message: 'What is your ID number?'
    },
    {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
    },
    {
            type: 'input',
            name: 'github',
            message: 'What is your Github address?'
    },
    ])
    .then(data => {
        console.log(data);
    })
}

function createIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is your name?'
    },
    {
            type: 'input',
            name: 'id',
            message: 'What is your ID number?'
    },
    {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
    },
    {
            type: 'input',
            name: 'school',
            message: 'What is your school?'
    },
    ])
    .then(data => {
        console.log(data);
    })
}

function createManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office phone number?'
        },
    ])
    .then(data => {
      console.log(data);
    })
}

// Create an array of questions for user input

const question1 = [
    {       type: 'list',
            name: 'managerQuestion',
            message: 'Are you the manager?',
            choices: ['Yes', 'No']
    },   
]    
const question2 = [    {
            type: 'list',
            name: 'userRole',
            message: 'What is your role in the organization?',
            choices: ['Engineer', 'Intern']
    },
    
]

function init() {
    inquirer.prompt(question1)
    .then (data => {
        if (data.managerQuestion === 'Yes') {
            createManager();
        } 
        if (data.managerQuestion === 'No') {
            inquirer.prompt(question2)
            .then (data => { 
                if (data.userRole === 'Engineer') {
                createEngineer();
                } else if (data.userRole === 'Intern') {
                createIntern();
                }
            })            
        }; 
    })
};


init ();


