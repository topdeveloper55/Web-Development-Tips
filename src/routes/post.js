import express from 'express';
var mongo = require('mongodb').MongoClient;
var router = express.Router();
var url = process.env.MONGODB_URI;
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/get-data', function(req,res, next){
  var resultArray = [];
  mongo.connect(url, function(err, db) {
    if(err) throw err;
    var cursor = db.collection('comments').find();
    cursor.forEach(function(doc, err) {
      if(err) throw err;
      resultArray.push(doc);
    }, function() {
      db.close();
      res.send(resultArray);
    });
  });
})

router.post('/insert', function(req, res, next) {
  var jsonString = '';

  req.on('data', function (data) {
      jsonString += data;
  });

  req.on('end', function () {
    var data = JSON.parse(jsonString)
    var comment = {
      name: data.name,
      comment: data.comment,
      postName: data.postName,
      date: data.date
    }
    
    mongo.connect(url, function(err, db){
      if(err) throw err;
      db.collection('comments').insertOne(comment, function(err, result){
        if(err) throw err;
        console.log('item inserted');
        db.close();
      })
    })
  });
  
  
})

module.exports = router;