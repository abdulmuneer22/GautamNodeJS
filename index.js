var express = require('express');
var app = express();
var axios = require('axios')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser());

assert = require('assert');
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://admin:admin@ds127389.mlab.com:27389/fatwallet_db';

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



app.get('/mongotest/insert',(req,res)=>{
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");

        var item = {
            "name" : "from nodejs"
        }

        db.collection('students').insertOne(item,function(err,db){
        assert.equal(null, err);
        console.log("Inserted correctly !!")
        res.send("Update Complete !!")
        db.close()
        })

    })
})


app.get('/mongotest/update',(req,res)=>{



    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");

        

        db.collection('students').update({"name" : "James!!!!"}, {"name" : "James"} )
        db.close()
        res.send("Updated Succefully !!")
    
    })
})



app.get('/mongotest/delete',(req,res)=>{



    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");

        

        db.collection('students').deleteOne({"name" : "James"})
        db.close()
        res.send("Deleted Succefully !!")
    
    })
})


app.get('/mongotest/read',(req,res)=>{
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");

        db.collection('students',(err,collection)=>{
            if(!err){
                collection.find({}).toArray((err,docs)=>{
                    if(err){
                        db.close()
                        
                    }

                    res.send(docs)
                    db.close()
                })
            }
        })
        

    })
})


