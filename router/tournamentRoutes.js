//* ANCHOR: Tournament routes
const express=require('express')
const router=express.Router()

// Get all tournaments
router.get('/', (req, res) => {
    tournamentController.findAll(req, res);
    // res.json({message: "get all tournaments"})
})

// Create a tournament
router.post('/create_tournament', (req, res) => {
    // res.json();
    tournamentController.create(req, res);
    // res.json({message: "create a tournament", data: req.body})
})

// Update a tournament
router.put('/update_tournament/:id', (req, res) => {
    tournamentController.update(req, res);
    // res.json({message: "update a tournament"})
})

// find a tournament
router.get('/find_tournament/:id', (req, res) => {
    tournamentController.findOne(req, res);
    // res.json({message: "find a tournament"})
})

// Delete a tournament
router.delete('/delete_tournaments/:id', (req, res) => {
    tournamentController.delete(req, res);
    // res.json({message: "delete a tournament"})
})

module.exports=router;
