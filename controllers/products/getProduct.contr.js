const ProductModel = require("../../database/models/Products");

const getProductController = async (req, res) => {
  try {
    const { id: _id } = req.params;

    if (!_id) {
      return res.status(400).json({
        message: "Identify of product is required",
      });
    }

    const product = await ProductModel.findById({ _id });

    res.status(200).json({
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  getProductController,
};
