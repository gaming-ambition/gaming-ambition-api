const config = require('../db.config');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false,
        port:8889,

        pool:{
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user =require('./user.model')(sequelize, Sequelize);
db.tournament = require('./tournament.model')(sequelize, Sequelize);
db.match = require('./match.model')(sequelize, Sequelize);
db.ranking = require('./ranking.model')(sequelize, Sequelize);
db.leaderboard = require('./leaderboard.model')(sequelize, Sequelize);
db.team = require('./team.model')(sequelize, Sequelize);
db.teamMember = require('./teamMember.model')(sequelize, Sequelize);
db.teamRanking = require('./teamRanking.model')(sequelize, Sequelize);
db.userRanking = require('./userRanking.model')(sequelize, Sequelize);


module.exports = db;