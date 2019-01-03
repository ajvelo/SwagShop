var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var objectId = mongoose.Schema.Types.ObjectId;

var saleItems = new Schema({
    products:[{type: objectId, ref:'Product'}],
    relatedItems:[{type: objectId, ref: 'Product'}]
});

module.exports = mongoose.model('SaleItems', saleItems);