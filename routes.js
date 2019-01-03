var express = require('express');
var productCtrl = require('./controller/productController');
var cartCtrl = require('./controller/cartController');
var saleItemCtrl = require('./controller/saleController');

var router = express.Router();

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swag-shop', {useNewUrlParser: true});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

var Wishlist = require('./model/wishlist');

// Products
router.route('/product').post(productCtrl.addProduct);
router.route('/product').get(productCtrl.getProducts);

// Cart
router.route('/cart').post(cartCtrl.createCart);
router.route('/cart').get(cartCtrl.getCart);
router.route('/cart/product/add').put(cartCtrl.addToCart);
router.route('/cart/product/remove').delete(cartCtrl.removeItemFromCart);

// Sale items
router.route('/sale-items').post(saleItemCtrl.createSaleItem);
router.route('/sale-items').get(saleItemCtrl.getSaleItems);
router.route('/sale-items/product/add').put(saleItemCtrl.addProductToSaleItems);
router.route('/sale-items/product/remove').delete(saleItemCtrl.removeItemFromSaleItems);
router.route('/sale-items/related-items/add').put(saleItemCtrl.addRelatedProductToSaleItems);
router.route('/sale-items/related-items/remove').delete(saleItemCtrl.removeItemFromSaleItems);

module.exports = router