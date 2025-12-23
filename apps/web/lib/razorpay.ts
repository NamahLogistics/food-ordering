export function pay(orderId: string, amount: number) {
  return new Promise<void>((resolve) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      amount: amount * 100,
      currency: "INR",
      order_id: orderId,
      handler: () => resolve()
    };
    // @ts-ignore
    new window.Razorpay(options).open();
  });
}
