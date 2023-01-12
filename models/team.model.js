module.exports = (sequelize, Sequelize) => {
    // teams model
    const Team = sequelize.define('teams', {
        tournament_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'tournaments',
                key: 'id'
            }
        },
        name: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        rank: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    return Team;
}