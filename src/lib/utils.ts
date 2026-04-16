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

export function formatDate(date: Date) {
  if (!date) return "";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
