let Employee = require('./Employee');
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

Engineer.prototype.getEngineer = function() {
    console.log(this.getRole);
    console.log(this.getName);
    console.log(this.getEmail);
    console.log(this.getId);
    console.log(this.getGithub);
}


module.exports = Engineer