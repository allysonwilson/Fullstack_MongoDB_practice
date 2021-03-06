var MongoClient = require('mongodb').MongoClient

var bodySystemQueryHelper = {
  url: 'mongodb://localhost:27017/bodySystems',
  all: function (onQueryFinished) {
    MongoClient.connect(this.url, function (err, db){
      var systemsCollection = db.collection('systems')

      systemsCollection.find().toArray(function (err, docs){
        onQueryFinished(docs)
      })
    })
  }
}

module.exports = bodySystemQueryHelper
