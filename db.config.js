module.exports = {
    HOST: "localhost",
    USER:"tester",
    PASSWORD:"root",
    DB:"gaming-ambition",
    PORT:3306,
    dialect:"mysql",
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
};