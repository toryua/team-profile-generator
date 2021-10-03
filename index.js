// create parent class for Employee
const Employee = function(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}

// create parent class for Manager, same as Employee but with officeNumber
const Manager = function(name, id, email, officeNumber) {
    this.name = name
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
}

// create parent class for Engineer; same as Employee but with github
const Engineer = function(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
}

// create parent class for Intern; same as Employee but with school
const Intern = function(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
}

// create functions
function getName(name) {

}

// Create an array of questions for user input


