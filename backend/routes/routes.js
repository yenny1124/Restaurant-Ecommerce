const { Router } = require("express")
const { getProducts, updateProduct } = require("../controllers/productController")

const router = Router()

router.get("/get", getProducts)
router.post("/save", saveProduct)
router.put("/update/:id", updateProduct)
router.delete("/delete/:id", deleteProduct)

module.exports = router;
