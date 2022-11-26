const ProductModel = require("../../database/models/Products");

const listProductsController = () => {
  const productsDb = ProductModel.find();

  return productsDb;
};

module.exports = {
  listProductsController,
};
