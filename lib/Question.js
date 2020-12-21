const inquirer = require("inquirer");
const Employee = require("./Employee");
const getEmployees = require("./Team");
const update = require("./Update_Employee");




const questions = async (connection) => {
  await inquirer.prompt({
    message: "What would you like to do?",
    name: "answer",
    type: "list",
    choices: ["View all department.", "View all roles.", "View all employees.", "Add a department.", "Add a role.", "Add an employee.", "Update an employee.", "Finish!"]
  }).then(async (answer) => {
    //console.log(answer.answer)
    switch (answer.answer) {
      case "View all department.":
        {
          const [results] = await connection.query('SELECT * from department',)
          console.table(results)
          break;
        }
      case "View all roles.":
        {
          const [results] = await connection.query('SELECT * from role',)
          console.table(results)
          break;
        }
      case "View all employees.":
        ;
        {
          const [results] = await connection.query(' SELECT employee.id, employee.first_name, employee.last_name, role.tilte, role.salary FROM employee RIGHT JOIN role ON employee.role_id = role.id',)
          console.table(results)
          break;
        }
      case "Add a department.":
        await inquirer.prompt({
          message: "What would you like add?",
          name: "answer",
          type: "input",
        })
        console.log("department added")
        break;
      case "Add a role.":
        const answer = await inquirer.prompt([{
          message: "What would you like add?",
          name: "tilte",
          type: "input",
        },
        {
          message: "What is the the salary?",
          name: "salary",
          type: "input",
        },
        {
          message: "What is the department id?",
          name: "id",
          type: "input",
        }]).then(async (answer) => {
          await connection.query(`INSERT INTO role(tilte, salary, department_id)VALUES('${answer.tilte}', ${answer.salary}, ${answer.id})`,)
        })
        console.log('role added')
        break;
      case "Add an employee.":
        await getEmployees(connection);

        break;
      case "Update an employee.":
        await update(connection);
        break;
      case "Finish!":
        return;
    }
    return questions(connection);
  })





}

module.exports = questions;