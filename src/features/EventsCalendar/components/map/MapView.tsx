"use client"
import { EventItem } from '@/src/@types/events';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from "leaflet";
import { EventCard } from '@/src/components/custom/event/EventCard';

type MapViewProps = {
  events: EventItem[];
  selectedEvent: EventItem | null;
};

//Move o mapa quando clicado no evento
function ChangeView({ coords }: { coords: [number, number] }) {
  const map = useMap();

  useEffect(() => {
    map.setView(coords, 15); //Centraliza e da zoom
  }, [coords, map]);
  return null
}

const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Ícone vermelho quando selecionado
const activeIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export function MapView({ events, selectedEvent }: MapViewProps) {
  const position: [number, number] = [-5.19, -37.34];
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true} className='w-[10rem] h-[20rem] md:w-[20rem] md:h-[15rem] rounded-lg'>
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {events.map((item) => {
        const isSelected = selectedEvent?.id === item.id;
        return (
          <Marker key={item.id} position={[item.location.lat, item.location.lng]} icon={isSelected ? activeIcon : defaultIcon}>
            <Popup>
              <EventCard event={item} variant='map' />
            </Popup>
          </Marker>
        )
      })}
      {
        selectedEvent && (
          <ChangeView
            coords={[
              selectedEvent.location.lat,
              selectedEvent.location.lng,
            ]}
          />
        )
      }
    </MapContainer >
  )
}