const express = require("express");
const productRouter = express.Router();
const {getProductList, getProductDetailById, updateProductById, deleteProductById, createProduct} = require("../controllers/product.controllers")
const { logFeature } = require("../middlewares/logger/log-feature");
const { checkEmpty, checkNegative} = require("../middlewares/validations/product.validation");

// Lấy danh sách products
productRouter.get("/",logFeature, getProductList);

//Lấy thông tin chi tiết product
productRouter.get("/:id", getProductDetailById);

// Thêm sản phẩm
productRouter.post("/", checkEmpty, checkNegative, createProduct);

// Cập nhật product
productRouter.put("/:id", checkNegative, updateProductById);

// Xóa product
productRouter.delete("/:id", deleteProductById);

module.exports = productRouter;