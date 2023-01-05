module.exports = (sequelize, Sequelize) => {
    // teams model
    const Team = sequelize.define('teams', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
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