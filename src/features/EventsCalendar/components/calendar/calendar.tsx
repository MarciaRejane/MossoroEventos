"use client"

import { Calendar } from "@/src/components/ui/calendar";
import { ptBR } from "date-fns/locale";

type CalendarViewProps = {
  currentMonth: Date;
  setCurrentMonth: (date: Date) => void;
  dayWithEvents: number[];
}

export function CalendarView({ currentMonth, dayWithEvents, setCurrentMonth }: CalendarViewProps) {
  const eventDates = dayWithEvents.map((day) => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    return new Date(year, month, day);
  })

  const modifiers = {
    event: eventDates,
  };

  return (
    <div>
      <div className="bg-gray-1 rounded-2xl px-5 mb-8">
        <Calendar
          locale={ptBR}
          month={currentMonth}
          onMonthChange={setCurrentMonth}
          modifiers={modifiers}
          className="py-5"
          classNames={{
            month_grid: "hidden",
            weekdays: "hidden",
            month_caption: "flex justify-center",
            caption_label: "text-blue-5 font-bold text-lg md:text-xl",
            button_next: "cursor-pointer text-blue-5",
            button_previous: "cursor-pointer text-blue-5",
          }}
        >
        </Calendar>
      </div>
    </div>
  )
}