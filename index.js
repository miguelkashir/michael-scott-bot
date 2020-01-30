const TelegramBot = require('node-telegram-bot-api');
const { token } = require('./token');
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  if (msg.text === 'que grande') {
    bot.sendMessage(msg.chat.id, 'eso dijo ella');
  }
});

bot.on('polling_error', (error) => {
  console.log(`Error: ${error.code}`);
});
