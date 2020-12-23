const inquirer = require("inquirer");
const questions = require("./Question");


const addRole = async (connection) => {
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

}
module.exports = addRole;