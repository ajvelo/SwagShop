var WishList = require('../model/wishlist');
var Product = require('../model/product');

module.exports = {
    createWishList : function(req, res) {
        var wishList = new WishList();
        wishList.title = req.body.title;
        wishList.save(function(err, newWishList) {
            if (err) {
                res.status(500).send({
                    error: "Could not create wishlist"
                });
            } else {
                res.status(200).send({
                    newWishList
                });
            }
        });
    },

    getWishList : function(req, res) {
        WishList.find({}).populate({path: 'products', model: "Product"}).exec(function(err, wishLists) {
            if (err) {
                res.status(500).send({
                    error: "WishList could not be found"
                });
            } else {
                res.status(200).send({
                    wishLists
                });
            }
        });
    },

    addProductToWishList : function(req, res) {
        Product.findOne({_id: req.body.productId}, function(err, product) {
            if (err) {
                res.status(500).send({
                    error: "Product could not be found"
                });
            } else {
                WishList.update({_id: req.body.wishListId}, {$addToSet: {products: product._id}},
                    function(err, wishList) {
                        if (err) {
                            res.status(500).send({
                                error: "Product could not be added to wishlist"
                            });
                        } else {
                            res.status(200).send({
                                message: "Successfully added to wish list",
                                wishList
                            });
                            console.log(wishList);
                        }
                    });
            }
        });
    }
}