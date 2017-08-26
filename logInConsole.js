const chalk = require('chalk');
const timestampConsole = require('./timestampConsole');
module.exports = {
  logInConsole: function(username, firstName, chatTitle) {
    console.log(
      `   ${chalk.blue(timestampConsole.timestampConsole())} ${chalk.green(
        `Sent answer`
      )} to ${chalk.green(`@${username} (${firstName})`)} in ${chalk.green(
        chatTitle
      )} !`
    );
  }
};
