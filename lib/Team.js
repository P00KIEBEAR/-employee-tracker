const inquirer = require('inquirer');
const Employee = require('./Employee');
const Manager = require('./Manager');



const Employees = [];

// Create an async function
getEmployees = async () => {

  // wait for the user to give a name
  const Person = await inquirer.prompt([
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

  if (Person.position === 'Manager') {
    then(() => {
      this.Manager = new Manager(Person.name, Person.id, Person.email, Person.position, Person.department)
    })

    Employees.push(this.Manager);


  } else {
    then(() => {
      this.Person = new Employee(Person.name, Person.id, Person.email, Person.position, Person.department)
    })

    Employees.push(this.Employee);

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


module.exports = getEmployees;