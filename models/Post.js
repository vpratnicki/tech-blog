const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create user model
class Post extends Model {}

//define table columns 
Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    post_text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'comment',
            key: 'id'
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
}
);

module.exports = Post;