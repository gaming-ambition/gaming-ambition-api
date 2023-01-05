module.exports = (sequelize, Sequelize) => {
    // team_members model
    const TeamMember = sequelize.define('team_members', {
        team_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
                model: 'teams',
                key: 'id'
            }
        },
        user_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
                model: 'users',
                key: 'id'
            }
        }
    });
}