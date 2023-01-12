module.exports = (sequelize, Sequelize) => {
    // rankings model
    const Ranking = sequelize.define('rankings', {
        name: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        game: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        method: {
            type: Sequelize.TEXT,
            allowNull: false
        }
    });
}
