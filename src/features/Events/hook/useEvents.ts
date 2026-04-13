"use client";
import { useState } from "react";
import { events } from "@/src/features/Events/data/mocks/events";
import type { EventCategory } from "@/src/@types/events";
import { normalize } from "@/src/lib/utils";

export function useEvents() {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<EventCategory | null>(null);

  const filteredEvents = events.filter((event) => {
    const normalizedSearch = normalize(search.trim());
    //O texto digitado existe no titulo OU na localização
    const matchSearch =
      normalize(event.title).includes(normalizedSearch) ||
      normalize(event.location ?? "").includes(normalizedSearch);

    //(category === null)Mostra todos, sem filtro | (event.category === category) so mostra os iguais a categoria clicada
    const matchCategory = category === null || event.category === category;

    return matchSearch && matchCategory;
  });
  return {
    filteredEvents,
    search,
    setSearch,
    category,
    setCategory,
  };
}
