const ProductModel = require('../models/productModel')

// get all products from DB
module.exports.getProducts = async (req, res) => {
    const products = await ProductModel.find()
    res.send(products)
}

// Function to get a single product by its ID
module.exports.getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ProductModel.findById(id);

        if (!product) {
            return res.status(404).send({ message: "Product not found" });
        }

        res.status(200).send(product);
    } catch (err) {
        console.error("Error fetching product by ID:", err);
        res.status(500).send({ error: err.message, msg: "Something went wrong!" });
    }
}

// save(create) a product 
module.exports.saveProduct = async (req, res) => {
    console.log(req.body); // Temporarily added for debugging purposes
    // Directly use req.body instead of destructuring it into { product }
    ProductModel.create(req.body)
        .then((data) => {
            console.log("Saved Successfully...")
            res.status(201).send(data)
        })
        .catch((err) => {
            console.log(err)
            res.send({ error: err, msg: "Something went wrong!" })
        });
}

// update a product
module.exports.updateProduct = (req, res) => {
    const { id } = req.params;
    // Update to directly use req.body for the update
    ProductModel.findByIdAndUpdate(id, req.body, { new: true }) // Added { new: true } to return the updated document
        .then((updatedProduct) => {
            if (!updatedProduct) {
                return res.status(404).send({ message: "Product not found" });
            }
            res.send(updatedProduct);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ error: err, msg: "Something went wrong!" });
        });
};

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

