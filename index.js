process.env["NTBA_FIX_319"] = 1;

const botToken = process.env.BOT_TOKEN;
const url = process.env.APP_URL;
const port = process.env.PORT || 8443;
const TelegraBot = require("node-telegram-bot-api");

console.log(`Server will be started on ${url}:${port}`)

const options = {
        webHook: {
            port: port
        }
};

const bot = new TelegraBot(botToken, options);

bot.onText(/./, (msg) => autoReply(msg));

async function autoReply(msg) {
    await bot.sendMessage(msg.from.id, "I am alive");
}

//bot.setWebHook(url);
bot.setWebHook(`${url}/bot${botToken}`);
