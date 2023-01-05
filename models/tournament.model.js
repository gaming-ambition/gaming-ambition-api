const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    // tournaments model
const Tournament = sequelize.define('tournaments', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    start_date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    end_date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    game: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    max_teams: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });
  
    return Tournament;
};