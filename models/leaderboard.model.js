module.exports = (sequelize, Sequelize) => {
    // leaderboard model
const Leaderboard = sequelize.define('leaderboard', {
    tournament_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'tournaments',
        key: 'id'
      }
    },
    team_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'teams',
        key: 'id'
      }
    },
    wins: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    losses: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    points: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });
  return Leaderboard;
}
