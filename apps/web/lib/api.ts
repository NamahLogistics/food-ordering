import { getJSON } from "./storage";

const API = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";

export async function reverseGeocode(lat: number, lng: number) {
  const r = await fetch(`${API}/geo/reverse?lat=${lat}&lng=${lng}`);
  if (!r.ok) throw new Error("Reverse geocode failed");
  return r.json() as Promise<{ text: string }>;
}

export async function createOrder(items: any[], phone: string) {
  const address = getJSON("address", null as any);
  if (!address) throw new Error("No address set");

  const r = await fetch(`${API}/order/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items, phone, address }),
  });

  const data = await r.json();
  if (!r.ok) throw new Error(data?.error || "Order create failed");
  return data as Promise<{
    orderId: string;
    razorpayOrderId: string;
    amount: number;
    gst: number;
    subtotal: number;
  }>;
}

export async function getMenu() {
  return [
    {
      id: "1",
      name: "Classic Burger",
      price: 149,
      image: "/images/burger.jpg"
    }
  ];
}
