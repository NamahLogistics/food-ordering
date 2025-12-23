export const metadata = {
  title: "Terms & Conditions | Burgonomics",
};

export default function TermsAndConditions() {
  return (
    <main style={{ padding: 16, maxWidth: 920, margin: "0 auto", lineHeight: 1.65 }}>
      <h1 style={{ marginBottom: 8 }}>Terms & Conditions</h1>
      <p style={{ opacity: 0.8, marginTop: 0 }}>Last updated: 23 Dec 2025</p>

      <p>
        These Terms & Conditions (“Terms”) govern your use of the Burgonomics website and the
        placing of orders for pickup or delivery. By accessing the website or placing an order,
        you agree to these Terms.
      </p>

      <h2>1. Service</h2>
      <ul>
        <li>Burgonomics provides online menu browsing and order placement for pickup/delivery in Lucknow.</li>
        <li>Delivery is subject to serviceable area and operational availability.</li>
      </ul>

      <h2>2. Orders</h2>
      <ul>
        <li>Orders are accepted subject to item availability and operational constraints.</li>
        <li>We may contact you for substitutions if an item is unavailable.</li>
        <li>
          We may cancel an order in cases including (but not limited to) unavailability, suspected fraud,
          incorrect address, or inability to reach the customer.
        </li>
      </ul>

      <h2>3. Pricing & Taxes</h2>
      <ul>
        <li>All prices are displayed in INR.</li>
        <li>
          Applicable taxes (including <b>GST</b>) are added to the final payable amount at checkout/payment.
        </li>
        <li>Prices and offers may change without prior notice.</li>
      </ul>

      <h2>4. Payments</h2>
      <ul>
        <li>Payments are processed through Razorpay (payment gateway).</li>
        <li>We do not store your card/UPI credentials.</li>
        <li>
          Payment success depends on factors including bank authorization, network availability, and Razorpay systems.
        </li>
      </ul>

      <h2>5. Delivery & Pickup</h2>
      <ul>
        <li>Delivery times are estimates and may vary due to traffic, weather, and peak demand.</li>
        <li>Please ensure someone is available to receive the order at the provided address.</li>
        <li>For pickup orders, please arrive within a reasonable time after confirmation.</li>
      </ul>

      <h2>6. Customer responsibilities</h2>
      <ul>
        <li>Provide accurate phone number and delivery details for order fulfillment.</li>
        <li>Ensure the delivery location is accessible and safe for delivery personnel.</li>
        <li>Check your order at delivery/pickup and report issues promptly.</li>
      </ul>

      <h2>7. Refunds & cancellations</h2>
      <p>
        Refunds and cancellations are governed by our Refund & Cancellation Policy available at{" "}
        <a href="/refund-policy">/refund-policy</a>.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Burgonomics shall not be liable for indirect, incidental,
        special, or consequential damages. Our liability, if any, is limited to the order amount paid.
      </p>

      <h2>9. Contact</h2>
      <p>
        For support:
        <br />
        Phone: <b>+91 8169941891</b>
        <br />
        Email: <b>shubhramishra137@gmail.com</b>
      </p>
    </main>
  );
}