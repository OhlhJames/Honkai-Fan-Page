const sequelize = require('../config/connection');
const { Character } = require('../models');
const data = require('./data')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  Character.bulkCreate(data);
};

seedDatabase();