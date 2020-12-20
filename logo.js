const figlet = require('figlet');

const logo = async () => {
  console.log(figlet.textSync('ALL THE WAY!', {
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
  }));
}
module.exports = logo;