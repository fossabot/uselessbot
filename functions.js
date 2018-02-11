import { randomAnswer, rateAnswer, log, getCurrentTime, regExp } from './helpers';

const bitcoinSticker = 'CAADAgADywkAAqWUAgABRVA_Zn1CUrMC';

export const rate = ctx => {
  ctx.reply(rateAnswer(), { reply_to_message_id: ctx.message.message_id });
  log(ctx.message.from.username, ctx.message.from.first_name, ctx.message.chat.title, getCurrentTime());
};

export const bitcoin = ctx => {
  ctx.replyWithSticker(bitcoinSticker, { reply_to_message_id: ctx.message.message_id });
  log(ctx.message.from.username, ctx.message.from.first_name, ctx.message.chat.title, getCurrentTime());
};

export const tyan = ctx => {
  Math.random() >= 0.66
    ? ctx.reply(`*ЭХХХХХХ, КАК ЖЕ ПЛОХО БЕЗ ТЯНОЧКИ*`, { reply_to_message_id: ctx.message.message_id, parse_mode: 'Markdown' }) &&
      log(ctx.message.from.username, ctx.message.from.first_name, ctx.message.chat.title, getCurrentTime())
    : null;
};

export const twoChairs = ctx => {
  const arr = regExp.exec(ctx.message.text);
  Math.random() >= 0.5
    ? ctx.reply(arr[6], { reply_to_message_id: ctx.message.message_id }) &&
      log(ctx.message.from.username, ctx.message.from.first_name, ctx.message.chat.title, getCurrentTime())
    : ctx.reply(arr[3], { reply_to_message_id: ctx.message.message_id }) &&
      log(ctx.message.from.username, ctx.message.from.first_name, ctx.message.chat.title, getCurrentTime());
};

export const deer = ctx => {
  ctx.reply(randomAnswer(), { reply_to_message_id: ctx.message.message_id });
  log(ctx.message.from.username, ctx.message.from.first_name, ctx.message.chat.title, getCurrentTime());
};

export const ratePhoto = ctx => {
  const { caption } = ctx.message;
  /(рейт)|(rate)/i.test(caption) === true
    ? ctx.reply(rateAnswer(), { reply_to_message_id: ctx.message.message_id }) &&
      log(ctx.message.from.username, ctx.message.from.first_name, ctx.message.chat.title, getCurrentTime())
    : null;
};

export { regExp };
