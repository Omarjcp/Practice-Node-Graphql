const express = require("express");
require("dotenv").config();
require("./database/index");

// Controllers
const {
  createProductController,
} = require("./controllers/products/createProduct.contr");
const {
  deleteProductController,
} = require("./controllers/products/deleteProduct.contr");
const {
  getProductController,
} = require("./controllers/products/getProduct.contr");
const {
  listProductsController,
} = require("./controllers/products/listProducts.contr");
const {
  updateProductController,
} = require("./controllers/products/updateProduct.contr");

const app = express();

const PORT = process.env.LOCAL_PORT;

// Middleware simulacion de roles para autorización
const isAdmin = (req, res, next) => {
  const isAdminHeaders = req.headers["is-admin"];

  if (isAdminHeaders) next();
  else res.status(401).json({ message: "access denied" });
};

const isUser = (req, res, next) => {
  const isUserHeaders = req.headers["is-user"];

  if (isUserHeaders) {
    req.user = true;
    next();
  } else {
    req.user = false;
    next();
  }
};

// Se aplica middleware para todos los endpoints
app.use(isUser);

// Endpoints
app
  .get("/products", listProductsController)
  .get("/products/:id", getProductController)
  .post("/products", isAdmin, createProductController)
  .patch("/products/:id", isAdmin, updateProductController)
  .delete("/products/:id", isAdmin, deleteProductController);

app.listen(PORT, () => {
  console.log(`Server running is port ${PORT}`);
});
