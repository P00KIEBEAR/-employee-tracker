const inquirer = require("inquirer");
const questions = require("./Question");



const addDepartment = async (connection) => {
  const [results] = await inquirer.prompt({
    message: "What would you like add?",
    name: "answer",
    type: "input",
  }).then(async (results) => {
    await connection.query(`INSERT INTO department(name)VALUES(''${results.answer}'`,)
  })
  console.log("department added")


}
module.exports = addDepartment;