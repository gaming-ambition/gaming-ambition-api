const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    // users model
    const User = sequelize.define('users', {
        username: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        password: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        email: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        rank: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    });
    return User;
};