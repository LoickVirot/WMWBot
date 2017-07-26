/**
 * Created by Loïck on 26/07/2017.
 */
module.exports = function (bot, db, message) {
    const msgContent = message.content;

    if (msgContent.charAt(0) === '!') {
        switch (msgContent) {
            case '!ping':
                message.channel.send('pong');
        }
    }
};