var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var objectId = mongoose.Schema.Types.objectId;

var cart = new Schema({
    products:[{type: objectId, ref:'Product'}]
});

module.exports = mongoose.model('Cart', cart);