const TelegramBot = require("node-telegram-bot-api");

class RatingCommands {
    /**
     * 
     * @param {TelegramBot} bot 
     */
    constructor(bot) {
        this.bot = bot;
    }

    /**
     * 
     * @param {TelegramBot.Message} msg 
     */
    like(msg) {
        this.bot.sendMessage(msg.chat.id, "Функционал повышения рейтинга находится в разработке.", { reply_to_message_id: msg.message_id });
    }

    /**
     * 
     * @param {TelegramBot.Message} msg 
     */
    dislike(msg) {
        this.bot.sendMessage(msg.chat.id, "Функционал понижения рейтинга находится в разработке.", { reply_to_message_id: msg.message_id });
    }
}

module.exports = RatingCommands;