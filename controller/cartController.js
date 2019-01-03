var Cart = require('../model/cart');
var Product = require('../model/product')

module.exports = {
    createCart : function(req, res) {
        var cart = new Cart();
        cart.save(function(err, newCart) {
            if (err) {
                res.status(500).send({
                    error: "Could not create cart"
                });
            } else {
                res.status(200).send({
                    newCart
                });
            }
        });
    },

    getCart : function(req, res) {
        Cart.find({}).populate({path:'products', model:"Product"}).exec(function(err, cart) {
            if (err) {
                res.status(500).send({
                    error: "Cart could not be found"
                });
            } else {
                res.status(200).send({
                    cart
                });
            }
        });
    },

    addToCart : function(req, res) {
        Product.findOne({_id: req.body.productId}, function(err, product) {
            if (err) {
                res.status(500).send({
                    error: "Could not add product to cart"
                });
            } else {
                Cart.update({_id: req.body.cartId}, {$addToSet: {products:product._id}},
                    function(err,cart) {
                    if (err) {
                        res.status(500).send({
                            error: "Could not update cart to add item"
                        });
                    } else {
                        res.status(200).send({
                            message: "Product sucessfully added to cart",
                            cart
                        });
                    }
                });
            }
        });
    },

    removeItemFromCart : function(req, res) {
        Product.findOne({_id: req.body.productId}, function(err, product) {
            if (err) {
                res.status(500).send({
                    error: "Could not remove product from the cart"
                });
            } else {
                Cart.update({_id: req.body.cartId}, {$pull: {products:product._id}},
                    function(err,cart) {
                    if (err) {
                        res.status(500).send({
                            error: "Could not update cart to remove item"
                        });
                    } else {
                        res.status(200).send({
                            message: "Product sucessfully removed from cart",
                            cart
                        });
                    }
                });
            }
        });
    }
}