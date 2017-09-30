const Telegraf = require('telegraf');
const chalk = require('chalk');
const { Extra, Markup } = Telegraf;
const config = require('./config');
const utilities = require('./utilities');
const bot = new Telegraf(config.telegraf_token);

console.log(chalk.blue(`   Bot started!
`));

bot.hears(/(рейт)|(rate)/i, ctx => {
  ctx.reply(utilities.rateAnswer(), {
    reply_to_message_id: ctx.message.message_id
  });
  utilities.logIn(ctx.message.from.username, ctx.message.from.first_name, ctx.message.chat.title);
});

bot.hears(/(^тян)/i, ctx => {
  Math.random() >= 0.66 ? ctx.reply(`*ЭХХХХХХ, КАК ЖЕ ПЛОХО БЕЗ ТЯНОЧКИ*`, {
    reply_to_message_id: ctx.message.message_id,
    parse_mode: 'Markdown'}) && utilities.logIn(ctx.message.from.username, ctx.message.from.first_name, ctx.message.chat.title) : null
});

bot.hears(/(^бот,)(\s)([\wа-яё].{1,})(или)(\s)([\wа-яё].{1,})([\?]{1}$)/im, ctx => {
  const arr = /(^бот,)(\s)([\wа-яё].{1,})(или)(\s)([\wа-яё].{1,})([\?]{1}$)/im.exec(ctx.message.text);
  Math.random() >= 0.5 ? ctx.reply(arr[6], {
    reply_to_message_id: ctx.message.message_id}) && utilities.logIn(ctx.message.from.username, ctx.message.from.first_name, ctx.message.chat.title) : ctx.reply(arr[3], {
      reply_to_message_id: ctx.message.message_id}) && utilities.logIn(ctx.message.from.username, ctx.message.from.first_name, ctx.message.chat.title)
})

bot.hears(/(^бот,)(\s)([\wа-яё].{1,})([\?]{1}$)/im, ctx => {
  ctx.reply(utilities.randomAnswer(), {
    reply_to_message_id: ctx.message.message_id
  });
  utilities.logIn(ctx.message.from.username, ctx.message.from.first_name, ctx.message.chat.title);
});

bot.use((ctx) => {
  let check = ``;
  ctx.message.caption === undefined ? null : check = ctx.message.caption;
  if (/(рейт)|(rate)/i.test(check) === true) {
    ctx.reply(utilities.rateAnswer(), {
      reply_to_message_id: ctx.message.message_id
    });
    utilities.logIn(ctx.message.from.username, ctx.message.from.first_name, ctx.message.chat.title);
  }
})

bot.startPolling();