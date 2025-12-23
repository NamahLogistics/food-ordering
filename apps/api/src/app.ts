import express from "express";
import cors from "cors";
import order from "./routes/order";
import webhook from "./routes/webhook";
import geo from "./routes/geo";

const app = express();
app.use(cors());

// normal JSON for most routes
app.use(express.json());

// Razorpay webhook MUST use raw body
app.use("/webhook/razorpay", express.raw({ type: "*/*" }), webhook);

app.use("/order", order);
app.use("/geo", geo);

export default app;