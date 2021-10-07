// TODO: Include packages needed for this application
const inquirer = require('inquirer');
let fs = require('fs');
let path = require('path');
const teamMembers = [];

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
        //console.log(data);
        
        const engineer = new Engineer(data.engineerName, data.id, data.email, data.github);
        teamMembers.push(engineer);
        console.log(teamMembers);
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
        //console.log(data);
        
        const intern = new Intern(data.internName, data.id, data.email, data.school);
        teamMembers.push(intern);
        console.log(teamMembers);
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
        //console.log(data);
        const manager = new Manager(data.managerName, data.id, data.email, data.officeNumber);
        teamMembers.push(manager);
        console.log(teamMembers);
        startStop();
    })
     
}

// create a function that will enter all team members and will stop when user picks "exit"
    function startStop() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'startStop',
                message: 'Would you like to enter another team member?',
                choices: ['Intern', 'Engineer', 'Exit']
            }
        ]) .then(data => {
            if (data.choices === 'Intern') {
                createIntern();
            } else if (data.choices === 'Engineer') {
                createEngineer();
            } else {
                createDirectory();
            }
        })
    }
// fs.appendFile('./employeeDirectory.txt', teamMembers, function (err) {
//       if (err) throw err;
//       console.log('Saved!');
//     });
  

// Create an array of questions for user input to determine role

const question1 = [
    {       type: 'list',
            name: 'managerQuestion',
            message: 'Are you ready to enter the manager information?',
            choices: ['Yes', 'No']
    },   
]    

// map information from array
function createDirectory (){
    teamMembers.map(function() {
    return '<li>' + userRole + '<li>'
}).join('')
};

function init() {
    createManager();
    // startStop();
    // inquirer.prompt(question1)
    // .then (data => {
    //     if (data.managerQuestion === 'Yes') {
    //         createManager();
        // } 
        // if (data.managerQuestion === 'No') {
        //     inquirer.prompt(question2)
        //     .then (data => { 
        //         if (data.userRole === 'Engineer') {
        //         createEngineer();
        //         } else if (data.userRole === 'Intern') {
        //         createIntern();
         
        // }
        //     })            
    //     }; 
    // })
};



init ();


