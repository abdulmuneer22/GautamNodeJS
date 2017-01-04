var express = require('express');
var app = express();
var axios = require('axios')


var server = app.listen(3900, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})


app.get('/',(req,res)=>{
    res.send("Hello World !!!")
})