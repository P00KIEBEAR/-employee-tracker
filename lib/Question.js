const inquirer = require("inquirer");
const getEmployees = require("./Team");
const update = require("./Update_Employee");
const showEmployees = require("../connection");



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
        {
          const [results] = await connection.query('SELECT * from employee',)
          console.table(results)
          break;
        }
      case "Add a department.":
        console.table(["apples", "oranges", "bananas"]);

        break;
      case "Add a role.":
        console.log("3");

        break;
      case "Add an employee.":
        await getEmployees();

        break;
      case "Update an employee.":
        await update();
        break;
      case "Finish!":
        return;
    }
    return questions(connection);
  })





}

module.exports = questions;