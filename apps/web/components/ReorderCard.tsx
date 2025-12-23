import { addToCart } from "../lib/cart";

export default function ReorderCard({ order }: any) {
  function reorder() {
    order.items.forEach(addToCart);
    location.href = "/checkout";
  }

  return (
    <div className="reorder">
      <p>₹{order.total}</p>
      <button onClick={reorder}>Order Again</button>
    </div>
  );
}
