let cart: any[] = [];

export function addToCart(item: any) {
  cart.push({ ...item, qty: 1 });
  save();
}

export function getCart() {
  return cart;
}

export function clearCart() {
  cart = [];
  save();
}

function save() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function loadCart() {
  const c = localStorage.getItem("cart");
  if (c) cart = JSON.parse(c);
}
