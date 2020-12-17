const inquirer = require('inquirer');
const Employee = require('./Employee');

const Manager = require('./Manager');
const fs = require('fs');


const Employees = [];

// Create an async function
getEmployees = async () => {
  // create a loop to collect names

  while (true) {

    // wait for the user to give a name
    const Employee = await inquirer.prompt([
      {
        type: 'list',
        name: 'position',
        message: 'What is your title? (Check one)',
        choices: ['Employee', 'Manager'],
      },
      {
        type: 'text',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'text',
        name: 'id',
        message: 'What is your id?'
      },
      {
        type: 'text',
        name: 'email',
        message: 'What is your email?'
      },
      {
        type: 'text',
        name: 'department',
        message: 'What is your department?'
      }
    ]);

    if (Employee.position === 'Manager') {
      then(() => {
        this.Manager = new Manager(Employee.name, Employee.id, Employee.email, Employee.position, Employee.department)
      })

      Employees.push(this.Manager);


    } else {
      then(() => {
        this.Employee = new Employee(Employee.name, Employee.id, Employee.email, Employee.position, Employee.department)
      })

      Employees.push(this.Employee);

    }
    const { more } = await inquirer.prompt([
      {
        name: 'more',
        message: 'Another?',
        type: 'confirm',
      },
    ]);
    if (!more) {
      break;
    }
  }
};
getEmployees()
  .then(() => {
    console.log(Employees)
    //push to table,
    err => {
      if (err) throw err;
    }
  })
