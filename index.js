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

bot.onText(/test/, (msg) => autoReply(msg));

/**
 * 
 * @param {TelegraBot.Message} msg 
 */
async function autoReply(msg) {
    console.log('I replyed to ' + msg.from.username + ` (${msg.text})`);
    await bot.sendMessage(msg.chat.id, "I am alive", { reply_to_message_id: msg.message_id});
}

//bot.setWebHook(url);
bot.setWebHook(`${url}/bot${botToken}`);
