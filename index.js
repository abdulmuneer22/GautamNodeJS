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
    
    // Get Secret Key
    axios.post('https://gauthamwp-abdulmuneer22.c9users.io/register',{
        username : "James",
        password : "1234567890"
    })
    .then((response)=>{
        // console.log(response)
        var _secretkey = response.data
        axios.post('https://gauthamwp-abdulmuneer22.c9users.io/memberDetails',{
            secretkey : _secretkey
        })
        .then((response)=>{
            console.log(response.data)
            res.send(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
    .catch((error)=>{
        console.log(error)
    })

    // Get Memeber Data




})

