var express = require('express');
var router = express.Router();

router.use((function(req, res, next){
    console.log('iam a Router custom MIDDLEWARE');
    next();
}));

router.get('/', function(req, res, next){
    // console.log(req)
    // res.send('hello dude')
    // testing error
    next(new Error('custom error'));
});

router.get('/[0-9]', function(req, res){
    // console.log(req)
});

// get with params
router.get('/params/:idade', function(req, res){
    res.json({
        params: req.params,
        host: req.hostname,
        headers: req.headers
    })
});
// post with params
router.post('/body', function(req, res){
    res.json(req.body)
});

router.get('/res',function(req, res){

    // res.status('201').send('test');
    res.status(201).json({
        name: "Danilo"
    });
    // res.render('index', {
    //     name: "Danilo",
    //     lastname: "Marcus",
    // });

});

module.exports = router
