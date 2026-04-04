const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    email: { type: String, required: true },
    amount: { type: Number, required: true },
    status: {
      type: String,
      default: "Hazırlanıyor",
      enum: ["Hazırlanıyor", "Kargoda", "Teslim Edildi", "İptal Edildi"],
    },
    items: { type: Array, default: [] }
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
