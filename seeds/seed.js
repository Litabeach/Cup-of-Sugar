const sequelize = require('../config/connection');
const { User, Blog, Ask_Give } = require('../models');

const userData = require('./userData.json');
const askgiveData = require('./askgiveData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const ask_give of askgiveData) {
    await Ask_Give.create({
      ...ask_give,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
