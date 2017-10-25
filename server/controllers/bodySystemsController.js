var bodySystemQueryHelper = require('../db/bodySystemQueryHelper.js')
var express = require('express')
var bodySystemRouter = new express.Router()


router.get('/', function(req, res){
  
})

bodySystemRouter.get('/', function (req, res){
  bodySystemQueryHelper.all(function(systems){
    res.json(systems)
  })
})

module.exports = bodySystemRouter
