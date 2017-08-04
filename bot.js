const TelegramBot = require('node-telegram-bot-api');
const spotify = require('spotify-node-applescript');
const chalk = require('chalk');
const token = require('./token.json');
const db = require('./db.json');
const bot = new TelegramBot(token, { polling: true });

console.log(chalk.blue('Bot works !'));

bot.on('message', msg => {
  if ('text' in msg || 'caption' in msg) {
    let text;
    typeof msg.caption === 'undefined'
      ? (text = msg.text.toLowerCase())
      : (text = msg.caption.toLowerCase());
    if (
      (text.search('рейт') != -1 && !(text.search('rate') != -1)) ||
      (!(text.search('рейт') != -1) && text.search('rate') != -1)
    ) {
      let rating = db[Math.floor(Math.random() * db.length)];
      bot.sendMessage(msg.chat.id, '`' + rating + '`', {
        parse_mode: 'Markdown',
        reply_to_message_id: msg.message_id
      });
      console.log(
        chalk.green('   Sent answer') +
          ' to ' +
          chalk.green(
            '@' + msg.from.username + ' (' + msg.from.first_name + ')'
          ) +
          ' in ' +
          chalk.green(msg.chat.title) +
          ' !'
      );
    }
  }
});

bot.onText(/\/np/, msg => {
  spotify.getState(function(err, state) {
    let now = state.position;
    let sas =
      Math.floor(Number(now) % 3600 / 60) +
      ':' +
      Math.floor(Number(now) % 3600 % 60);
    console.log(sas);
    return sas;
  });

  spotify.getTrack(function(err, track) {
    function secondsToHms(d) {
      return (
        Math.floor(Number(d) / 1000 % 3600 / 60) +
        ':' +
        Math.floor(Number(d) / 1000 % 3600 % 60)
      );
    }

    bot.sendMessage(
      msg.chat.id,
      '`' +
        '🎵 ' +
        track.artist +
        ' — ' +
        track.name +
        '\n' +
        secondsToHms(track.duration) +
        '`',
      { parse_mode: 'Markdown', reply_to_message_id: msg.message_id }
    );
  });
  console.log(
    chalk.green('   Sent answer') +
      ' to ' +
      chalk.green('@' + msg.from.username + ' (' + msg.from.first_name + ')') +
      ' in ' +
      chalk.green(msg.chat.title) +
      ' !'
  );
});
