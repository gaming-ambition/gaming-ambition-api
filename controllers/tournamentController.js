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

controller.create = async (req, res) => {
    try {
        const { name, game, max_teams } = req.body;
        const tournament = await model.tournament.create({
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
            ...defaultUpdateValues
        }, {
            where: { id }
        });
        res.status(200).json({ tournament });
    } catch (error) {
        res.status(500).json({ error });
    }
}

//delete tournament
controller.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const tournament = await model.tournament.destroy({
            where: { id }
        });
        res.status(200).json({ tournament });
    } catch (error) {
        res.status(500).json({ error });
    }
}


module.exports = controller;