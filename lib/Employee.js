class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

let employee1 = new Employee("Rachel", 345, "email@email.com");

module.exports = Employee