const User = require('./User');
const Ask_Give = require('./Ask_Give');
const Resource = require('./Resource');

User.hasMany(Ask_Give, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Ask_Give.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Resource, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Resource.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Ask_Give };
