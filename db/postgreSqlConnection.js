var config=require('../config/config.json'),
    pool = {
        user:config.postgreSql.user,
        host: config.postgreSql.host,
        database: config.postgreSql.database,
        password: config.postgreSql.password,
        port: config.postgreSql.port
    };
module.exports = pool;