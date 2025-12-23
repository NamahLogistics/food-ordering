import { config } from "../config";

export function isDeliverable(lat: number, lng: number): boolean {
  const R = 6371;
  const dLat = ((lat - config.store.lat) * Math.PI) / 180;
  const dLng = ((lng - config.store.lng) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(config.store.lat * Math.PI / 180) *
      Math.cos(lat * Math.PI / 180) *
      Math.sin(dLng / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance <= config.store.radiusKm;
}
