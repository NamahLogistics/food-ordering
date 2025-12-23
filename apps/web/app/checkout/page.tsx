"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getCart, loadCart, clearCart } from "../../lib/cart";
import { createOrder } from "../../lib/api";
import { getJSON, setJSON } from "../../lib/storage";
import { pay } from "../../lib/razorpay";

export default function Checkout() {
  const router = useRouter();
  const [phone, setPhone] = useState<string>("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    loadCart();
    setPhone(localStorage.getItem("phone") || "");
  }, []);

  const cart = getCart();
  const address = getJSON("address", null as any);

  const subtotal = useMemo(
    () => cart.reduce((s, i) => s + i.price * (i.qty || 1), 0),
    [cart]
  );

  async function placeOrder() {
    if (!address) return router.push("/address");
    if (!phone || phone.length < 10) return alert("Enter valid phone number");

    setBusy(true);
    try {
      localStorage.setItem("phone", phone);

      // Server computes GST + total and returns Razorpay order id + amount
      const created = await createOrder(cart, phone);

      // Pay EXACT server amount
      await pay(created.razorpayOrderId, created.amount);

      // Save to local order history (simple)
      const old = getJSON<any[]>("orders", []);
      setJSON("orders", [
        { id: created.orderId, items: cart, ...created, address, phone },
        ...old,
      ]);

      clearCart();
      router.push("/success");
    } catch (e: any) {
      alert(e?.message || "Order failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{ padding: 12 }}>
      <h1>Checkout</h1>

      <div style={{ marginTop: 12 }}>
        <div style={{ display: "flex", gap: 8 }}>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number"
            style={{
              flex: 1,
              padding: 12,
              borderRadius: 10,
              border: "1px solid #ddd",
            }}
          />
          <button
            onClick={() => router.push("/address")}
            style={{
              padding: "12px 14px",
              borderRadius: 10,
              border: "1px solid #ddd",
              background: "white",
            }}
          >
            {address ? "Change" : "Add Address"}
          </button>
        </div>

        {address && (
          <div style={{ marginTop: 8, fontSize: 13, opacity: 0.85 }}>
            Deliver to: {address.text}
          </div>
        )}
      </div>

      <div style={{ marginTop: 16 }}>
        <h3>Bill</h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        <div style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>
          GST will be added at payment (5%)
        </div>
      </div>

      <button
        onClick={placeOrder}
        disabled={busy || cart.length === 0}
        style={{
          marginTop: 16,
          width: "100%",
          padding: 14,
          borderRadius: 12,
          border: 0,
          background: "black",
          color: "white",
          fontSize: 16,
          fontWeight: 700,
          opacity: busy ? 0.7 : 1,
        }}
      >
        {busy ? "Processing…" : "Pay & Place Order"}
      </button>
    </div>
  );
}
