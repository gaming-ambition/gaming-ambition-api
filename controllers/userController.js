const model = require("../models/index");
const { Op } = require("sequelize");
const controller = {};
const { v4: uuidv4 } = require('uuid');


//create user account
controller.create = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await model.user.create({
            name,
            lastname,
            email,
            password,
        });
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error });
    }
}

//find all users
controller.findAll = async (req, res) => {
    try {
        const users = await model.user.findAll();
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ error });
    }
}

//find one user
controller.findOne = async (req, res) => {
    try{
        const { id } = req.params;
        const user = await model.user.findOne({
            where: { id }
        });
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error });
    }
}