var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swag-shop', {useNewUrlParser: true});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

var Product = require('./model/product');
var Wishlist = require('./model/wishlist');

// MARK: Add product
router.post('/product', function(req, res) {
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

// MARK: Fetch products
router.get('/product', function(req, res) {
    Product.find({}, function(err, products) {
        if (err) {
            res.status(500).send({
                error: "Product could not be found"
            });
        } else {
            res.status(200).send({
                products
            });
        }
    });
});

module.exports = router