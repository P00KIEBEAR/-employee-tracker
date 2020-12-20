const connect = require("../connection")
const inquirer = require("inquirer")
const questions = require("./Question")

const update = async () => {
  //await inquirer.prompt(
  console.log("updating")
  //)
  /*
    connect.query('UPDATE posts SET ...', function (error, results, fields) {
      if (error) throw error;
      console.log('changed ' + results.changedRows + ' rows');
    })*/
  questions()
}

module.exports = update;