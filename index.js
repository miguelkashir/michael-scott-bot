const TelegramBot = require('node-telegram-bot-api');

const { token } = require('./token');

const bot = new TelegramBot(token, { polling: true });
const REPLY = 'Eso dijo ella 😉';
const TRIGGERS = ['que grande'];

const formatReceivedText = text => {
  return text.toLowerCase();
};

bot.on('message', msg => {
  const formattedText = formatReceivedText(msg.text);
  const match = TRIGGERS.find(trigger => trigger === formattedText);

  if (match)
    bot.sendMessage(msg.chat.id, REPLY, {
      reply_to_message_id: msg.message_id
    });
});

bot.on('polling_error', error => console.error(`Error: ${error}`));
