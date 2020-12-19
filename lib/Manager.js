const Employee = require('./Employee.js');

class Manager extends Employee {
  constructor(name, id, email, department) {
    // from parent class
    super(name, id, email, department);
  }

  getDepartment() {
    return this.department
  }

}

module.exports = Manager;