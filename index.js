var express = require('express');
const cors = require("cors");
const cookieSession = require("cookie-session")
const db = require('./models');

/**
 * @controllers @imports
 * Controllers import
 */
const tournamentController = require('./controllers/tournamentController');


/** */
const app = express()
const port = 3000

db.sequelize.sync({force: true});

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
// setting another error program
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});


app.get('/', (req,res) => {
    res.json({message: "Welcome to gaming ambition api"})
});

app.post('/create_tournament', (req, res) => {
    // res.json();
    tournamentController.create(req, res);
    // res.json({message: "create a tournament", data: req.body})
})


app.listen(port, () => {
    console.log('App launch on port ',port)
})

// Gaming-ambition