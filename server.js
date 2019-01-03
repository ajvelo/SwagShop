var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swag-shop', {useNewUrlParser: true});

var Product = require('./model/product');
var Wishlist = require('./model/wishlist');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// MARK: Add product
app.post('/product', function(req, res) {
    var product = new Product();
    product.title = req.body.title;
    product.price = req.body.price;
    product.save(function(err, savedProduct) {
        if (err) {
            res.status(500).send({
                error: "Could not save product"
            });
        } else {
            res.status(200).send({
                savedProduct
            });
        }
    });
});

app.listen(3000, function() {
    console.log('Running on port 3000..');
});
