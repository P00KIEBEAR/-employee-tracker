const mysql = require("mysql2/promise");
const connect = require("./connection");
const questions = require('./lib/Question');
const logo = require("./logo");


const run = async () => {
  let connection;
  try {
    connection = await connect();
    await logo();
    await questions(connection);
  } catch (err) {
    console.error(err)
  } finally {
    if (connection)
      connection.end();
  }

};


run();