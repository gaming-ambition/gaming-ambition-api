var express = require('express');
const cors = require("cors");
const cookieSession = require("cookie-session")
const db = require('./models');


const app = express()
const port = 3000

db.sequelize.sync();

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(
    cookieSession({
        name:"standfor-session",
        secret:"F1",
        httpOnly:true
    })
)

app.get('/', (req,res) => {
    res.json({message: "Welcome to gaming ambition api"})
});

app.listen(port, () => {
    console.log('App launch on port ',port)
})