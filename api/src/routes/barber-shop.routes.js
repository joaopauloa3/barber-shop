const express = require("express");
const router = express.Router();
const BarberShop = require("../models/barber-shop");

router.post("/", async (req, res) => {
  try {
    const barberShop = await new BarberShop(req.body).save();
    res.json({ barberShop });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
