const { Telegraf, Telegram } = require('telegraf');

const bot = new Telegraf("1376455896:AAGPgmpg54c-qvpDYSqDlQle28UgO4MSJM0");

bot.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log('Response time: %sms', ms)
  });

bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => {
    console.log(ctx.from);
    ctx.reply('Hey there ' + ctx.from.first_name + " " + ctx.from.last_name);
});
bot.launch();