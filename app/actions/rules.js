const params = require('../config/parameters');
const Discord = require('discord.js');

module.exports = {
  showRules: function(user, db) {
    // create DM
    user.createDM()
    .then(function(channel) {
      let connection = db.collection('guild');
      connection.findOne({id: params.guildId})
        .then(function (guild) {
          let embed = new Discord.RichEmbed();
          embed.setTitle("Règles du serveur")
            .setDescription(guild.rules)
            .setColor("BLUE")
          ;
          channel.send(embed);
        })
        .catch(function (err) {
          channel.send("Erreur");
          console.error(err);
        });
    })
    .catch(function(err){
      throw new Error(err);
    });

  }
}
