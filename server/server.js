var express = require('express')
var app = express()

// app.use(express.static(__dirname + '/../client/build'))

var bodySystemsRouter = require('./controllers/bodySystemsController.js')

app.use('/api/systems', bodySystemsRouter)

app.listen(3000, function() {
});
