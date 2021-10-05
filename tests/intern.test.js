const Intern = require('../lib/intern');

// write a test that checks for existence of name, id, email, school)

test('creates an intern object', () => {
    const intern = new Intern('Rachel', 345, 'rachel@rachel.com', 'school');

    expect(intern.name).toBe('Rachel');
    expect(intern.id).toBe(345);
    expect(intern.email).toBe('rachel@rachel.com');
    expect(intern.school).toBe('school');
    
});