const sequelize = require('../config/connection');
const { User, Comment, Ask_Give } = require('../models');

const userData = require('./userData.json');
const askgiveData = require('./askgiveData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const ask_give of askgiveData) {
    await Ask_Give.create({
      ...ask_give,
      // user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      // user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
