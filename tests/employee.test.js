const { TestWatchtester } = require('@jest/core');
const Employee = require('../lib/Employee');

// write a test that checks for existence of name, id, email)

test('creates an employee object', () => {
    const employee = new Employee('Rachel', 345, 'rachel@rachel.com');

    expect(employee.name).toBe('Rachel');
    expect(employee.id).toBe(345);
    expect(employee.email).toBe('rachel@rachel.com');
    
});