var Product = require('../model/product');

module.exports = {
    addProduct : function(req, res) {
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
    },

    getProducts : function(req, res) {
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
    }
}