module.exports = {
  showHelp: function(channel, db) {
    channel.send("Voici les commandes que je connais :")
    let connection = db.collection('commands');
    connection.find({}).toArray(function (err, commands) {
      if(err) {
        console.error(err);
      } else {
        commands.map(function(command) {
          channel.send("- !" + command.command + " : " + command.description);
        });
      }
    });
  }
}
