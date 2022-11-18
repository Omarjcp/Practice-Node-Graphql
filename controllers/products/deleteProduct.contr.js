const ProductModel = require("../../database/models/Products");

const deleteProductController = async (req, res) => {
  try {
    const { id: _id } = req.params;

    if (!_id) {
      return res.status(400).json({
        message: "Identify of product is required",
      });
    }

    const productDeleted = await ProductModel.deleteOne({ _id });

    if (!productDeleted.deletedCount) {
      return res.status(400).json({
        message: "Element to delete not exist",
      });
    }

    res.status(200).json({
      message: "Product deleted successful",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  deleteProductController,
};
