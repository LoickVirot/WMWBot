const params = require('../config/parameters');

module.exports = {
  showRules: function(channel, db) {
    let connection = db.collection('guild');
    connection.findOne({id: params.guildId})
        .then(function (guild) {
            channel.send(guild.rules);
        })
        .catch(function (err) {
            channel.send("Erreur");
            console.error(err);
        });
  }
}
