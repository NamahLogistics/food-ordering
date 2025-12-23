"use client";
import { useEffect, useState } from "react";
import MenuCard from "../components/MenuCard";
import CartDrawer from "../components/CartDrawer";
import { getMenu } from "../lib/api";

export default function Home() {
  const [menu, setMenu] = useState<any[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    getMenu().then(setMenu);
  }, []);

  return (
    <>
      <div className="menu">
        {menu.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
      <button className="cart-btn" onClick={() => setCartOpen(true)}>
        View Cart
      </button>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
