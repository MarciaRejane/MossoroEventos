"use client";

import { EventItem } from "@/src/@types/events";
import { useState } from "react";

export function useCalendar(events: EventItem[]) {
  const [currentMonth, setCurrentMonth] = useState(new Date()); // Guarda a data atual

  //filtra só os eventos do mês atual
  const eventMonths = events.filter((event) => {
    const dataEvento =
      event.date instanceof Date ? event.date : new Date(event.date); //transforma string em date
    //pega mes e ano do evento
    const mesEvento = dataEvento.getMonth();
    const anoEvento = dataEvento.getFullYear();

    //pega mês e ano selecionado
    const mesAtual = currentMonth.getMonth();
    const anoAtual = currentMonth.getFullYear();

    return mesEvento === mesAtual && anoEvento === anoAtual;
  });

  //Gera lista de dias que tem eventos
  const dayWithEvents = [
    ...new Set(
      eventMonths.map((dia) => {
        const dataEvento =
          dia.date instanceof Date ? dia.date : new Date(dia.date);
        //Pega só o dia do vento
        return dataEvento.getDate();
      }),
    ),
  ];

  const totalEvents = eventMonths.length;
  const categoryCount = eventMonths.reduce(
    (acc: Record<string, number>, event) => {
      acc[event.category] = (acc[event.category] || 0) + 1;

      return acc;
    },
    {},
  );

  const labelCategorias = Object.entries(categoryCount);

  return {
    labelCategorias,
    totalEvents,
    currentMonth,
    setCurrentMonth,
    eventMonths,
    dayWithEvents,
  };
}
