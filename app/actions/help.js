const Discord = require('discord.js');

module.exports = {
  showHelp: function(user, db) {
    // create DM
    user.createDM()
    .then(function(channel) {
      let connection = db.collection('commands');
      connection.find({}).toArray(function (err, commands) {
        if(err) {
          console.error(err);
        } else {
          let formattedCommand = commands.map(function(command) {
            return "- `!" + command.command + "` : " + command.description;
          });
          let embed = new Discord.RichEmbed();
          embed.setTitle("Liste des commandes :")
            .setDescription(formattedCommand)
            .setColor('BLUE')
          ;
          channel.send(embed);
        }
      });
    }).catch(function(err) {
      throw new Error(err);
    });
  }
}
