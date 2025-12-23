import fetch from "node-fetch";
import { config } from "../config";
import { Order } from "../types";
import { formatWhatsapp } from "../utils/formatWhatsapp";

export async function sendWhatsApp(order: Order) {
  const res = await fetch(config.whatsapp.apiUrl, {
    method: "POST",
    headers: {
      Authorization: config.whatsapp.apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: config.whatsapp.managerPhone,
      message: formatWhatsapp(order),
    }),
  });

  if (!res.ok) {
    throw new Error("WhatsApp send failed");
  }
}
