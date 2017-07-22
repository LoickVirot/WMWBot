const Discord = require('discord.js');
const api = require('./config/api.js');
const database = require('./config/database');

const eventHandler = {
  ready: require('./events/ready.js')
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
    }

    db.close();
});

const bot = new Discord.Client();

bot.on('ready', function() {
  eventHandler.ready()
});


bot.login(api.discord_token);
