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

router.get('/find/:id',function(req,res,next){
	MongoClient.connect(url,function(err,db){
		if(err) throw err;
		var dbo = db.db('restful-api');
		dbo.collection('data').findOne({_id : ObjectId(req.params.id)},function(err,result){
			if(err) throw err;
			res.send(result);
			db.close();
		});
	});
});

router.post('/add',function(req,res,next){
	MongoClient.connect(url,function(err,db){
		if(err) throw err;
		var name = req.body.name;
		var clas = req.body.class;
		var age = req.body.age;
		var email = req.body.email;
		var query = {
			name: name,
			class: clas,
			age: age,
			email: email
		};
		var dbo = db.db('restful-api');
		dbo.collection('data').insertOne(query,function(err,result){
			if(err) throw err;
			res.send(result);
			db.close();
		});
	});
});

router.delete('/delete/:id',function(req,res,next){
	MongoClient.connect(url,function(err,db){
		if(err) throw err;
		var dbo = db.db('restful-api');
		dbo.collection('data').deleteOne({_id : ObjectId(req.params.id)},function(err,result){
			if(err) throw err;
			res.send(result);
			db.close();
		});
	});
});

router.delete('/delete',function(req,res,next){
	MongoClient.connect(url,function(err,db){
		if(err) throw err;
		var dbo = db.db('restful-api');
		dbo.collection('data').deleteMany({},function(err,result){
			if(err) throw err;
			res.send(result);
			db.close();
		});
	});
});

router.put('/update/:id',function(req,res,next){
	MongoClient.connect(url,function(err,db){
		if(err) throw err;
		var dbo = db.db('restful-api');
		var query = { 
				$set: {
					name: req.body.name,
					class: req.body.class,
					age: req.body.age,
					email: req.body.email
			}
		}
		dbo.collection('data').updateOne({_id : ObjectId(req.params.id)},query,function(err,result){
			if(err) throw err;
			res.send(result);
			db.close();
		});
	});
});

module.exports = router;
