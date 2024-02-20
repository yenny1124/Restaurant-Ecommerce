const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    product: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    Price: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model("Product", productSchema)