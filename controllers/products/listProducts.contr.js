const ProductModel = require("../../database/models/Products");

const listProductsController = async (req, res) => {
  try {
    const isUser = req.user;
    const productsDb = await ProductModel.find();

    if (!isUser) {
      const someProducts = productsDb.slice(0, productsDb.length / 2);

      return res.status(200).json({
        someProducts,
      });
    }

    res.status(200).json({
      productsDb,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  listProductsController,
};
