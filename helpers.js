import chalk from 'chalk';
import random from './db/random.json';
import rate from './db/rate.json';

export const randomAnswer = () => random[Math.floor(Math.random() * random.length)];

export const rateAnswer = () => rate[Math.floor(Math.random() * rate.length)];

export const addZero = time => (time < 10 ? `0${time.toString()}` : time);

export const getCurrentTime = () => {
  const date = new Date();
  const seconds = addZero(date.getSeconds());
  const mins = addZero(date.getMinutes());
  const hours = addZero(date.getHours());

  return `${chalk.blue(`${hours}:${mins}:${seconds}`)}`;
};

const sendMessage = (username, firstName, chatTitle = `private messages`, currentTime) =>
  `    ${chalk.blue(`${currentTime}`)} ${chalk.green(`Sent answer`)} to ${chalk.green(`@${username} (${firstName})`)} in ${chalk.green(
    chatTitle
  )}`;

export const log = (username, firstName, chatTitle = `private messages`, currentTime) => {
  console.log(sendMessage(username, firstName, chatTitle, currentTime));
};

export const regExp = /(^бот,)(\s)([\wа-яё].{1,})(или)(\s)([\wа-яё].{1,})([?]{1}$)/im;
