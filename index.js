process.env["NTBA_FIX_319"] = 1;

const botToken = process.env.BOT_TOKEN;
const url = process.env.APP_URL;
const port = process.env.PORT || 8443;
const TelegraBot = require("node-telegram-bot-api");


const options = {
    polling: {
        webHook: {
            port: port,
            host: url
        }
    }
};

const bot = new TelegraBot(botToken, options);

bot.onText(/./, (msg) => autoReply(msg));

async function autoReply(msg) {
    await bot.sendMessage(msg.from.id, "I am alive");
}

bot.setWebHook();
//bot.setWebHook(`${url}/bot${botToken}`);
