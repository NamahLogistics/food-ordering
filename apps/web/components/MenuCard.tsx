import { addToCart } from "../lib/cart";

export default function MenuCard({ item }: any) {
  return (
    <div className="menu-card">
      <img src={item.image} />
      <h3>{item.name}</h3>
      <p>₹{item.price}</p>
      <button onClick={() => addToCart(item)}>Add</button>
    </div>
  );
}
