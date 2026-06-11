export function getGoogleMapsSearchUrl(lat: number, lng: number) {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}

export function getGoogleMapsDirectionUrl(
  destinationLat: number,
  destinationLng: number,
) {
  return `https://www.google.com/maps/dir/?api=1&destination=${destinationLat},${destinationLng}`;
}

export function getWazeDirectionUrl(
  destinationLat: number,
  destinationLng: number,
) {
  return `https://waze.com/ul?ll=${destinationLat},${destinationLng}&navigate=yes`;
}

export function getUberDirectionUrl(
  name: string,
  destinationLat: number,
  destinationLng: number,
) {
  const encodedName = encodeURIComponent(name);
  return `https://m.uber.com/ul/?action=setPickup&dropoff[latitude]=${destinationLat}&dropoff[longitude]=${destinationLng}&dropoff[nickname]=${encodedName}`;
}
