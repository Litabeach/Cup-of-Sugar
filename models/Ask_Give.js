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
        //whether the post is an ask or give. Maybe should be DataTypes.STRING.BINARY?
        ask_or_give: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //can be left blank?
        zip_code: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        // type of resource such as: clothing, food, home services etc. Should this be a separate model?
        resource_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // can be left blank.
        contact: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        //refers to the user model
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