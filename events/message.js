/**
 * Created by Loïck on 26/07/2017.
 */
const rules = require('../actions/rules');
const help = require('../actions/help');

module.exports = function (bot, db, message) {
    const msgContent = message.content;

    if (msgContent.charAt(0) === '!') {
        switch (msgContent) {
            case '!ping':
                message.channel.send('pong');
                break;
            case '!help':
                help.showHelp(message.channel, db)
                break;
            case '!rules':
                rules.showRules(message.channel, db);
                break;
            default:
                message.channel.send("Désolé, je n'ai pas compris :/");
        }
    }
};
