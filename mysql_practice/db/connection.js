const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('student_app_db', 'root', 'pass', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;