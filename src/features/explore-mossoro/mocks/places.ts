import { Place } from "../types";

export const PLACES: Place[] = [
  // HOSPEDAGEM
  {
    id: "1",
    slug: "hotel-villa-oeste",
    title: "Hotel Villa Oeste",
    description:
      "Hotel moderno com piscina, restaurante e localização privilegiada.",
    imageUrl: "/assets/explorer/hotel-vila-oeste.jpg",
    images: [
      "/assets/explorer/villa-oeste-paisagem1.png",
      "/assets/explorer/villa-oeste-paisagem2.png",
    ],
    category: "Hospedagem",
    type: "Hotel",
    phone: "(84) 3323-0300",
    price: "280-380",
    rating: 4.4,
    tags: ["wi-fi", "piscina"],
    schedule: "24 horas",
    location: {
      address: "Av. Presidente Dutra, Mossoró - RN",
      lat: -5.20067,
      lng: -37.3401,
    },
  },

  {
    id: "2",
    slug: "thermas-hotel",
    title: "Thermas Hotel",
    description: "Hotel com área de lazer completa e águas termais.",
    imageUrl: "/assets/explorer/thermas-hotel.jpg",
    images: [
      "/assets/explorer/thermas-hotel-piscina.jpg",
      "/assets/explorer/thermas-hotel-quarto.jpg",
    ],
    category: "Hospedagem",
    type: "Hotel",
    phone: "(84) 3323-5000",
    price: "250-350",
    rating: 4.5,
    tags: ["wi-fi", "Piscina", "Estacionamento"],
    schedule: "24 horas",
    location: {
      address: "Av. Lauro Monte, Mossoró - RN",
      lat: -5.16791,
      lng: -37.35192,
    },
  },

  // TURISMO
  {
    id: "3",
    slug: "catedral-santa-luzia",
    title: "Catedral de Santa Luzia",
    description: "Principal igreja da cidade e símbolo religioso de Mossoró.",
    imageUrl: "/assets/conheca-historia.png",
    images: [
      "/assets/explorer/catedral-luzia-dentro.jpg",
      "/assets/explorer/catedral-luzia-altar.JPG",
    ],
    category: "Turismo",
    type: "Religioso",
    phone: "(84) 3321-3157",
    rating: 4.8,
    tags: ["Arquitetura Histórica", "Missas Diárias"],
    schedule: "06h às 18h",
    location: {
      address: "Centro, Mossoró - RN",
      lat: -5.19206,
      lng: -37.34136,
    },
  },

  // SAÚDE
  {
    id: "4",
    slug: "hospital-wilson-rosado",
    title: "Hospital Wilson Rosado",
    description: "Hospital referência em atendimento médico na região.",
    imageUrl: "/assets/explorer/hospital-wilson.png",
    images: [
      "/assets/explorer/banner-hospital-wilson.png",
      "/assets/explorer/hospital-wilson-fora.jpg",
    ],
    category: "Saúde",
    type: "Hospital",
    phone: "(84) 3318-9000",
    rating: 4.4,
    tags: ["Atendimento", "laboratório"],
    schedule: "24 horas",
    location: {
      address: "R. Pedro Velho, Mossoró - RN",
      lat: -5.18685,
      lng: -37.34635,
    },
  },

  // COMPRAS
  {
    id: "5",
    slug: "partage-shopping",
    title: "Partage Shopping Mossoró",
    description: "Principal centro comercial da cidade com lojas e cinema.",
    imageUrl: "/assets/explorer/shopping-partage.jpg",
    images: [
      "/assets/explorer/shopping-praca-alimentacao.jpeg",
      "/assets/explorer/shopping-cinema.jpg",
    ],
    category: "Compras",
    type: "Shopping",
    phone: "(84) 3312-4400",
    rating: 4.4,
    tags: ["Lojas", "Cinemas", "Praça de Alimentação"],
    schedule: "10h às 22h",
    location: {
      address: "Av. João da Escóssia, Mossoró - RN",
      lat: -5.17123,
      lng: -37.37616,
    },
  },

  // LAZER
  {
    id: "6",
    slug: "parque-da-crianca",
    title: "Parque da Criança",
    description: "Área de lazer com atividades recreativas e esportivas.",
    imageUrl: "/assets/explorer/parque-da-criança.jpg",
    images: [
      "/assets/explorer/parque-crianca-castelo1.jpg",
      "/assets/explorer/parque-crianca-lanchonete.jpg",
    ],
    category: "Lazer",
    type: "Parque",
    phone: "(84) 3315-4800",
    rating: 4.4,
    tags: ["Lanchonete", "Brinquedos", "Personagens De Desenhos"],
    schedule: "05h às 22h",
    location: {
      address: "Bom jardim, Mossoró - RN",
      lat: -5.187,
      lng: -37.34274,
    },
  },
];
