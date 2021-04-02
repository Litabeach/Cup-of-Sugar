const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Ask_Give extends Model {

}

Ask_Give.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        
        ask_or_give: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING(5000),
            allowNull: false,
        },
        
        zip_code: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null
        },
        
        resource_type: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
      
        contact: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },

        createdAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.fn('now'),
            allowNull: false
        },

        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.fn('now'),
            allowNull: false
        },

    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'ask_give',
    }
);

module.exports = Ask_Give;