const Sequelize = require('sequelize')

const sequelize = new Sequelize('formation', 'root', 'openska', {
    dialect: 'mysql',
    host: 'mysql',
    port: 3306,
})

module.exports = sequelize
