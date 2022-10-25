const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create user model
class Post extends Model {}

//define table columns 
Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull:false
    },
    post_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
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