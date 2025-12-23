export type Address = {
  lat: number;
  lng: number;
  text: string;
};

export type OrderItem = {
  id: string;
  name: string;
  qty: number;
  price: number; // per item
};

export type Order = {
  id: string;
  phone: string;
  items: OrderItem[];
  subtotal: number;
  gst: number;
  total: number;
  address: Address;
  paymentStatus: "created" | "paid" | "failed";
  razorpayOrderId: string;
  createdAt: number;
};
