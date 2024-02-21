const ProductModel = require('../models/productModel')
const CategoryModel = require('../models/categoryModel'); // Adjust the path as necessary

// Function to get all categories
module.exports.getCategories = async (req, res) => {
    try {
        const categories = await CategoryModel.find({});
        res.status(200).json(categories);
    } catch (err) {
        console.error("Error fetching categories:", err);
        res.status(500).json({ error: err.message, msg: "Something went wrong!" });
    }
};

// Function to create a new category
module.exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        const categoryExists = await CategoryModel.findOne({ name });
        if (categoryExists) {
            return res.status(400).json({ message: "Category already exists" });
        }

        const category = new CategoryModel({ name });
        const savedCategory = await category.save();

        res.status(201).json(savedCategory);
    } catch (err) {
        res.status(500).json({ message: "An error occurred while creating the category", error: err });
    }
};

// Function to get a single category by its ID
module.exports.getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await CategoryModel.findById(id);

        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json(category);
    } catch (err) {
        console.error("Error fetching category by ID:", err);
        res.status(500).json({ error: err.message, msg: "Something went wrong!" });
    }
};

// Function to update a category by its ID
module.exports.updateCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedCategory = await CategoryModel.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json(updatedCategory);
    } catch (err) {
        console.error("Error updating category by ID:", err);
        res.status(500).json({ error: err.message, msg: "Something went wrong!" });
    }
};

// Function to delete a single category by its ID
module.exports.deleteCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await CategoryModel.findByIdAndDelete(id);

        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json({ message: "Category deleted successfully" });
    } catch (err) {
        console.error("Error deleting category by ID:", err);
        res.status(500).json({ error: err.message, msg: "Something went wrong!" });
    }
};


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

