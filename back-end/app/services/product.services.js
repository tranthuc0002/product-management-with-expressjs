const {Product} = require('../model');

let productList = [
  {
      "id": "1",
      "name" : "Cam",
      "amount" : 5,
      "price" : 12000,
      "sale" : "50%"
  },
  {
      "id": "2",
      "name" : "Táo",
      "amount" : 6,
      "price" : 13000,
      "sale" : "40%"
  },
  {
      "id": "3",
      "name" : "Quýt",
      "amount" : 7,
      "price" : 14000,
      "sale" : "30%"
  },
];

const getList = async () => {
    const productList = await Product.findAll();
    if(productList){
        return productList;
    }else{
        return false;
    }
};

const getDetail = async (id) => {
    const product = await Product.findOne({
        where: {
            id
        },
    });
    if(product){
        return product;
    }else{
        return false;
    }
};

const create = async (product) =>{
    const newProduct = await Product.create(product);
    return newProduct;
};

const update = async (id, product) => {
    const productUpdate = await getDetail(id);
    if(productUpdate){
        productUpdate.name = product.name;
        productUpdate.amount = product.amount;
        productUpdate.price = product.price;
        productUpdate.sale = product.sale;
        const productUpdated = await productUpdate.save();
      return productUpdated;
    }else{
      return false;
    }  
};

const deleteById = async (id) => {
    const productDelete = await getDetail(id);
    if(productDelete){
        await Product.destroy({
            where: {
                id,
            }
        });
      return productDelete;
    }else{
      return false;
    }  
};

module.exports = {
    getList,
    getDetail,
    create,
    update,
    deleteById,
};