export const metadata = {
  title: "Contact Us | Burgonomics",
};

export default function ContactUs() {
  return (
    <main style={{ padding: 16, maxWidth: 920, margin: "0 auto", lineHeight: 1.65 }}>
      <h1 style={{ marginBottom: 8 }}>Contact Us</h1>

      <p>
        <b>Business Name:</b> Burgonomics
        <br />
        <b>Service City:</b> Lucknow, Uttar Pradesh
      </p>

      <p>
        <b>Support Phone:</b> <a href="tel:+918169941891">+91 8169941891</a>
        <br />
        <b>Email:</b> <a href="mailto:shubhramishra137@gmail.com">shubhramishra137@gmail.com</a>
      </p>

      <p style={{ opacity: 0.9 }}>
        For order issues, please share your phone number used for the order and the approximate order time so we can
        locate your order quickly.
      </p>

      <hr style={{ margin: "18px 0" }} />

      <p style={{ fontSize: 13, opacity: 0.85 }}>
        If you need to cancel an order, please call as soon as possible after placing the order. Cancellation may not
        be possible once the order has been prepared/packed/dispatched.
      </p>
    </main>
  );
}