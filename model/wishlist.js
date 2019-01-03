var mongoose = require('mongoose');
var schema = mongoose.Schema;
var objectId = mongoose.Schema.Types.ObjectId;

var wishlist = new schema({
    title: { type: String, default: "Cool Wish List" },
    products: [{type: objectId, ref: "Product"}]

});

module.exports = mongoose.model('WishList', wishlist);