  // var list = {mykey:1, fieldtoupdate:1};

  // testShoppingList.insert(doc1, {w:1}, function(err, result) {});

  // update with $set
  // testShoppingList.insert(doc1, {w:1}, function(err, result) {
  //   testShoppingList.update({mykey:1}, {$set:{fieldtoupdate:2}}, {w:1}, function(err, result) {});
  // });

  // var doc2 = {mykey:2, docs:[{doc1:1}]};

  /* update $push
  testShoppingList.insert(doc2, {w:1}, function(err, result) {
  	testShoppingList.update({mykey:2}, {$push:{docs:{doc2:1}}}, {w:1}, function(err, result) {});
  });
  */


  // remove my id
  // testShoppingList.remove({mykey:2}, {w:1}, function(err, result) {});

  // remove all
  // testShoppingList.remove();


  // QUERY
  /*var docs = [{mykey:1}, {mykey:2}, {mykey:3}];

  testShoppingList.insert(docs, {w:1}, function(err, result) {

    testShoppingList.find().toArray(function(err, items) {
    	console.log(items);
    });

    testShoppingList.findOne({mykey:1}, function(err, item) {
    	console.log(item);
    });

	});
	*/