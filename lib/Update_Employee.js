const inquirer = require("inquirer")
const questions = require("./Question")

const update = async (connection) => {
  const [results] = await connection.query('SELECT id, first_name, last_name from employee')
  await inquirer.prompt(
    {
      type: 'list',
      name: 'id',
      message: 'Who would you like to update? (Check one)',
      choices: results.map(({ id, first_name, last_name }) => ({ name: first_name + " " + last_name, value: id })),
    }).then(async (id) => {
      const [results] = await connection.query(`SELECT * FROM employee  WHERE id = ${id.id}`)
      await inquirer.prompt([
        {

          type: 'list',
          name: 'choice',
          message: 'What would you like to update? (Check one)',
          choices: [results[0].first_name, results[0].last_name, results[0].role_id, results[0].manager_id],
        }, {
          type: 'input',
          name: 'change',
          message: 'What should it be?'
        }])

        .then(async (answer) => {
          console.log(answer.change + " " + id.id)
          const changed = await connection.query(
            `UPDATE employee SET first_name = "${answer.change}" WHERE id = ${id.id}`)

        })


      console.log("updating")
      /**/
    })

}
module.exports = update;