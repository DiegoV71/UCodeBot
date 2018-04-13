const botToken = process.env.BOT_TOKEN;
const url = process.env.APP_URL;
const TelegraBot = require("node-telegram-bot-api");

const options = {
    polling: {
        webHook: {
            port: process.env.PORT
        }
    }
};

const bot = new TelegraBot(botToken, options);

bot.onText(/./, (msg) => autoReply(msg));

async function autoReply(msg) {
    await bot.sendMessage(mes.from.id, "I am alive");
}

bot.setWebHook(`${url}/bot${botToken}`);
