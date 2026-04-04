const express = require("express");
const router = express.Router();
const Order = require("../models/Order.js");

// Bütün siparişleri getirme (GET)
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Siparişler getirilemedi." });
  }
});

// Sipariş durumu güncelleme (PUT)
router.put("/:id/status", async (req, res) => {
  try {
    const orderId = req.params.id;
    const { status } = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ error: "Sipariş bulunamadı." });
    }

    res.status(200).json(updatedOrder);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Sipariş güncellenemedi." });
  }
});

module.exports = router;
