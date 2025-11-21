const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorie = new Schema({
  barberShopId: {
    type: mongoose.Types.ObjectId,
    ref: "BarberShops",
  },
  title: {
    type: String,
    required: [true, "Title caterogy is required"],
  },
});

module.exports = mongoose.model("Categorie", categorie);
