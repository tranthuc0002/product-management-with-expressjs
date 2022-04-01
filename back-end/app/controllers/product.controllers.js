const {getList, getDetail, create, update, deleteById} = require("../services/product.services");

const getProductList = async (req, res) => {
  const productList = await getList();
  if(productList){
    res.status(200).send(productList);
  }else{
    res.status(404).send("Not Found");
  }    
};

const getProductDetailById = async (req, res) => {
    const params = req.params;
    const id = params.id;  

    const product = await getDetail(id);

    if(product){
      res.status(200).send(product);
    }else{
      res.status(404).send("Not Found!");
    }
};

const createProduct = async (req, res) => {
    let product = req.body;
    const newProduct = await create(product);
    res.status(201).send(newProduct);
};

const updateProductById = async (req, res) => {
    const {id} = req.params;
    const product = req.body;
  
    const updatedProduct = await update(id, product);
  
    if(updatedProduct){
      res.status(200).send(updatedProduct);
    }else{
      res.status(404).send("Not Found!");
    }  
};

const deleteProductById = async (req, res) => {
    const {id} = req.params;
    const productDeleted = await deleteById(id);
    if(productDeleted){
      res.status(200).send(productDeleted);
    }else{
      res.status(404).send("Not Found!");
    }  
};

module.exports = {
    getProductList,
    getProductDetailById,
    createProduct,
    updateProductById,
    deleteProductById,
};