const express = require('express')
const cors = require('cors')
const app = express()
let users = {}


app.use(cors())
app.use('/', (req, res, next) => {
    console.log(`Request Type: ${req.method} called on path ${req.path}`)
    next()
})

app.get('/start', (req, res, next) => {
    const start = require('./rooms/start')
    const user = req.query.user
    if (!users[user]) {
        users[user] = {
           visitedStart: 0
        }
    }
    users[user].visitedStart++
    if (users[user].visitedStart === 1) {
        res.send(start.basic(user))
    } else if(users[user].visitedStart === 2) {
        res.send(start.restart(user))
    } else {
        res.send(start.counter(user, users[user].visitedStart))
    }
})

app.get('/branch', (req, res, next) => {
    const branch = require('./rooms/branch')
    const user = req.query.user
    res.send(branch.basic(user))
})

app.get('/right1', (req, res, next) => {
    const right1 = require('./rooms/right1')
    const user = req.query.user
    res.send(right1.basic(user))
})

app.get('/dead-end', (req, res, next) => {
    const de = require('./rooms/dead-end')
    const user = req.query.user
    res.send(de.basic(user))
})

app.get('/left1', (req, res, next) => {
    const left1 = require('./rooms/left1')
    const user = req.query.user
    res.send(left1.basic(user))
})

app.get('/code', (req, res, next) => {
    const code = require('./rooms/code')
    const user = req.query.user
    res.send(code.basic(user))
})

app.get('/win', (req, res, next) => {
    const win = require('./rooms/win')
    const user = req.query.user
    res.send(win.basic(user))
})

let port = process.env.PORT || 3030
app.listen(port, () => {
    console.log('Beginning server')
    console.log('    [INFO] Server running on port: ' + port)
})