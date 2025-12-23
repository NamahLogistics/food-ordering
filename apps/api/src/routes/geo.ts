import { Router } from "express";
import fetch from "node-fetch";

const router = Router();

// Reverse geocode: lat,lng -> address text (uses GOOGLE_MAPS_KEY on server)
router.get("/reverse", async (req, res) => {
  const lat = Number(req.query.lat);
  const lng = Number(req.query.lng);

  if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
    return res.status(400).json({ error: "Invalid lat/lng" });
  }

  const key = process.env.GOOGLE_MAPS_KEY;
  if (!key) return res.status(500).json({ error: "GOOGLE_MAPS_KEY not set" });

  const url =
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${encodeURIComponent(
      key
    )}`;

  const r = await fetch(url);
  const data: any = await r.json();

  const text =
    data?.results?.[0]?.formatted_address ||
    `${lat.toFixed(6)}, ${lng.toFixed(6)}`;

  return res.json({ text });
});

export default router;
