const inquirer = require("inquirer");
const questions = require("./Question");

const deleteEmployee = async (connection) => {
  const [results] = await connection.query('SELECT id, first_name, last_name from employee')
  await inquirer.prompt(
    {
      type: 'list',
      name: 'id',
      message: 'Who would you like to deleteEmployee? (Check one)',
      choices: results.map(({ id, first_name, last_name }) => ({ name: first_name + " " + last_name, value: id })),
    }).then(async (answer) => {
      console.log(answer.change + " " + id.id)
      const changed = await connection.query(
        `DELETE employee SET  WHERE id = ${id.id}`)

    })


  console.log("updating")
  /**/


}
module.exports = deleteEmployee;