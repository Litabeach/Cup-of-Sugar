const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {

}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //zip code field, can be left blank?
        zip_code: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        //type of resource such as: clothing, food, home services etc. Hardcoded in drop down menu. Select multiple types?
        resource_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
        //can be left blank.
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
        modelName: 'blog',
    }
);

module.exports = Blog;