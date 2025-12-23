import { Router } from "express";
import { razorpay } from "../services/payment.service";
import { createOrder } from "../services/order.service";
import { isDeliverable } from "../services/geo.service";
import { v4 as uuid } from "uuid";

const router = Router();

function roundRupees(n: number) {
  // GST rounding: nearest rupee (you can change to Math.ceil if you prefer)
  return Math.round(n);
}

router.post("/create", async (req, res) => {
  const { phone, items, address } = req.body;

  if (!phone || !Array.isArray(items) || !address) {
    return res.status(400).json({ error: "Missing fields" });
  }
  if (!isDeliverable(address.lat, address.lng)) {
    return res.status(400).json({ error: "Outside delivery area" });
  }

  // Compute subtotal from items (authoritative)
  const subtotal = items.reduce((sum: number, it: any) => {
    const qty = Number(it.qty || 0);
    const price = Number(it.price || 0);
    return sum + qty * price;
  }, 0);

  const gstRate = Number(process.env.GST_RATE ?? "0.05");
  const gst = roundRupees(subtotal * gstRate);
  const total = subtotal + gst;

  const rpOrder = await razorpay.orders.create({
    amount: total * 100, // paise
    currency: "INR",
  });

  const orderId = uuid();

  await createOrder({
    id: orderId,
    phone,
    items,
    subtotal,
    gst,
    total,
    address,
    paymentStatus: "created",
    razorpayOrderId: rpOrder.id,
    createdAt: Date.now(),
  });

  res.json({
    orderId,
    razorpayOrderId: rpOrder.id,
    amount: total,
    gst,
    subtotal,
  });
});

export default router;
