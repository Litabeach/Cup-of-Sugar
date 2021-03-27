const User = require('./User');
const Ask_Give = require('./Ask_Give');
const Comment = require('./Comment');
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

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Ask_Give.hasMany(Comment, {
  foreignKey: 'ask_give_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Ask_Give, {
  foreignKey: 'ask_give_id'
});

module.exports = { User, Ask_Give, Comment};
