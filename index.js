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

// map information from array & send it to HTML
function createDirectory (){

    var htmlCards = '';   
    const employeeCards = teamMembers.map(function(data) {
        console.log(data.getRole());
        switch(data.getRole()) {
            case 'Manager':
               return `<!DOCTYPE html>
               <html lang = "en">
                   <head>
                       <meta charset="utf-8">
                       <meta http-equiv="X-UA-Compatible" content="IE=edge">
                       <title>Team Generator</title>
                       <meta name="viewport" content="width=device-width, initial-scale=1">
                       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">
                       
                   </head>
               <div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 id = "card-title" class="card-title"> ${data.getName()} </h5>
                <p id = "card-text" class="card-text"> ID: ${data.getId()} <br/> 
                 Email: <a href = emailto:${data.getEmail()}>${data.getEmail()}</a><br/>
                 Office Number: ${data.getOfficeNumber()}</p>
                </div>
                </div>`
                break;
            case 'Engineer':
                return `<div class="card" style="width: 18rem;">
                 <div class="card-body">
                 <h5 id = "card-title" class="card-title"> ${data.getName()} </h5>
                 <p id = "card-text" class="card-text"> ID: ${data.getId()} <br/> 
                  Email: <a href = emailto:${data.getEmail()}>${data.getEmail()}</a><br/>
                  Github: <a href = https://github.com/${data.getGithub()}>${data.getGithub()}</a></p>
                 </div>
                 </div>` 
                 break;
            case 'Intern':
                return `<div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 id = "card-title" class="card-title"> ${data.getName()} </h5>
                <p id = "card-text" class="card-text"> ID: ${data.getId()} <br/> 
                Email: <a href = emailto:${data.getEmail()}>${data.getEmail()}</a><br/>
                School: ${data.getSchool()}</p>
                </div>
                </div>`
                           
            
        }
        return 
      });
    console.log(employeeCards) 
    
    for (let i = 0; i < employeeCards.length; i++) {
        htmlCards += employeeCards[i];
       if (i === employeeCards.length - 1) {
           htmlCards += ` </body>
           </html>`
       }
    }
    
    fs.writeFile('./dist/index.html', htmlCards, function (err) {
        if (err) throw err;
        console.log('Team Members Added!');
    });

    function display_array()
    {
        var e = "<hr/>";
        for (var y=0; y<teamMembers.length; y++){
            e += "Element " + y + " = " + teamMembers[y] + "<br/>";
        }
        
    }
    display_array();
    
};

function init() {
    createManager();
};

init ();
