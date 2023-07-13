const { DataTypes, Model } = require('sequelize');

const db = require('../db/connection');
//create student model and extend model consrtuctor//
class Group extends Model { }

//initializing table using init method//
Group.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { min: 2 }
    }
}, {
    sequelize: db,
    modelName: 'group'
});

module.exports = Group;