module.exports = function(bot, db) {
    console.log('Bot is ready');

    // Register guild
    let guilds = bot.guilds;
    guilds.forEach(function (guild) {
        console.log(guild.id + ' ' + guild.name);

        // Insert guild into database
        let connection = db.collection('guild');
        connection.findOne({id: guild.id}, function (err, dbGuild) {
            if (err) {
                console.log(err);
            }

            if (!dbGuild) {
                console.log('Insert ' + guild.name);
                connection.insertOne({
                    id: guild.id,
                    name: guild.name
                }).catch(function (err) {
                    console.log(err);
                });
            } 
        });
    });
};
