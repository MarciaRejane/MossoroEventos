"use client"

import { Calendar } from "@/src/components/ui/calendar"
import { Separator } from "@/src/components/ui/separator"
import { Badge } from "@/src/components/ui/badge"
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
    <div className="bg-white w-full px-8 rounded-2xl shadow-md shadow-gray-4 pb-5">
      <Calendar
        locale={ptBR}
        month={currentMonth}
        onMonthChange={setCurrentMonth}
        modifiers={modifiers}
        modifiersClassNames={{ event: `bg-blue-main rounded text-white` }}
        mode="single"
        className=" w-full [--cell-size:--spacing(1)] pt-15"
        classNames={{
          month_caption: "flex justify-center",
          caption_label: "text-blue-dark font-bold text-lg md:text-xl pb-10",
          day_button: "md:text-md font-semibold border border-gray-2 hover:border-blue-main hover:border focus:bg-blue-main focus:text-white cursor-pointer",
          weekday: "font-semibold w-full",
          button_next: "cursor-pointer",
          button_previous: "cursor-pointer"
        }}
      />
      <div className="md:px-8 space-y-5">
        <Separator className="bg-gray-4 py-0" orientation="horizontal" />
        <h2 className="text-lg font-medium text-blue-dark">Legendas:</h2>

        <div className="flex md:flex-row flex-wrap gap-2 space-x-3  items-center w-full text-bs font-medium">
          <div className="flex flex-row gap-1 items-center">
            <Badge className="rounded-full w-2 h-2 p-2 bg-purple-600" />
            <p>Show</p>
          </div>

          <div className="flex flex-row gap-1 items-center">
            <Badge className="rounded-full w-2 h-2 p-2 bg-red-300" />
            <p>Teatro</p>
          </div>

          <div className="flex flex-row gap-1 items-center">
            <Badge className="rounded-full w-2 h-2 p-2 bg-orange" />
            <p>Gastronomia</p>
          </div>

          <div className="flex flex-row gap-1 items-center">
            <Badge className="rounded-full w-2 h-2 p-2 bg-blue-500" />
            <p>Cultura</p>
          </div>

          <div className="flex flex-row gap-1 items-center">
            <Badge className="rounded-full w-2 h-2 p-2 bg-green-500" />
            <p>Infantil</p>
          </div>

          <div className="flex flex-row gap-1 items-center">
            <Badge className="rounded-full w-2 h-2 p-2 bg-yellow-400" />
            <p>Esporte</p>
          </div>

          <div className="flex flex-row gap-1 items-center">
            <Badge className="rounded-full w-2 h-2 p-2 bg-brown-soft" />
            <p>Educacional</p>
          </div>

          <div className="flex flex-row gap-1 items-center">
            <Badge className="rounded-full w-2 h-2 p-2 bg-green-700" />
            <p>Feira</p>
          </div>

          <div className="flex flex-row gap-1 items-center">
            <Badge className="rounded-full w-2 h-2 p-2 bg-fuchsia-300" />
            <p>Festival</p>
          </div>

          <div className="flex flex-row gap-1 items-center">
            <Badge className="rounded-full w-2 h-2 p-2 bg-indigo-400" />
            <p>Religioso</p>
          </div>
        </div>
      </div>
    </div >
  )
}