module.exports = (sequelize, Sequelize) => {
    // team_rankings model
    const TeamRanking = sequelize.define('team_rankings', {
        team_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
                model: 'teams',
                key: 'id'
            }
        },
        ranking_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
                model: 'rankings',
                key: 'id'
            }
        },
        rank: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
}