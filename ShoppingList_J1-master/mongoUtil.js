var MongoClient = require( 'mongodb' ).MongoClient;

var _db;

module.exports = {

  connectToServer: function( callback ) {
  	// connects to our database called shoppingLists
    MongoClient.connect( 'mongodb://admin:admin@ds033066.mlab.com:33066/js1', function( err, db ) {
      // assigns return database to var _db
      _db = db;
      return callback( err );
    } );
  },

  // function that we will use to access our database in other modules without having to connet again
  getDb: function() {
    return _db;
  }
  
};