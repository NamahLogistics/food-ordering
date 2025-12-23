export const metadata = {
  title: "Privacy Policy | Burgonomics",
};

export default function PrivacyPolicy() {
  return (
    <main style={{ padding: 16, maxWidth: 920, margin: "0 auto", lineHeight: 1.65 }}>
      <h1 style={{ marginBottom: 8 }}>Privacy Policy</h1>
      <p style={{ opacity: 0.8, marginTop: 0 }}>Last updated: 23 Dec 2025</p>

      <p>
        This Privacy Policy describes how <b>Burgonomics</b> (“we”, “us”) collects, uses,
        shares, and protects information when you use our website to browse the menu and
        place food orders for pickup or delivery in Lucknow.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <b>Contact details:</b> Phone number to confirm and communicate about your order.
        </li>
        <li>
          <b>Delivery details:</b> Delivery address and/or approximate location to fulfill delivery.
        </li>
        <li>
          <b>Order details:</b> Items ordered, quantity, pricing, taxes, timestamps, and order status.
        </li>
        <li>
          <b>Payment status:</b> Payment success/failure and transaction references.
          <br />
          <span style={{ opacity: 0.9 }}>
            Note: We do not store your card/UPI credentials. Payments are processed by Razorpay.
          </span>
        </li>
        <li>
          <b>Device/technical data (basic):</b> Limited technical logs to keep the service reliable and secure.
        </li>
      </ul>

      <h2>How we use your information</h2>
      <ul>
        <li>To accept, prepare, pack, and deliver your order.</li>
        <li>To contact you about order confirmations, substitutions, delays, or delivery issues.</li>
        <li>To provide customer support and handle complaints/refund requests.</li>
        <li>To prevent fraud, abuse, or unauthorized transactions.</li>
        <li>To improve our menu, service quality, and customer experience.</li>
      </ul>

      <h2>Sharing of information</h2>
      <p>
        We share information only as necessary to complete your order:
      </p>
      <ul>
        <li>
          <b>Payment processing:</b> Razorpay processes payments and may handle payment-related information.
        </li>
        <li>
          <b>Operational communication:</b> Order details may be shared with store staff and delivery partners
          for order fulfillment.
        </li>
        <li>
          <b>Legal compliance:</b> We may disclose information if required by law or to protect our rights.
        </li>
      </ul>

      <h2>Data retention</h2>
      <p>
        We retain order-related information for as long as reasonably required for order history,
        customer support, accounting, and legal compliance. We may retain certain records longer
        if required by law.
      </p>

      <h2>Security</h2>
      <p>
        We use reasonable security measures to protect your information. However, no method
        of transmission or storage is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>You can choose not to provide certain details, but that may prevent order fulfillment.</li>
        <li>You can request help regarding your stored order history by contacting us.</li>
      </ul>

      <h2>Contact</h2>
      <p>
        If you have questions about this Privacy Policy, contact us:
        <br />
        <b>Burgonomics (Lucknow)</b>
        <br />
        Phone: <b>+91 8169941891</b>
        <br />
        Email: <b>shubhramishra137@gmail.com</b>
      </p>
    </main>
  );
}