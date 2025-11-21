const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sale = new Schema({
  barberShopId: {
    type: mongoose.Types.ObjectId,
    ref: "BarberShops",
    required: true,
  },
  collaboratorId: {
    type: mongoose.Types.ObjectId,
    ref: "Collaborators",
    required: true,
  },

  // Itens vendidos (produtos e serviços juntos)
  items: [
    {
      itemId: mongoose.Types.ObjectId, // productId OU serviceId
      type: {
        type: String,
        enum: ["product", "service"],
        required: true,
      },
      title: String,
      quantity: Number,
      unitPrice: Number,
      total: Number,
    },
  ],

  // Múltiplas formas de pagamento
  payments: [
    {
      method: {
        type: String,
        enum: ["pix", "debito", "credito", "dinheiro"],
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
    },
  ],

  total: Number,
  discount: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Sale", sale);
