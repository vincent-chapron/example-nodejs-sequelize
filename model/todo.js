const Sequelize = require('sequelize')
const sequelize = require('../sequelize')

const Todo = sequelize.define('todo', {
    name: {
        type: Sequelize.STRING,
    },
})

Todo.sync()

module.exports = Todo
