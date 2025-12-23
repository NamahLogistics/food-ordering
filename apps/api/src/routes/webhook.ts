import { Router } from "express";
import crypto from "crypto";
import { markPaid } from "../services/order.service";
import { sendWhatsApp } from "../services/whatsapp.service";
import { collections } from "../db";
import { config } from "../config";

const router = Router();

router.post("/", async (req, res) => {
  const sig = req.headers["x-razorpay-signature"] as string;
  const rawBody = (req.body as Buffer).toString("utf8");

  const expected = crypto
    .createHmac("sha256", config.razorpay.webhookSecret)
    .update(rawBody)
    .digest("hex");

  if (expected !== sig) return res.status(400).send("Invalid signature");

  const parsed = JSON.parse(rawBody);
  const rpOrderId = parsed?.payload?.payment?.entity?.order_id;

  if (!rpOrderId) return res.status(200).json({ ok: true });

  await markPaid(rpOrderId);

  const snap = await collections.orders
    .where("razorpayOrderId", "==", rpOrderId)
    .limit(1)
    .get();

  if (!snap.empty) {
    await sendWhatsApp(snap.docs[0].data() as any);
  }

  res.json({ ok: true });
});

export default router;