const { Router } = require("express")
// Add saveProduct and deleteProduct to the imported functions
const { getProducts, getProductById, saveProduct, updateProduct, deleteProduct } = require("../controllers/productController");

const router = Router()

router.get("/get/products", getProducts)
router.get("/get/product/:id", getProductById);
router.post("/save/product", saveProduct)
router.put("/update/product/:id", updateProduct)
router.delete("/delete/product/:id", deleteProduct)

module.exports = router;
