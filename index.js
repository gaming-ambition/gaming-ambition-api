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

// Create a tournament
app.post('/create_tournament', (req, res) => {
    // res.json();
    tournamentController.create(req, res);
    // res.json({message: "create a tournament", data: req.body})
})

// Get all tournaments
app.get('/tournaments', (req, res) => {
    tournamentController.findAll(req, res);
    // res.json({message: "get all tournaments"})
})

// Update a tournament
app.put('/update_tournament/:id', (req, res) => {
    tournamentController.update(req, res);
    // res.json({message: "update a tournament"})
})

// find a tournament
app.get('/find_tournament/:id', (req, res) => {
    tournamentController.findOne(req, res);
    // res.json({message: "find a tournament"})
})

// Delete a tournament
app.delete('/delete_tournament/:id', (req, res) => {
    tournamentController.delete(req, res);
    // res.json({message: "delete a tournament"})
})

app.listen(port, () => {
    console.log('App launch on port ',port)
})

