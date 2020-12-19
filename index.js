//const connection = require("./connection");

const figlet = require("./logo");
const getEmployees = require("./lib/Team");

const run = async () => {
  await figlet(),
    await getEmployees();

};

run()