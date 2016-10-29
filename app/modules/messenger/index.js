'use strict';
const conf = require('config');
const Message = require('modules/message');
const TelegramBot = require('node-telegram-bot-api');

class Messenger {
    constructor() {
        if (process.env.NODE_ENV === 'production') {
            this.bot = new TelegramBot(process.env.BOT_TOKEN, 
                { webHook: { port: config.port, host: config.host } });
            this.bot.setWebHook(config.externalUrl + ':443/bot' + process.env.BOT_TOKEN);
        } else {
            this.bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
        }
    }

    listen() {
        this.bot.on('text', this.handleText.bind(this));
        return Promise.resolve();
    }

    handleText(msg) {
        //format the message
        const message = new Message(Message.mapMessage(msg));
        const text = message.text;

        // default - send message with help
        return require('commands/help')(message, this.bot);
    }
}

module.exports = Messenger;
