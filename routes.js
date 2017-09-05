const {Router} = require('express')

const Todo = require('./model/todo')

const router = new Router()

router.get('/', function(req, res) {
    res.json('OK')
})

router.get('/todos', function(req, res) {
    Todo.findAll()
        .then(todos => res.json({todos}))
        .catch(err => {
            console.error(err)
            res.status(400)
            res.json({errCode: 'MYSQL_ERROR'})
        })
})

router.post('/todos', function(req, res) {
    Todo.create({name: req.body.name})
        .then(todo => res.json({todo, errCode: null}))
        .catch(err => {
            console.error(err)
            res.status(400)
            res.json({todo: null, errCode: 'TODO_CREATE_ERROR'})
        })
})

router.delete('/todos/:id', function(req, res) {
    Todo.destroy({where: {id: req.params.id}})
        .then(todo => res.json({errCode: null}))
        .catch(err => {
            console.error(err)
            res.status(400)
            res.json({errCode: 'TODO_DELETE_ERROR'})
        })
})

module.exports = router
