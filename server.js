const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080
const app = express()

app.use(express.static(__dirname + "/static"))
app.use(express.static("images"))
app.get('*', function(req,res){
  res.sendFile(path.resolve(__dirname, 'static','index.html'))
})

app.listen(port)
