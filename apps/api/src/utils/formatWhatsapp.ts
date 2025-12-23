import { Order } from "../types";

export function formatWhatsapp(order: Order): string {
  const items = order.items
    .map(i => `• ${i.name} x${i.qty} — ₹${i.price * i.qty}`)
    .join("\n");

  return (
`🧾 NEW DIRECT ORDER

📞 ${order.phone}

${items}

🧾 Subtotal: ₹${order.subtotal}
🧾 GST (5%): ₹${order.gst}
💰 Total: ₹${order.total}

📍 ${order.address.text}
https://maps.google.com/?q=${order.address.lat},${order.address.lng}
`
  );
}
