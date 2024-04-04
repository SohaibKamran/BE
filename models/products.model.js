const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const Product = new Schema({
     name: {
        type: String
    },
     description: {
        type: String
    },
    price: {
        type: Number
    },
    image_url: {
        type: String
    },
    qty: {
        type: Number
    },
    is_deleted: {
        type: Boolean,
        default: false
    }
});

Product.plugin(mongoosePaginate);

module.exports = mongoose.model("Product", Product);