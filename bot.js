const Discord = require('discord.js');
const api = require('./config/api.js');
const database = require('./config/database');

const eventHandler = {
    ready: require('./events/ready'),
    message: require('./events/message'),
    guildMemberAdd: require('./events/guildMemberAdd'),
};

let MongoClient = require('mongodb').MongoClient
    , assert = require('assert');


let url = database.url;


MongoClient.connect(url, function(err, db) {
    if (err) {
      console.log('Database connection error');
    }
    else {
      console.log('Database connected');

        const bot = new Discord.Client();

        bot.on('ready', function() {
            eventHandler.ready(bot, db)
        });

        bot.on('message', message => {
            eventHandler.message(bot, db, message);
        });

        bot.on('guildMemberAdd', user => {
            eventHandler.guildMemberAdd(bot, db, user);
        });

        bot.login(api.discord_token);
    }
});
