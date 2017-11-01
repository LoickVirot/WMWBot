/**
 * Created by Loïck on 22/07/2017.
 */
const params = require('./parameters');

const credentials = {
    dbUser: params.database.dbUser,
    password: params.database.password,
};

module.exports = {
    url: 'mongodb://'+ credentials.dbUser +':'+ credentials.password +'@ds111103.mlab.com:11103/wmwbot'
};