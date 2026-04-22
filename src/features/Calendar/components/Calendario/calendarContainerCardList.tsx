"use client"

import { EventItem } from "@/src/@types/events";
import { useCalendar } from "../../hook/useCalendar";
import { CalendarView } from "./calendarView";
import { EventListCard } from "./EventList";

type EventItemProps = {
  events: EventItem[]
}

export function CalendarContainerCardList({ events }: EventItemProps) {
  const { currentMonth, dayWithEvents, eventMonths, setCurrentMonth } = useCalendar(events);
  return (
    <div className="flex flex-col md:flex-row gap-5">
      <CalendarView currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} dayWithEvents={dayWithEvents} />
      <EventListCard events={eventMonths} />
    </div>
  )
}