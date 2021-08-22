'use strict'

const {Sequelize, DataTypes} = require('sequelize');

const POSTGRES_URI = process.env.POSTGRES_URI || "postgres://postgres@localhost:5432/lab06";
const Users = require('./user');

const sequelize = new Sequelize(POSTGRES_URI, {});





module.exports = {
   
    db: sequelize,
    Users:Users(sequelize, DataTypes)

}