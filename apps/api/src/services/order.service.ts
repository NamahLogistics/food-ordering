import { collections } from "../db";
import { Order } from "../types";

export async function createOrder(order: Order) {
  await collections.orders.doc(order.id).set(order);
}

export async function markPaid(razorpayOrderId: string) {
  const snap = await collections.orders
    .where("razorpayOrderId", "==", razorpayOrderId)
    .limit(1)
    .get();

  if (snap.empty) return;

  await snap.docs[0].ref.update({
    paymentStatus: "paid",
  });
}
