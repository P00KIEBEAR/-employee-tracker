class Employee {
  constructor(name, id, email, department) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.department = department
  }

  getName() {

    return this.name
  }
  getId() {
    return this.id
  }
  getEmail() {
    return this.email
  }
  getDepartment() {
    return this.department
  }
}


module.exports = Employee