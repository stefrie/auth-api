'use strict';

const userModel = require('./users.js');
const clothesModel = require('./clothes.js');
const foodModel = require('./food.js');
const Collection = require('./data-collection.js');
const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory;';

const sequelize = new Sequelize(DATABASE_URL);
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);

module.exports = {
	db: sequelize,
	users: userModel(sequelize, DataTypes),
	food: new Collection(food),
	clothes: new Collection(clothes),
}

