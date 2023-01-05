module.exports = (sequelize, Sequelize) => {
    // user_rankings model
    const UserRanking = sequelize.define('user_rankings', {
        user_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
                model: 'users',
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
