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
    }
}