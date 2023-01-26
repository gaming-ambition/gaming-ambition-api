var express = require('express');
const cors = require("cors");
const cookieSession = require("cookie-session")
const db = require('./models');

/**
 * @controllers @imports
 * Controllers import
 */
const tournamentController = require('./controllers/tournamentController');
const matchController = require('./controllers/matchController');

/**
 * @routes @imports
 * Routes import
 *  */
const tournamentRoutes = require('./router/tournamentRoutes');

/** */
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
// setting another error program
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});


app.get('/', (req,res) => {
    res.json({message: "Welcome to gaming ambition api"})
});


//* ANCHOR: Tournament routes

app.use('/tournaments', tournamentRoutes);
// *!SECTION: teams routes


// *!SECTION: match routes

app.post('/create_match', (req, res) => {
    res.json({message: "create a match", data: req.body})
})



// *!SECTION: Ports definition

app.listen(port, () => {
    console.log('App launch on port ',port)
})

