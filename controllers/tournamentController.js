const model = require("../model/index");
const { Op } = require("sequelize");
const controller = {};

controller.create = async (req, res) => {
    try {
        const { name, game, max_teams } = req.body;
        const tournament = await model.tournament.create({
            name,
            game,
            max_teams,
            start_date: new Date(),
            created_at: new Date(),
        });
        res.status(200).json({ tournament });
    } catch (error) {
        res.status(500).json({ error });
    }
}

controller.findAll = async (req, res) => {
    try {
        const tournaments = await model.tournament.findAll();
        res.status(200).json({ tournaments });
    } catch (error) {
        res.status(500).json({ error });
    }
}


controller.findOne = async (req, res) => {
    try{
        const { id } = req.params;
        const tournament = await model.tournament.findOne({
            where: { id }
        });
        res.status(200).json({ tournament });
    } catch (error) {
        res.status(500).json({ error });
    }
}

//update tournament 

controller.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, game, max_teams } = req.body;
        const tournament = await model.tournament.update({
            name,
            game,
            max_teams,
            end_date: new Date(),
            updated_at: new Date(),
        }, {
            where: { id }
        });
        res.status(200).json({ tournament });
    } catch (error) {
        res.status(500).json({ error });
    }
}