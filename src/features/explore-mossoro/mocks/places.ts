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
    address: "Av. Presidente Dutra, Mossoró - RN",
    phone: "(84) 3323-0300",
    price: "280-380",
    rating: 4.4,
    tags: ["wi-fi", "piscina"],
    schedule: "24 horas",
    latitude: -5.1894,
    longitude: -37.3441,
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
    address: "BR-304, Mossoró - RN",
    phone: "(84) 3323-5000",
    price: "250-350",
    rating: 4.5,
    tags: ["wi-fi", "Piscina", "Estacionamento"],
    schedule: "24 horas",
    latitude: -5.1831,
    longitude: -37.3481,
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
    address: "Centro, Mossoró - RN",
    phone: "(84) 3321-3157",
    rating: 4.8,
    tags: ["Arquitetura Histórica", "Missas Diárias"],
    schedule: "06h às 18h",
    latitude: -5.187,
    longitude: -37.3447,
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
    address: "Centro, Mossoró - RN",
    phone: "(84) 3318-9000",
    rating: 4.4,
    tags: ["Atendimento", "laboratório"],
    schedule: "24 horas",
    latitude: -5.1842,
    longitude: -37.3472,
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
    address: "Nova Betânia, Mossoró - RN",
    phone: "(84) 3312-4400",
    rating: 4.4,
    tags: ["Lojas", "Cinemas", "Praça de Alimentação"],
    schedule: "10h às 22h",
    latitude: -5.182,
    longitude: -37.35,
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
    address: "Centro, Mossoró - RN",
    phone: "(84) 3315-4800",
    rating: 4.4,
    tags: ["Lanchonete", "Brinquedos", "Personagens De Desenhos"],
    schedule: "05h às 22h",
    latitude: -5.185,
    longitude: -37.3455,
  },
];
