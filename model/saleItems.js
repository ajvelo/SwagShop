var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var objectID = mongoose.Schema.Types.objectID;

var saleItems = new Schema({
    products:[{type: objectId, ref:'Product'}],
    relatedItems:[{type: objectId, ref: 'Product'}]
});

module.exports = mongoose.model('SaleItems', saleItems);