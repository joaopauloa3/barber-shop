const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockOutput = new Schema({
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
    required: [true, "Quantity in stock output is required"],
    default: 0,
  },
  description: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("StockOutput", stockOutput);
