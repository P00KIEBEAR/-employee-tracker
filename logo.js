const figlet = require('figlet');

console.log(figlet.textSync('ALL THE WAY!', {
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 80,
  whitespaceBreak: true
}));
module.exports = figlet;