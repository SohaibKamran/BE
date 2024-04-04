const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const Order = new Schema({
    orderNumber: {
        type: Number,
        unique: true,
    },
     orderDetail: {
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

Order.plugin(mongoosePaginate);

module.exports = mongoose.model("Order", Order);