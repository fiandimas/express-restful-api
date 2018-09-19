var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/';

/* GET home page. */
router.get('/', function(req, res, next) {
	MongoClient.connect(url,function(err,db){
		if(err) throw err;
		var dbo = db.db('restful-api');
		dbo.collection('data').find({}).toArray(function(err,result){
			if(err) throw err;
			res.send(result);
			db.close();
		});
	});
});

module.exports = router;
