
import Image from "next/image";
import { FOOTER_DATA } from "@/src/config/footer";
import Link from "next/link";
import { Separator } from "../../ui/separator";
import { NAV_ITEMS } from "@/src/config/navigation";

export default function Footer() {


  return (
    < footer className="w-full bg-linear-to-b from-gray-1 to-blue-5 pt-16 pb-8 border-t border-blue-1" >
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/Logo.png"
                width={65}
                height={65}
                alt="Logo de mossoró eventos"
                className=""
              />
              <div className="text-blue-6">
                <h1 className="text-xl font-extrabold tracking-tighter">Mossoró <br /> Meu País</h1>
                <p>Cidade junina</p>
              </div>
            </div>

            <div className="flex gap-4 mt-2">
              {FOOTER_DATA.social.map((item, index) => {
                const Icon = item.icon
                return (
                  <Link key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-6 text-white rounded-full hover:bg-blue-4 "><Icon /></Link>
                )
              })}
            </div>
          </div>

          <nav className="flex flex-col">
            <h3 className="text-lg font-bold text-blue-6 mb-4">Navegação</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-blue-5 hover:text-blue-7 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col">
            <h3 className="text-blue-6 font-bold text-lg mb-4">Contato</h3>
            <div className="flex flex-col gap-4 text-blue-5">

              {FOOTER_DATA.contato.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex flex-col ">
                    <Link href={item.href}><Icon />{item.value}</Link>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="hidden lg:block"></div>
        </div>
        <div className="flex justify-center lg:absolute lg:right-8 lg:bottom-0 lg:mb-[33px]">
          <Image
            src="/assets/footer-igreja-branco.png"
            width={300}
            height={150}
            sizes="100vw"
            alt="Ilustração da igreja de Mossoró"
            className="opacity-60 h-32 lg:h-70 w-auto object-contain"
          />
        </div>

        <Separator className="bg-blue-2 mb-8" />
        <div className="flex flex-col  justify-between items-center gap-4 text-sm text-blue-3">
          <p>© {new Date().getFullYear()} Mossoró Meu País. Todos os direitos reservados.</p>
        </div>
      </div>

    </footer >
  )
}

