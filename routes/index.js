var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;
var User = require('../models/user');

/* GET home page. */
router.get('/users', function(req, res) {
	User.find({},function(err,result){
    if(err) throw err;
    res.json({status: 'Success',message: 'Load ' +result.length+ ' user',data: result});
  });
});

router.post('/user',function(req,res){
  if (req.body.prosses == "get"){
    User.findOne({_id : ObjectId(req.body.id)},function(err,result){
      if(err) throw err;
      res.json({status: 'Success', message: 'Load 1 user', data: result});
    });
  }else{
    User.create({
      name: req.body.name,
      class: req.body.class,
      age: req.body.age,
      email: req.body.email
    },function(err,result){
      if(err) throw err;
      res.json({status: 'Success', message: 'Created 1 user', data: result});
    });
  }
});

router.delete('/user',function(req,res){
  User.findOneAndDelete({_id : ObjectId(req.body.id)},function(err,result){
    if(err) throw err;
    res.json({status: 'Success', message: 'Deleted 1 user', data: result});
  });
});

router.put('/user',function(req,res){
  User.findOneAndUpdate({_id: ObjectId(req.body.id)},{
    $set: {
      name: req.body.name,
      class: req.body.class,
      age: req.body.age,
      email: req.body.email
    }
  },{new: true},function(err,result){
    res.json({status: 'Success', message: '1 User Updated', data: result});
  })
});

module.exports = router;
