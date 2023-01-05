module.exports = {
    HOST: "localhost",
    USER:"leo",
    PASSWORD:"sqlpass",
    DB:"gaming-ambition",
    PORT:8889,
    dialect:"mysql",
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
};