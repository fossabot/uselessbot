const TelegramBot = require('node-telegram-bot-api');
const spotify = require('spotify-node-applescript');
const chalk = require('chalk');
const token = require('./token.json');
const db = require('./db.json');
const bot = new TelegramBot(token, { polling: true });

console.log(chalk.blue('Bot works !'));

const logInConsole = (username, firstName, chatTitle) => {
  console.log(
    `${chalk.green('   Sent answer')} to ${chalk.green(
      `@${username} (${firstName})`
    )} in ${chalk.green(chatTitle)} !`
  );
};

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
      bot.sendMessage(msg.chat.id, rating, {
        reply_to_message_id: msg.message_id
      });
      logInConsole(msg.from.username, msg.from.first_name, msg.chat.title);
    } else {
      if (text.search('тян') != -1 && Math.random() >= 0.72) {
        bot.sendMessage(msg.chat.id, '*ЭХХХХХХ, КАК ЖЕ ПЛОХО БЕЗ ТЯНОЧКИ*', {
          parse_mode: 'Markdown',
          reply_to_message_id: msg.message_id
        });
        logInConsole(msg.from.username, msg.from.first_name, msg.chat.title);
      }
    }
  }
});

let timenow;

bot.onText(/\/np/, msg => {
  spotify.getState(function(err, state) {
    timenow = state.position;
    let sec = Math.floor(Number(timenow) % 3600 % 60);
    sec < 10 ? (sec = '0' + sec.toString()) : null;
    timenow = Math.floor(Number(timenow) % 3600 / 60) + ':' + sec;
  });

  spotify.getTrack(function(err, track) {
    const secondsToHms = d => {
      let sec = Math.floor(Number(d) / 1000 % 3600 % 60);
      sec < 10 ? (sec = '0' + sec.toString()) : null;
      return Math.floor(Number(d) / 1000 % 3600 / 60) + ':' + sec;
      console.log(track);
    };

    bot.sendPhoto(msg.chat.id, track.artwork_url, {
      caption: `🎵 ${track.artist} — ${track.name} \n💿 ${track.album} \n🕞 ${timenow} of ${secondsToHms(
        track.duration
      )}`
    });
  });
  logInConsole(msg.from.username, msg.from.first_name, msg.chat.title);
});
