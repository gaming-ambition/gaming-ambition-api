module.exports = (sequelize, Sequelize) => {
    // matches model
const Match = sequelize.define('matches', {
    tournament_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'tournaments',
        key: 'id'
      }
    },
    team1_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'teams',
        key: 'id'
      }
    },
    team2_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'teams',
        key: 'id'
      }
    },
    start_time: {
      type: Sequelize.DATE,
      allowNull: false
    },
    end_time: {
      type: Sequelize.DATE,
      allowNull: false
    },
    winner_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'teams',
        key: 'id'
      }
    },
    team1_score: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    team2_score: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });
  return Match;
}