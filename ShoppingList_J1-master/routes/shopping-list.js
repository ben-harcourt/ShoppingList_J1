var router = require('express').Router();
var mongoUtil = require( '../mongoUtil' );

/* DONT NEED
// ADD ITEM TO LIST

router.post('/', function (req, res){
	// mongo set up
	var db = mongoUtil.getDb();
	db.createCollection('shoppingLists', function(err, collection) {});
	var shoppingLists = db.collection('shoppingLists');

	var newItem = req.body;

	shoppingLists.update({id:req.body.listId}, {$push:{items:newItem}}, {w:1}, function(err, result) {
		console.log('You pushed!');
	});
	res.send(newItem);

});
*/

// GET SINGLE LIST

router.get('/:id', function (req, res){
	
	// MONGO SETUP
	var db = mongoUtil.getDb();
	db.createCollection('shoppingLists', function(err, collection) {});
	var shoppingLists = db.collection('shoppingLists');

	// Assigns the request parameter id value to var listId
	var listId = req.params.id;

	// Query collection by listId to find specific list (match by list.id)
	shoppingLists.find({id:listId}).toArray(function(err, list) {
    	res.send(list);
    });

});

// Don't need
// UPDATE ITEMS ARRAY (includes add item)

router.put('/', function (req, res){
	
	// MONGO SETUP
	var db = mongoUtil.getDb();
	db.createCollection('shoppingLists', function(err, collection) {});
	var shoppingLists = db.collection('shoppingLists');

	// Assigns req.body(which should be the list object) to var list
	var list = req.body;

	// Queries collection by the list.id and updates the items array
	shoppingLists.update({id:list.id}, {$set:{items:list.items}}, {w:1}, function(err, result) {
		console.log('You updated your items property!');
	});

	/*
	shoppingLists.update({id:req.body.listId}, {$unset:{items:[]}}, {w:1}, function(err, result) {
		console.log('You deleted your items array!');
	});
	*/
});

module.exports = router;