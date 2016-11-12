var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');

var PORT = process.env.port || 3000;

/*
*Initialize models
*
*/
var models = require('./models/models.js');

/*
*Initialize routes
*
*/
var index = require('./routes/index');
var tasks = require('./routes/tasks');
var auth  = require('./routes/authenticate')(passport);


/*
*Initialize database driver
* connect to mongodb
*/
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mytasks');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


//using a session
app.use(session({
    secret: 'x@239D@$!xQQaK)&#f@#$DFm$$@z)$$%^32'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//initializing passport and session
app.use(passport.initialize());
app.use(passport.session());



//declaring routes
app.use('/', index);
app.use('/auth', auth);
app.use('/api', tasks);


//initializing passport
var initPassport = require('./passport-init');
initPassport(passport);


/*/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});*/


app.listen(PORT, function(){
    console.log("App listening on port " + PORT);
});

module.exports = app;
