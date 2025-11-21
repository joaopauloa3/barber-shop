const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const barberShop = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  logo: String,
  password: {
    type: String,
    default: "",
  },
  tel: String,
  address: {
    city: String,
    uf: String,
    zipCode: String,
    number: String,
    country: String,
  },
  geo: {
    type: String,
    coordinates: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

barberShop.index({ geo: "2dsphere" });

module.exports = mongoose.model("BarberShop", barberShop);
