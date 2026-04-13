import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD") //Separa acento da letra
    .replace(/[\u0300-\u036f]/g, ""); //remove acentos
}
