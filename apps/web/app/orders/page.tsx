"use client";
import { useEffect, useState } from "react";
import ReorderCard from "../../components/ReorderCard";

export default function Orders() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem("orders") || "[]"));
  }, []);

  return (
    <>
      <h1>Your Orders</h1>
      {orders.map(o => (
        <ReorderCard key={o.id} order={o} />
      ))}
    </>
  );
}
