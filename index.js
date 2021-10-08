// TODO: Include packages needed for this application
const inquirer = require('inquirer');
let fs = require('fs');
const http = require('http');
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
        startStop();
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
        startStop();
    })
}

function createManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the managers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers email address?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the managers office phone number?'
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
                name: 'buildTeam',
                message: 'Would you like to enter another team member?',
                choices: ['Intern', 'Engineer', 'Exit']
            }
        ])
           .then(data => {
            if (data.buildTeam === "Intern") {
                createIntern();
            } else if (data.buildTeam === "Engineer") {
                createEngineer();
            } else if (data.buildTeam === "Exit") {
                createDirectory();
            }
        })
    }

// map information from array
function createDirectory (){
   
    let cards = teamMembers.map.forEach(function(element) {
    return ({Manager} + {Engineer} + {Intern})
    }); 
    console.log(cards + ' *****just created before the file is written****');
    fs.writeFile('./employeeDirectory.txt', JSON.stringify(teamMembers), function (err) {
        if (err) throw err;
        console.log('Team Members Added!');
    });
    //document.getElementById("card").innerHTML = teamMembers;
};

function init() {
    createManager();
};



init ();


