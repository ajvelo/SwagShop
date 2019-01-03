var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swap-shop');

var Product = require('./model/product');
var Wishlist = require('./model/wishlist');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/product', function(req, res) {
    var product = new Product();
});

app.listen(3000, function() {
    console.log('Running on port 3000..');
});
