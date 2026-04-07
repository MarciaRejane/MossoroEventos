import { Timeline } from "@/src/features/history/components/cardLineContainer/TimeLine";

export function HistoryTimeLineSection() {
  return (
    <section className=" py-10 px-8 space-y-10">
      <div className="flex flex-col justify-center items-center space-y-10 text-center px-8">
        <h2 className="text-blue-main text-xl font-bold">Uma História de Resistência</h2>
        <p className="text-gray-5 text-lg font-medium">Mossoró é uma das cidades mais importantes do Rio Grande do Norte, conhecida nacionalmente por seus feitos históricos pioneiros. A cidade foi palco de importantes conquistas sociais e políticas que marcaram a história do Brasil, consolidando-se como símbolo de coragem, liberdade e resistência.</p>
      </div>
      <Timeline />
    </section>
  )
}