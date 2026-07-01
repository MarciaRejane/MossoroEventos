"use client"
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/src/components/ui/dialog";
import { CalendarView } from './calendar';
import { useCalendar } from '../../hook/useCalendar';
import { EventItem } from '@/src/@types/events';
import { EventListCalendar } from './EventListCalendar';
import { ScrollArea, ScrollBar } from '@/src/components/ui/scroll-area';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

type EventItemProps = {
  events: EventItem[]
}

export function CalendarViewModal({ events }: EventItemProps) {
  const { currentMonth, dayWithEvents, eventMonths, setCurrentMonth, totalEvents, labelCategorias } = useCalendar(events);

  return (
    <div>
      <Dialog>
        <DialogTrigger className="flex justify-center gap-2 items-center bg-brown-4 hover:bg-brown-3 text-white cursor-pointer flex-1 text-md rounded-lg p-2"><CalendarTodayOutlinedIcon sx={{ width: 18 }} />Ver Calendario</DialogTrigger>
        <DialogContent className="bg-white px-0">
          <ScrollArea className="lg:h-[35rem] h-full max-h-[30rem]">
            <DialogHeader className="px-5 py-4">
              <DialogTitle className="text-blue-5 font-bold text-xl">
                Calendário de Eventos
              </DialogTitle>
            </DialogHeader>
            <div className="mb-5 border border-gray-1"></div>

            <div className='px-6'>
              <CalendarView currentMonth={currentMonth} dayWithEvents={dayWithEvents} setCurrentMonth={setCurrentMonth} />
              <div className='flex flex-col rounded-xl bg-blue-1 text-blue-5 text-bs font-semibold p-6 space-y-4 mb-6'>
                <span>Resumo de {format(currentMonth, "MMMM", { locale: ptBR })}</span>
                <div className='flex flex-row gap-3'>
                  <div className='flex flex-col justify-center items-center bg-white p-5 w-full lg:w-35 rounded-lg'>
                    <span className='font-extrabold text-lg'>
                      {totalEvents}
                    </span>
                    <span className='font-medium text-md'>
                      Total
                    </span>
                  </div>
                  {labelCategorias.map(([categoria, quantidade]) => (
                    <div key={categoria} className='bg-white rounded-lg p-5 w-full lg:w-35 flex flex-col items-center'>
                      <span className='font-extrabold text-lg'>{quantidade}</span>
                      <span className='font-medium text-md'>{categoria}</span>
                    </div>
                  ))}
                </div>
              </div>

              <EventListCalendar events={eventMonths} />

            </div>
            <ScrollBar orientation='vertical' className="bg-gray-2 [&>div]:bg-brown-light [&>div]:rounded-full" />
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  )
}