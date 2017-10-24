var bodySystemsQueryHelper = require('../db/bodySystemsQueryHelper.js')
var express = require('express')
var bodySystemsRouter = express.Router()

bodySystemsRouter.get('/', function (req, res){
  bodySystemsQueryHelper.all(function(systems){
    res.json(systems)
  })
})

module.exports = bodySystemsRouter
