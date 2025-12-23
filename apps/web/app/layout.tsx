import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">🍔 Your Brand</header>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

        {children}
      </body>
    </html>
  );
}
