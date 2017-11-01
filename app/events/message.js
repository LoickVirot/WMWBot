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
        message.author.createDM()
        .then(function(channel){
            channel.send("Pong !");
        });
        break;
      case '!help':
        help.showHelp(message.author, db)
        break;
      case '!rules':
        rules.showRules(message.author, db);
        break;
    }
  }
};
