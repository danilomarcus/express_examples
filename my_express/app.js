var express = require("express");
var http    = require("http");
var app     = express();
var routes  = require('./routes');
var bodyParser  = require('body-parser');
var path = require('path');

// app.set('views', './views_dir'); // set custom views folder, if not ./views is default
app.set('view engine', 'pug');

app.use((function(req, res, next){
    req.name = 'Danilo';
    console.log('iam a custom MIDDLEWARE');
    next();
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
        extended: false
}));

// creating routes from express obj
app.get('/', function(req, res, next) {
    res.render('index', {
        message: 'Hello from my custom Express by ' + req.name
    });
    // res.send('Hello from my custom Express by ' + req.name );   
});

app.get('/world', function(req, res) {
    res.send('World');
});
// creating routes from express obj


app.use('/hello', routes);
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(function(err, req, res, next){
    res.status(500)
        .json({
            message: 'something is wrong'
        });
});

// app.listen(3000, function(){
//     console.log('Express started');
// });

http.createServer(app).listen(3001, function(){
    console.log('Express started');
});