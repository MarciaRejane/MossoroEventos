import Image from "next/image";
import { FOOTER_DATA } from "@/src/config/footer";
import Link from "next/link";

export default function Footer() {


  return (
    <footer className="bg-blue-main p-10  flex flex-col md:flex-row gap-10 justify-between">
      <div>
        <div>
          <Image
            src="/assets/Logo.png"
            width={60}
            height={60}
            sizes="100vw"
            alt="Logo de mossoró eventos"
            className="w-16 h-auto"
          />
          <div className="flex flex-col text-white mb-2">
            <h1 className="text-lg">Mossoró meu pais</h1>
            <p>Cidade junina</p>
          </div>
        </div>
      </div>

      <div className="text-white flex flex-col gap-6">
        <p className="text-lg font-bold">Contato:</p>
        {FOOTER_DATA.contato.map((item, index) => {
          const Icon = item.icon
          return (
            <div key={index} className="flex flex-col ">
              <Link href={"/"}><Icon />{item.value}</Link>
            </div>
          )
        })}

      </div>
      <div className="flex flex-col">
        <p className="text-lg text-white font-bold">Social:</p>
        <div className="flex flex-row gap-6 text-white">
          {FOOTER_DATA.social.map((item, index) => {
            const Icon = item.icon
            return (
              <Link key={index} href={item.href} target="_blank" rel="noopener noreferrer"><Icon /></Link>
            )
          })}
        </div>
      </div>
    </footer>
  )
}