const { DataTypes, Model } = require('sequelize');

const db = require('../db/connection');
//create student model and extend model consrtuctor//
class Student extends Model { }

//initializing table using init method//
Student.init({
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { min: 2 }
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { min: 2 }
    },
    email: {
        type: DataTypes.STRING,
        validate: { isEmail: true }
    }
}, {
    sequelize: db,
    modelName: 'student'
});

module.exports = Student;