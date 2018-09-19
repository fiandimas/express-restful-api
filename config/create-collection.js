var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url,function(err,db){
	if(err) throw err;
	var dbo = db.db('restful-api');
	var myObj = [
		{
			name: 'Aome', class: 'XII RPL 1', age: 17, email: '@student.maju-mlg.com' 
		},{
			name: 'Scarlet', class: 'XII RPL 1', age: 16, email: 'scarlet@student.maju-mlg.com' 
		},{
			name: 'Akabayashi', class: 'XII RPL 1', age: 17, email: 'akabayashi@student.maju-mlg.com' 
		},{
			name: 'Rindou', class: 'XII RPL 1', age: 16, email: 'rindou@student.maju-mlg.com' 
		},{
			name: 'Miya', class: 'XII RPL 1', age: 17, email: 'miya@student.maju-mlg.com' 
		},{
			name: 'Liz', class: 'XII RPL 1', age: 16, email: 'liz@student.maju-mlg.com' 
		},{
			name: 'Meliodas', class: 'XII RPL 1', age: 17, email: 'meliodas@student.maju-mlg.com' 
		},{
			name: 'Phantomhive', class: 'XII RPL 1', age: 16, email: 'phantomhive@student.maju-mlg.com' 
		},{
			name: 'Kaga', class: 'XII RPL 1', age: 17, email: 'kaga@student.maju-mlg.com' 
		},{
			name: 'Scathach', class: 'XII RPL 1', age: 16, email: 'scathach@student.maju-mlg.com' 
		},{
			name: 'Satanichia', class: 'XII RPL 1', age: 17, email: 'satanichia@student.maju-mlg.com' 
		},{
			name: 'Menhera', class: 'XII RPL 1', age: 16, email: 'menhera@student.maju-mlg.com' 
		},{
			name: 'Jaeger', class: 'XII RPL 1', age: 17, email: 'jaeger@student.maju-mlg.com' 
		},{
			name: 'Oda', class: 'XII RPL 1', age: 16, email: 'oda@student.maju-mlg.com' 
		},{
			name: 'Beros', class: 'XII RPL 1', age: 17, email: 'beros@student.maju-mlg.com' 
		},{
			name: 'Staz', class: 'XII RPL 1', age: 16, email: 'staz@student.maju-mlg.com' 
		},{
			name: 'Kongou', class: 'XII RPL 1', age: 17, email: 'kongou@student.maju-mlg.com' 
		},{
			name: 'Akame', class: 'XII RPL 1', age: 16, email: 'akame@student.maju-mlg.com' 
		},{
			name: 'Yona', class: 'XII RPL 1', age: 17, email: 'yona@student.maju-mlg.com' 
		},
	];
	dbo.collection("data").insertMany(myObj,function(err,result){
		if(err) throw err;
		console.log('Collection created!');
		console.log(result);
		db.close();
	});
})