"use client";

import { useEffect, useState } from "react";

type UserLocation = {
  lat: number;
  lng: number;
};
export function useUserLocation() {
  const [location, setLocation] = useState<UserLocation | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Erro ao obter localização:", error);
      },
    );
  }, []);

  return location;
}
