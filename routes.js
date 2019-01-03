var express = require('express');
var productCtrl = require('./controller/productController');

var router = express.Router();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swag-shop', {useNewUrlParser: true});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

var Product = require('./model/product');
var Wishlist = require('./model/wishlist');

// MARK: Add product
router.route('/product').post(productCtrl.addProduct);
router.route('/product').get(productCtrl.getProducts);

module.exports = router