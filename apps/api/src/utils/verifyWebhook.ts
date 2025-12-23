import crypto from "crypto";
import { config } from "../config";

export function verifyRazorpayWebhook(body: any, signature: string) {
  const expected = crypto
    .createHmac("sha256", config.razorpay.webhookSecret)
    .update(JSON.stringify(body))
    .digest("hex");

  return expected === signature;
}
