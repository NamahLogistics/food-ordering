export const config = {
  port: Number(process.env.PORT || 4000),

  razorpay: {
    keyId: process.env.RAZORPAY_KEY_ID!,
    keySecret: process.env.RAZORPAY_KEY_SECRET!,
    webhookSecret: process.env.RAZORPAY_WEBHOOK_SECRET!,
  },

  whatsapp: {
    apiUrl: process.env.WHATSAPP_API_URL!,
    apiKey: process.env.WHATSAPP_API_KEY!,
    managerPhone: process.env.MANAGER_PHONE!,
  },

  store: {
    lat: Number(process.env.STORE_LAT),
    lng: Number(process.env.STORE_LNG),
    radiusKm: Number(process.env.DELIVERY_RADIUS_KM),
  },
};
