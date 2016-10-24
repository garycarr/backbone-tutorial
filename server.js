var application_root = __dirname,
  express = require( 'express' ), // web framework
  path = require( 'path' ), // dealing with file paths
  mongoose = require( 'mongoose' ), // mongo DB
  bodyParser = require( 'body-parser' ),
  methodOveride = require( 'method-override' ),
  errorHandler = require( 'error-handler' );

// create server
var app = express();

    // Parses request body and populates request.body
    app.use( bodyParser.json() );
    // app.use( bodyParser.urlencoded() );

    // perform route lookup based on URL and http method
    app.use( methodOveride() );  // simulate DELETE and PUT

    // Where to serve static content
    app.use( express.static ( path.join( application_root, 'site' ) ) );

    // Show all errors in development
    // app.use( errorHandler() );
    app.get('/api/books', function( request, response ) {
        return BookModel.find( function( err, books ) {
            if ( !err ) {
                return response.send( books );
            } else {
                return console.log( err );
            }
        });
    });

    app.get('/api/books/:id', function( request, response ) {
        return BookModel.findById( request.params.id, function( err, book ) {
            if ( !err ) {
                return response.send( book );
            } else {
                return console.log( err );
            }
        });
    });

    app.post('/api/books', function( request, response ) {
        var book = new BookModel({
            title: request.body.title,
            author: request.body.author,
            releaseDate: request.body.releaseDate,
            keywords: request.body.keywords
        });
        book.save( function( err ) {
            if ( !err ) {
                return console.log( 'created' );
            } else {
                return console.log( err )
            }
        })
        return response.send( book );
    });

    app.put('/api/books/:id', function( request, response ) {
      return BookModel.findById( request.params.id, function( err, book ) {
        book.title = request.body.title;
        book.author = request.body.author;
        book.releaseDate = request.body.releaseDate;
        book.keywords = request.body.keywords;

        return book.save( function( err ) {
            if ( !err ) {
                return console.log( 'created' );
            } else {
                return console.log( err )
            }
        })
        return response.send( book );
      });
    });

    app.delete('/api/books/:id', function( request, response ) {
          return BookModel.findById( request.params.id, function( err, book ) {
              return book.remove(function( err ) {
                  if ( !err ) {
                      return response.send( '' );
                  } else {
                      console.log( err );
                  }
              });
          });
    });

    mongoose.connect( 'mongodb://localhost/library_database' );

var Keywords = new mongoose.Schema({
    keyword: String
});

var Book = mongoose.Schema({
    title: String,
    author: String,
    releaseDate: Date,
    keywords: [ Keywords ]
});

//models
var BookModel = mongoose.model( 'Book', Book );

//Start server
var port = 4711;
app.listen( port, function() {
    console.log('Listening on %d in %s', port, app.settings.env);
});
