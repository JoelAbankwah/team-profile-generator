const Engineer = require('../lib/Engineer');

test('creates an engineer object off of the Employee parent object', () => {
    const engineer = new Engineer('Alec', 2, 'Alec123@github.com');
    
    expect(engineer.github).toBe('Alec123@github.com');
});

test('gets an employees role', () => {
    const engineer = new Engineer('Alec', 2, 'Alec123@github.com');

    expect(engineer.getRole()).toEqual('Engineer')
});

test('gets an engineers github', () => {
    const engineer = new Engineer('Alec', 2, 'Alec123@github.com');

    expect(engineer.getGithub()).toEqual('Alec123@github.com')
});
