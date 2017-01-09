var express = require('express');
var app = express();
var axios = require('axios')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser());


var server = app.listen(3900, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})


app.get('/',(req,res)=>{
    res.send("Hello World !!!")
})

app.post('/login',(req,res)=>{

// var username = req.body.username
// var password = req.body.password
var username = req.body.username

res.send("Hello" + username)
})