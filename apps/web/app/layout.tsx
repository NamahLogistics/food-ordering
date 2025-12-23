import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <footer style={{ padding: 16, textAlign: "center", opacity: 0.85, fontSize: 12 }}>
  <a href="/privacy-policy">Privacy Policy</a> ·{" "}
  <a href="/terms-and-conditions">Terms</a> ·{" "}
  <a href="/refund-policy">Refund Policy</a> ·{" "}
  <a href="/contact-us">Contact</a>
</footer>
      <body>
        <header className="header">🍔 Your Brand</header>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

        {children}
      </body>
    </html>
  );
}
