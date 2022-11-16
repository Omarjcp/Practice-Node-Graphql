const express = require("express");
const { products } = require("./db");
const app = express();

const PORT = 8080;

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

app
  .get("/products", async (req, res) => {
    const responseProducts = await products;

    if (!req.user) {
      const someProducts = responseProducts.slice(
        0,
        responseProducts.length / 2
      );

      return res.status(200).json({
        someProducts,
      });
    }

    return res.status(200).json({
      responseProducts,
    });
  })
  .get("/products/:id", async (req, res) => {
    const { id } = req.params;

    const responseProducts = await products;

    const productForId = responseProducts.find(
      (product) => product.id === parseInt(id)
    );

    res.status(200).json({
      product: productForId,
    });
  })
  .post("/products", isAdmin, async (req, res) => {
    const { name, description, amount, currency } = req.query;

    if (!name && !description && !amount && !currency) {
      return res.status(400).json({
        error: "Fields required",
      });
    }

    if (!req.user) {
      return res.status(401).json({ message: "access denied" });
    }

    const getProducts = async () => {
      let responseProducts = await products;
      return responseProducts;
    };

    let resProducts = await getProducts();

    const newProduct = {
      id: resProducts[resProducts.length - 1].id + 1,
      name,
      description,
      price: {
        amount: new Intl.NumberFormat().format(amount),
        currency,
      },
    };

    resProducts.push(newProduct);

    return res.status(200).json({
      newProduct,
    });
  })
  .patch("/products/:id", isAdmin, async (req, res) => {
    const { id } = req.params;
    const { name, description, amount, currency } = req.query;

    if (!id) {
      return res.status(400).json({
        error: "product id is required",
      });
    }

    if (!name && !description && !amount && !currency) {
      return res.status(400).json({
        error: "Any fields required",
      });
    }

    if (!req.user) {
      return res.status(401).json({ message: "access denied" });
    }

    const listProducts = async () => {
      let responseProducts = await products;
      return responseProducts;
    };

    const getProduct = async (id, products) => {
      let productToUpdate = products.find((product) => {
        return product.id === Number(id);
      });

      return productToUpdate;
    };

    let resProducts = await listProducts();

    let productToUpdate = await getProduct(id, resProducts);

    let updateProduct = {
      id: productToUpdate.id,
      name: name || productToUpdate.name,
      description: description || productToUpdate.description,
      price: {
        amount: new Intl.NumberFormat().format(
          amount || productToUpdate.price.amount
        ),
        currency: currency || productToUpdate.price.currency,
      },
    };

    const changeProduct = async (productUpdated) => {
      resProducts = await resProducts.filter((product) => {
        return product.id !== productUpdated.id;
      });

      resProducts.push(productUpdated);
    };

    await changeProduct(updateProduct);

    return res.status(200).json({
      resProducts,
    });
  });

app.listen(PORT, () => {
  console.log(`Server running is port ${PORT}`);
});
