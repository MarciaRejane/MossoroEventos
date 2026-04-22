"use client";
import { useState } from "react";
import type { EventItem, EventCategory } from "@/src/@types/events";
import { normalize } from "@/src/lib/utils";

export function useEvents(events: EventItem[]) {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<EventCategory | null>(null);

  const filteredEvents = events.filter((event) => {
    const normalizedSearch = normalize(search.trim());
    //O texto digitado existe no titulo OU na localização
    const matchSearch =
      normalize(event.title).includes(normalizedSearch) ||
      normalize(event.location?.name ?? "").includes(normalizedSearch);

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
