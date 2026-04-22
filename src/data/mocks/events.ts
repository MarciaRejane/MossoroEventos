import type { EventItem } from "@/src/@types/events";

export const events: EventItem[] = [
  {
    id: "1",
    imageUrl: "/assets/chuva-de-bala.png",
    category: "Show",
    title: "Réveilon de Mossoró",
    date: new Date(2025, 11, 31),
    time: "00h",
    location: {
      name: "Praça da Convivência",
      lat: -5.192962782761798,
      lng: -37.34761671714554,
    },
  },

  {
    id: "2",
    imageUrl: "/assets/chuva-de-bala.png",
    category: "Show",
    title: "Encerramento Mossoró Cidade Junina",
    date: new Date(2026, 5, 29),
    time: "21h",
    location: {
      name: "Estação das Artes Elizeu Ventania",
      lat: -5.189633455365301,
      lng: -37.344628778439464,
    },
  },

  {
    id: "3",
    imageUrl: "/assets/chuva-de-bala.png",
    category: "Teatro",
    title: "Cantata de Natal",
    date: new Date(2026, 11, 19),
    time: "20h",
    location: {
      name: "Teatro Municipal Dix-Huit Rosado",
      lat: -5.190572476718729,
      lng: -37.34582307843935,
    },
  },
];
