const model = require("../models/index");
const { Op } = require("sequelize");
const controller = {};
const { v4: uuidv4 } = require('uuid');


const defaultCreateValues ={
    end_date: new Date(),
    updated_at: new Date(),
    start_date: new Date(),
    created_at: new Date(),
}


const defaultUpdateValues ={
    end_date: new Date(),
    updated_at: new Date(),
}

// create a new Match in progress

controller.create = async (req, res) => {
    try {
        const { name, game, max_teams } = req.body;
        const tournament = await model.match.create({
            name,
            game,
            max_teams,
            ...defaultCreateValues
        });
        res.status(200).json({ tournament });
    } catch (error) {
        res.status(500).json({ error });
    }
}