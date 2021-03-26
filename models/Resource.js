const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Resource extends Model {
    
}

Resource.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
 {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'resource',
  }
);

module.exports = Resource;
