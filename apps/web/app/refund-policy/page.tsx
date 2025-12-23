export const metadata = {
  title: "Refund & Cancellation Policy | Burgonomics",
};

export default function RefundPolicy() {
  return (
    <main style={{ padding: 16, maxWidth: 920, margin: "0 auto", lineHeight: 1.65 }}>
      <h1 style={{ marginBottom: 8 }}>Refund & Cancellation Policy</h1>
      <p style={{ opacity: 0.8, marginTop: 0 }}>Last updated: 23 Dec 2025</p>

      <p>
        This policy applies to orders placed on the Burgonomics website for pickup or delivery in Lucknow.
        We try to resolve issues quickly and fairly.
      </p>

      <h2>1. Cancellations</h2>
      <ul>
        <li>
          You may request cancellation immediately after placing an order by calling{" "}
          <b>+91 8169941891</b>.
        </li>
        <li>
          If the order is already prepared/packed/dispatched, cancellation may not be possible.
        </li>
        <li>If cancellation is accepted, the refund (if prepaid) will be initiated as per below.</li>
      </ul>

      <h2>2. Refund eligibility</h2>
      <p>Refunds may be initiated in cases including (but not limited to):</p>
      <ul>
        <li>Order not delivered.</li>
        <li>Wrong items delivered.</li>
        <li>Severely damaged/spoiled item on delivery (to be reported promptly).</li>
      </ul>

      <h2>3. Partial refunds / replacements</h2>
      <p>
        Depending on the issue, we may offer a replacement, store credit, or a partial refund.
      </p>

      <h2>4. Refund processing timeline</h2>
      <ul>
        <li>Approved refunds are initiated to the original payment method via Razorpay.</li>
        <li>
          Typical timelines are <b>3–7 business days</b>, depending on bank/payment method.
        </li>
      </ul>

      <h2>5. How to request a refund</h2>
      <p>
        Contact us with your order details (phone number, order time, and issue description):
        <br />
        Phone: <b>+91 8169941891</b>
        <br />
        Email: <b>shubhramishra137@gmail.com</b>
      </p>

      <h2>6. Non-refundable situations</h2>
      <ul>
        <li>Minor taste preferences after delivery where the order is correct and safe.</li>
        <li>Incorrect address provided by the customer leading to non-delivery.</li>
        <li>Failure to accept delivery at the provided time/location.</li>
      </ul>
    </main>
  );
}