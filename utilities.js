const chalk = require('chalk');
const random = require('./db/random.json');
const rate = require('./db/rate.json');
var exports = module.exports = {};

exports.randomAnswer = () => { return random[Math.floor(Math.random() * random.length)] }

exports.rateAnswer = () => { return rate[Math.floor(Math.random() * rate.length)] }

exports.logIn = (username, firstName, chatTitle) => {
  let date = new Date();
  let mins = date.getMinutes();
  let hours = date.getHours();
  mins < 10 ? (mins = '0' + mins.toString()) : null;
  hours < 10 ? (hours = '0' + hours.toString()) : null;
  console.log(
    `   ${chalk.blue(`${hours}:${mins}`)} ${chalk.green(
      `Sent answer`
    )} to ${chalk.green(`@${username} (${firstName})`)} in ${chalk.green(
      chatTitle
    )} !`
  );
};