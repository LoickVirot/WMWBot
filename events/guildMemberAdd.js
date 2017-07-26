/**
 * Created by Loïck on 26/07/2017.
 */
module.exports = function (bot, db, user) {

    user.user.createDM()
        .then(function (channel) {
            channel.send('Bienvuenue ' + user.user.username + ' ! Nous sommes ravis de t\'accueillir parmis nous. Il y a quelques règles à respecter, pour le bien de tous. Je t\'invite à les lire :)');
            let connection = db.collection('guild');
            connection.findOne({id: user.guild.id})
                .then(function (guild) {
                    channel.send(guild.rules);
                })
        })
        .catch(function (err) {
            console.log(err);
        });
};