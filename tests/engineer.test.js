const Engineer = require('../lib/Engineer');

// write a test that checks for existence of name, id, email, github)

test('creates an engineer object', () => {
    const engineer = new Engineer('Rachel', 345, 'rachel@rachel.com', 'github address');

    expect(engineer.name).toBe('Rachel');
    expect(engineer.id).toBe(345);
    expect(engineer.email).toBe('rachel@rachel.com');
    expect(engineer.github).toBe('github address');
    
});