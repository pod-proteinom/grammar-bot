'use strict';

module.exports = (message, bot) => {
    bot.sendMessage(message.from, 'Call the /progress to see how much time you wasted');
};