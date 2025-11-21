const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stock = new Schema({
  barberShopId: {
    type: mongoose.Types.ObjectId,
    ref: "BarberShops",
  },
  productId: {
    type: mongoose.Types.ObjectId,
    ref: "Products",
  },
  quantity: {
    type: Number,
    required: [true, "Quantity in stock is required"],
    default: 0,
  },
  minQuantity: {
    type: Number,
    required: [true, "Min quntity in stock is required"],
    default: 0,
  },
});

module.exports = mongoose.model("Stock", stock);
