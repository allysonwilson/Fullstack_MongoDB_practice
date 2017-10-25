var express = require('express')
var app = express()

// app.use(express.static(__dirname + '/../client/build'))

var bodySystemRouter = require('./controllers/bodySystemController.js')

app.use('/api/system', bodySystemRouter)

app.listen(3000, function() {
});
