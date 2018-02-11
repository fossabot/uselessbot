import dotenv from 'dotenv';
import Telegraf from 'telegraf';
import { rate, bitcoin, tyan, twoChairs, deer, ratePhoto, regExp } from './functions';

dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN);

console.log(`   Bot started!`);

bot.hears(/(рейт)|(rate)/i, ctx => {
  rate(ctx);
});

bot.hears(/(биткоин)|(биток)|(bitcoin)|(крипта)|(биржа)/i, ctx => {
  bitcoin(ctx);
});

bot.hears(/(^тян)/i, ctx => {
  tyan(ctx);
});

bot.hears(regExp, ctx => {
  twoChairs(ctx);
});

bot.hears(/(^бот,)(\s)([\wа-яё].{1,})([?]{1}$)/im, ctx => {
  deer(ctx);
});

bot.on('photo', ctx => {
  ratePhoto(ctx);
});

bot.startPolling();
