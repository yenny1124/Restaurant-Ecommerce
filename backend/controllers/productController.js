const ProductModel = require('../models/productModel')

// get all products from DB
module.exports.getProducts = async (req, res) => {
    const products = await ProductModel.find()
    res.send(products)
}

// save(create) a product 
module.exports.saveProduct = async (req, res) => {
    const { product } = req.body;

    ProductModel.create({ product })
        .then((data) => {
            console.log("Saved Successfully...")
            res.status(201).send(data)
        })
        .catch((err) => {
            console.log(err)
            res.send({ error: err, msg: "Something went wrong!" })
        })
}

// update a product
module.exports.updateProduct = (req, res) => {
    const { id } = req.params
    const { product } = req.body;

    ProductModel.findByIdAndUpdate(id, { product })
        .then(() => res.send("Updated successfully"))
        .catch((err) => {
            console.log(err)
            res.send({ error: err, msg: "Something went wrong!" })
        })
}

// delete a product
module.exports.deleteProduct = (req, res) => {
    const { id } = req.params

    ProductModel.findByIdAndDelete(id)
        .then(() => res.send("Deleted successfully"))
        .catch((err) => {
            console.log(err)
            res.send({ error: err, msg: "Something went wrong!" })
        })
}

