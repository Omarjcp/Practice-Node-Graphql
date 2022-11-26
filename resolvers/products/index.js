const {
  createProductController,
} = require("../../controllers/products/createProduct.contr");
const {
  deleteProductController,
} = require("../../controllers/products/deleteProduct.contr");
const {
  getProductController,
} = require("../../controllers/products/getProduct.contr");
const {
  listProductsController,
} = require("../../controllers/products/listProducts.contr");
const {
  updateProductController,
} = require("../../controllers/products/updateProduct.contr");

let resolvers = {
  listProducts: listProductsController,
  getProduct: getProductController,
  createProduct: createProductController,
  updateProduct: updateProductController,
  deleteProduct: deleteProductController,
};

module.exports = {
  resolvers,
};
