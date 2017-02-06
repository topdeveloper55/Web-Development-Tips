import express from 'express';
var mongo = require('mongodb').MongoClient;
var router = express.Router();
var url = process.env.MONGODB_URI;

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/get-comments', function(req,res){
  var resultArray = [];
  
  mongo.connect(url, function(err, db) {
    if(err) throw err;
    
    var data = db.collection('comments').find();
    
    data.forEach(function(item, err) {
      if(err) throw err;
      resultArray.push(item);
    }, function() {
      db.close();
      res.send(resultArray);
    });
  });
})

router.post('/post-comments', function(req, res) {
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

router.post('/post-contact', function(req, res) {
  var jsonString = '';
  
  req.on('data', function(data) {
    jsonString += data;
  });
  
  req.on('end', function() {
    var data = JSON.parse(jsonString);
    var message = {
      name: data.name,
      email: data.email,
      title: data.title,
      message: data.message,
      date: data.date
    }
    
    mongo.connect(url, function(err, db) {
      if(err) throw err;
      db.collection('messages').insertOne(message, function(err, result) {
        if(err) throw err;
        console.log("message inserted");
        db.close();
      })
    })
  })
})

module.exports = router;