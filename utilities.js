import chalk from 'chalk';
import random from './db/random.json';
import rate from './db/rate.json';

export const randomAnswer = () => { return random[Math.floor(Math.random() * random.length)] }

export const rateAnswer = () => { return rate[Math.floor(Math.random() * rate.length)] }

export const logIn = (username, firstName, chatTitle) => {
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