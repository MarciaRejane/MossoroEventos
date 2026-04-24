import type { EventItem } from "@/src/@types/events";

export const events: EventItem[] = [
  {
    id: "1",
    imageUrl: "/assets/feira-livro.png",
    category: "Cultura",
    description:
      "Evento literário com venda de livros, lançamentos, palestras e atividades culturais, reunindo autores, estudantes e a comunidade.",
    title: "Feira do Livro de Mossoró",
    date: new Date(2026, 9, 10),
    time: "18h",
    location: {
      name: "UERN",
      lat: -5.2004,
      lng: -37.3227,
    },
  },

  {
    id: "2",
    imageUrl: "/assets/chuva-de-bala.png",
    category: "Teatro",
    title: "Chuva de Bala no País de Mossoró",
    description:
      "Espetáculo teatral ao ar livre que retrata a resistência de Mossoró ao bando de Lampião em 1927, com encenação, música e efeitos especiais.",
    date: new Date(2026, 5, 15),
    time: "21h",
    location: {
      name: "Adro da Capela de São Vicente",
      lat: -5.1872,
      lng: -37.3448,
    },
  },

  {
    id: "3",
    imageUrl: "/assets/santa-luzia.png",
    category: "Religioso",
    title: "Festa de Santa Luzia",
    description:
      "Festa religiosa tradicional com novenas, missas e procissões em homenagem à padroeira de Mossoró, reunindo milhares de fiéis.",
    date: new Date(2026, 11, 13),
    time: "17h",
    location: {
      name: "Catedral de Santa Luzia",
      lat: -5.187,
      lng: -37.344,
    },
  },

  {
    id: "4",
    imageUrl: "/assets/festa-liberdade.png",
    category: "Cultura",
    title: "Festa da Liberdade",
    description:
      "Evento cívico-cultural que celebra marcos históricos de Mossoró, com desfiles, apresentações e atividades culturais.",
    date: new Date(2026, 8, 28),
    time: "19h",
    location: {
      name: "Centro de Mossoró",
      lat: -5.1875,
      lng: -37.3449,
    },
  },

  {
    id: "5",
    imageUrl: "/assets/festa-do-bode.png",
    category: "Feira",
    title: "Festa do Bode",
    description:
      "Feira agropecuária com exposição de animais, gastronomia regional, shows e atividades voltadas ao setor rural.",
    date: new Date(2026, 7, 14),
    time: "18h",
    location: {
      name: "Parque de Exposições Armando Buá",
      lat: -5.1783,
      lng: -37.3326,
    },
  },

  {
    id: "6",
    imageUrl: "/assets/liberdade.png",
    category: "Teatro",
    title: "Auto da Liberdade",
    description:
      "Espetáculo teatral que conta momentos históricos de Mossoró, como a abolição dos escravos e a resistência ao cangaço.",
    date: new Date(2026, 8, 30),
    time: "20h",
    location: {
      name: "Centro de Mossoró",
      lat: -5.1875,
      lng: -37.3449,
    },
  },

  {
    id: "7",
    imageUrl: "/assets/cidade-junina.png",
    category: "Festival",
    title: "Mossoró Cidade Junina",
    description:
      "Maior evento junino da cidade, com shows, quadrilhas, apresentações culturais e polos espalhados pelo Corredor Cultural.",
    date: new Date(2026, 5, 6),
    time: "18h",
    location: {
      name: "Corredor Cultural",
      lat: -5.1875,
      lng: -37.3449,
    },
  },
];
