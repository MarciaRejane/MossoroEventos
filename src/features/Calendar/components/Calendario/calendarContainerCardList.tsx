"use client"

import { useCalendar } from "../../hook/useCalendar";
import { CalendarView } from "./calendarView";
import { EventListCard } from "./EventList";

export function CalendarContainerCardList() {
  const { currentMonth, dayWithEvents, eventMonths, setCurrentMonth } = useCalendar();
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <CalendarView currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} dayWithEvents={dayWithEvents} />
      <EventListCard events={eventMonths} />
    </div>
  )
}