process.env["NTBA_FIX_319"] = 1;

const botToken = process.env.BOT_TOKEN || require("./config").bot_token;
const url = process.env.APP_URL;
const port = process.env.PORT || 8443;
const TelegramBot = require("node-telegram-bot-api");

const CommonFunctions = require("./Libs/CommonFunctions");
const RatingCommands = require("./Commands/RatingCommands");

let options = {};

if (url) {
    options = {
        webHook: {
            port: port
        }
    };

    console.log(`Server will be started on ${url}:${port} with usage webHook`)
} else {
    options = {
        polling: {
            autoStart: false
        }
    };

    console.log(`Server will be started on localhost with longpooling`)
}

const bot = new TelegramBot(botToken, options);

const common = new CommonFunctions(bot);
const rating = new RatingCommands(bot);

bot.onText(/^\//, common.removeMessage);
bot.onText(/\/ping/, processPing);

bot.onText(/\/thx/, (msg) => rating.like(msg));
bot.onText(/\/wtf/, (msg) => rating.dislike(msg));

/**
 * 
 * @param {TelegramBot.Message} msg 
 */
async function processPing(msg) {
    console.log('I replyed to ' + msg.from.username + ` (${msg.text})`);
    await bot.sendMessage(msg.chat.id, "I am alive!", { reply_to_message_id: msg.message_id });
}

if (url) {
    bot.setWebHook(`${url}/bot${botToken}`);
} else {
    bot.startPolling();
}
console.log("Started!");
