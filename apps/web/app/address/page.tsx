"use client";

import { useEffect, useMemo, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { reverseGeocode } from "../../lib/api";
import { setJSON } from "../../lib/storage";
import { useRouter } from "next/navigation";

type Addr = { lat: number; lng: number; text: string };

const containerStyle = { width: "100%", height: "60vh" };

export default function AddressPage() {
  const router = useRouter();
  const [pos, setPos] = useState<{ lat: number; lng: number } | null>(null);
  const [text, setText] = useState<string>("Getting your location…");
  const [loadingText, setLoadingText] = useState<boolean>(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || "",
    libraries: ["places"],
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (p) => {
        const lat = p.coords.latitude;
        const lng = p.coords.longitude;
        setPos({ lat, lng });
        setLoadingText(true);
        try {
          const r = await reverseGeocode(lat, lng);
          setText(r.text);
        } finally {
          setLoadingText(false);
        }
      },
      () => {
        setText("Location permission denied. Please enable GPS and retry.");
      },
      { enableHighAccuracy: true, timeout: 12000 }
    );
  }, []);

  async function updateText(lat: number, lng: number) {
    setLoadingText(true);
    try {
      const r = await reverseGeocode(lat, lng);
      setText(r.text);
    } finally {
      setLoadingText(false);
    }
  }

  function confirm() {
    if (!pos) return;
    const addr: Addr = { lat: pos.lat, lng: pos.lng, text };
    setJSON("address", addr);
    router.push("/checkout");
  }

  const center = useMemo(() => pos || { lat: 26.8467, lng: 80.9462 }, [pos]);

  return (
    <div style={{ padding: 12 }}>
      <h1 style={{ marginBottom: 8 }}>Deliver to</h1>

      <div style={{ marginBottom: 10, opacity: 0.9 }}>
        {loadingText ? "Finding address…" : text}
      </div>

      {isLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
          {pos && (
            <Marker
              position={pos}
              draggable
              onDragEnd={async (e) => {
                const lat = e.latLng?.lat();
                const lng = e.latLng?.lng();
                if (!lat || !lng) return;
                setPos({ lat, lng });
                await updateText(lat, lng);
              }}
            />
          )}
        </GoogleMap>
      )}

      <div style={{ marginTop: 12 }}>
        <label style={{ fontSize: 12, opacity: 0.8 }}>Address details</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          style={{
            width: "100%",
            marginTop: 6,
            padding: 10,
            borderRadius: 10,
            border: "1px solid #ddd",
          }}
        />
      </div>

      <button
        onClick={confirm}
        style={{
          marginTop: 12,
          width: "100%",
          padding: 14,
          borderRadius: 12,
          border: 0,
          background: "black",
          color: "white",
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        Confirm location
      </button>
    </div>
  );
}
