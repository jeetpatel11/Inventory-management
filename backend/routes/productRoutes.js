const express= require("express")
const router=express.Router();

const { addProduct, updateProduct, getProduct, deleteProduct}=require("../controllers/productController");

router.post("/add",addProduct);
router.get("/",getProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);

module.exports=router