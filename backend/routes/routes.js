const { Router } = require("express")
// Add saveProduct and deleteProduct to the imported functions
const { getProducts, saveProduct, updateProduct, deleteProduct } = require("../controllers/productController");

const router = Router()

router.get("/get", getProducts)
router.post("/save", saveProduct)
router.put("/update/:id", updateProduct)
router.delete("/delete/:id", deleteProduct)

module.exports = router;
