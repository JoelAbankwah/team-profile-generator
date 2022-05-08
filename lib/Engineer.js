const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, github) {

        super(name, id);

        this.role = 'Engineer';
        this.github = github;
    };

    getRole() {
        return this.role;
    };

    getGithub() {
        return this.github;
    }
};

module.exports = Engineer;