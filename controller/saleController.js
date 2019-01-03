var SaleItems = require('../model/saleItems');
var Product = require('../model/product')

module.exports = {
    createSaleItem : function(req, res) {
        var saleItems = new SaleItems();
        saleItems.save(function(err, newSaleItems) {
            if (err) {
                res.status(500).send({
                    error: "Could not create sale items"
                });
            } else {
                res.status(200).send({
                    newSaleItems
                });
            }
        });
    },

    getSaleItems : function(req, res) {
        SaleItems.find({}).populate({path:'products', model:"Product"}).populate({path: 'relatedItems', model: "Product"}).exec(function(err, saleItems) {
            if (err) {
                res.status(500).send({
                    error: "Sale items could not be found"
                });
            } else {
                res.status(200).send({
                    saleItems
                });
            }
        });
    },

    addProductToSaleItems : function(req, res) {
        Product.findOne({_id: req.body.productId}, function(err, product) {
            if (err) {
                res.status(500).send({
                    error: "Could not add product to sale items"
                });
            } else {
                SaleItems.update({_id: req.body.saleItemsId}, {$addToSet: {products:product._id}},
                    function(err,saleItems) {
                    if (err) {
                        res.status(500).send({
                            error: "Could not update sale items to add produt"
                        });
                    } else {
                        res.status(200).send({
                            message: "Product sucessfully added to sale items",
                            saleItems
                        });
                    }
                });
            }
        });
    },

    removeItemFromSaleItems : function(req, res) {
        Product.findOne({_id: req.body.productId}, function(err, product) {
            if (err) {
                res.status(500).send({
                    error: "Could not remove product from sale items"
                });
            } else {
                SaleItems.update({_id: req.body.saleItemsId}, {$pull: {products:product._id}},
                    function(err,saleItems) {
                    if (err) {
                        res.status(500).send({
                            error: "Could not update sale items to remove product"
                        });
                    } else {
                        res.status(200).send({
                            message: "Product sucessfully removed from cart",
                            saleItems
                        });
                    }
                });
            }
        });
    },

    addRelatedProductToSaleItems : function(req, res) {
        Product.findOne({_id: req.body.productId}, function(err,product) {
            if (err) {
                res.status(500).send({
                    error: "Could not add related item to sale items"
                })
            } else {
                SaleItems.update({_id:req.body.saleItemsId}, {$addToSet:{relatedItems:productId}},
                    function(err, saleItems) {
                        if (err) {
                            res.status(500).send({
                                error: "Could not update sale items to add related item"
                            })
                        } else {
                            res.status(200).send({
                                message: "Related item successfully added to sale items",
                                saleItems
                            })
                        }
                    });
            }
        });
    },

    removeRelatedProductFromSaleItems : function(req, res) {
        Product.findOne({_id: req.body.productId}, function(err,product) {
            if (err) {
                res.status(500).send({
                    error: "Could not remove related item to sale items"
                })
            } else {
                SaleItems.update({_id:req.body.saleItemsId}, {$pull:{relatedItems:productId}},
                    function(err, saleItems) {
                        if (err) {
                            res.status(500).send({
                                error: "Could not update sale items to remove related item"
                            })
                        } else {
                            res.status(200).send({
                                message: "Related item successfully removed to sale items",
                                saleItems
                            })
                        }
                    });
            }
        });
    }
}