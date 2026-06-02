"use client";
import { useState } from "react";
import type {
  Category,
  PlaceType,
  Place,
} from "@/src/features/explore-mossoro/types";
import { normalize } from "@/src/lib/utils";

export function useExplorer(places: Place[]) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [selectedType, setSelectedType] = useState<PlaceType | null>(null);
  const [search, setSearch] = useState<string>("");

  const filteredExplorer = places.filter((placeitem) => {
    const normalizedSearch = normalize(search.trim());

    const matchSearch =
      normalize(placeitem.title).includes(normalizedSearch) ||
      normalize(placeitem.category).includes(normalizedSearch) ||
      normalize(placeitem.type).includes(normalizedSearch);

    //(selectedCategory === null)Mostra todos, sem filtro | (placeitem.category === selectedCategory) so mostra os iguais a categoria clicada
    const matchCategory =
      selectedCategory === null || placeitem.category === selectedCategory;

    const matchType = selectedType === null || placeitem.type === selectedType;
    return matchSearch && matchCategory && matchType;
  });
  return {
    filteredExplorer,
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    selectedType,
    setSelectedType,
  };
}
