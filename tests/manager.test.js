const Manager = require('../lib/manager');

// write a test that checks for existence of name, id, email, officeNumber)

test('creates an manager object', () => {
    const manager = new Manager('Rachel', 345, 'rachel@rachel.com', '623-555-1234');

    expect(manager.name).toBe('Rachel');
    expect(manager.id).toBe(345);
    expect(manager.email).toBe('rachel@rachel.com');
    expect(manager.officeNumber).toBe('623-555-1234');
    
});