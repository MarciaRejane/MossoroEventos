"use client";

import { useState } from "react";
import { events } from "@/src/data/mocks/events";

export function useCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date()); // Guarda a data atual

  //filtra só os eventos do mês atual
  const eventMonths = events.filter((event) => {
    const dataEvento = new Date(event.date); //transforma string em date
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
        const dataAtual = new Date(dia.date);
        return dataAtual.getDate();
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
