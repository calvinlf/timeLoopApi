const express = require('express')
const app = express()
let users = {}

app.use('/', (req, res, next) => {
    console.log(`Request Type: ${req.method} called on path ${req.path}`)
    next()
})

app.get('/start', (req, res, next) => {
    const start = require('./rooms/start')
    if (!users[req.query.user]) {
        users[req.query.user] = {
           visitedStart: 0
        }
    }
    users[req.query.user].visitedStart++
    if (users[req.query.user].visitedStart === 1) {
        res.send(start.basic)
    } else if(users[req.query.user].visitedStart === 2) {
        res.send(start.restart)
    } else {
        res.send(start.counter(users[req.query.user].visitedStart))
    }
})

app.get('/start', (req, res, next) => {
    const start = require('./rooms/start')
    if (!users[req.query.user]) {
        users[req.query.user] = {
            visitedStart: 0
        }
    }
    users[req.query.user].visitedStart++
    if (users[req.query.user].visitedStart === 1) {
        res.send(start.basic)
    } else if(users[req.query.user].visitedStart === 2) {
        res.send(start.restart)
    } else {
        res.send(start.counter(users[req.query.user].visitedStart))
    }
})

app.get('/branch', (req, res, next) => {
    const branch = require('./rooms/branch')
    res.send(branch.basic)
})

let port = process.env.PORT || 3030
app.listen(port, () => {
    console.log('Beginning server')
    console.log('    [INFO] Server running on port: ' + port)
})