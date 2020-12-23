const inquirer = require('inquirer');
const Employee = require('./Add_Employee');




const Employees = [];

// Create an async function
const getEmployees = async (connection) => {
  const Person = await inquirer.prompt([
    {
      type: 'text',
      name: 'firstName',
      message: 'What is their first name?'
    },
    {
      type: 'text',
      name: 'lastName',
      message: 'What is their last name?'
    },
    {
      type: 'text',
      name: 'id',
      message: 'What is your role id?'
    },
    {
      type: 'text',
      name: 'manager',
      message: 'What is your manager id?'
    }
  ]);

  await connection.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id)VALUES("${Person.firstName}", "${Person.lastName}", ${Person.id}, ${Person.manager})`,)
  console.log('Employee added');
  this.Person = new Employee(Person.firstName, Person.id, Person.position, Person.manager)
  Employees.push(this.Employee);
};



//push to table,




module.exports = getEmployees;