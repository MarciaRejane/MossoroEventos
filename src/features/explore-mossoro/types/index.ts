export type Category =
  | "Hospedagem"
  | "Gastronomia"
  | "Turismo"
  | "Saúde"
  | "Compras"
  | "Lazer";

export type PlaceType =
  | "Hotel"
  | "Pousada"
  | "Comida Regional"
  | "Churrascaria"
  | "Pizzaria"
  | "Japonesa"
  | "Patrimônio Histórico"
  | "Centro Cultural"
  | "Religioso"
  | "Hospital"
  | "Clínica"
  | "Shopping"
  | "Mercado"
  | "Artesanato"
  | "Parque"
  | "Teatro";

export interface Place {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: PlaceType;
  category: Category;
  rating: number;
  tags: string[];
  price?: string;
  imageUrl: string;
  address: string;
  phone: string;
  schedule: string;
  latitude: number;
  longitude: number;
}
