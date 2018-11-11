var express = require('express');
var app = express();
var cors = require('cors')


var bodyParser = require('body-parser');
app.use(cors({origin: '*'}));
var donationroute = require('./routes/donation')
var orgroute = require('./routes/org')
app.use(express.static('public'));
app.use(express.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended:true,limit: '50mb'}));
app.use('/donations',donationroute)
app.use('/org',orgroute)



var jwt=require('jsonwebtoken')


var port = process.env.PORT || 3000;

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*')
   res.header("Access-Control-Allow-Headers",'Content-Type, Authorization, Content-Length, X-Requested-With,Accept');
   res.header('Access-Control-Allow-Credentials', true)
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS")
    next();
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// If our applicatione encounters an error, we'll display the error and stacktrace accordingly.
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err);
});


var server = app.listen(port,function(){
  console.log('Server up and running on ',port)
})