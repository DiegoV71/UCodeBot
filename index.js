const botToken = process.env.BOT_TOKEN;
const TelegraBot = require("node-telegram-bot-api");

const options = {
    polling: {
        autoStart: false
    }
};

const bot = new TelegraBot(botToken, options);

bot.onText(/./, (msg) => autoReply(msg));

function autoReply(msg) {
    bot.sendMessage(mes.from.id, "I am alive");
}

bot.startPolling();
