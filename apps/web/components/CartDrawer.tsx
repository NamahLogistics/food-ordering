import { getCart } from "../lib/cart";
import { useRouter } from "next/navigation";

export default function CartDrawer({ open, onClose }: any) {
  const router = useRouter();
  const cart = getCart();

  if (!open) return null;

  return (
    <div className="drawer">
      <h2>Your Cart</h2>
      {cart.map((i, idx) => (
        <div key={idx}>
          {i.name} × {i.qty}
        </div>
      ))}
      <button onClick={() => router.push("/checkout")}>
        Checkout
      </button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
