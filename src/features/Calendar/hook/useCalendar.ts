"use client";

import { EventItem } from "@/src/@types/events";
import { useState } from "react";

export function useCalendar(events: EventItem[]) {
  const [currentMonth, setCurrentMonth] = useState(new Date()); // Guarda a data atual

  //filtra só os eventos do mês atual
  const eventMonths = events.filter((event) => {
    const dataEvento = event.date; //transforma string em date
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
        //Pega só o dia do vento
        return dia.date.getDate();
      }),
    ),
  ];

  return {
    currentMonth,
    setCurrentMonth,
    eventMonths,
    dayWithEvents,
  };
}
