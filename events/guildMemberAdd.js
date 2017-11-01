/**
 * Created by Loïck on 26/07/2017.
 */
const rules = require('../actions/rules');

module.exports = function (bot, db, user) {

    user.user.createDM()
          .then(function (channel) {
            channel.send('Bienvenue ' + user.username + ' ! Nous sommes ravis de t\'accueillir parmis nous. Il y a quelques règles à respecter, pour le bien de tous. Je t\'invite à les lire :)');
            rules.showRules(channel, db);
        })
        .catch(function (err) {
            console.log(err);
        });
};
