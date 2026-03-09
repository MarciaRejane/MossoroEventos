import Image from "next/image";
import { NavDesktop } from "./nav-desktop";
import { NavMobile } from "./nav-mobile";

export default function Header() {
  return (
    <header className=" md:w-full pt-8 px-8">
      <div className="bg-blue-main flex items-center justify-between py-4 px-10 text-white rounded-lg w-full ">
        <div>
          <Image
            src="/assets/Logo.png"
            width={60}
            height={60}
            alt="Logo Mossoró cidade junina" />
        </div>

        <NavDesktop />
        <NavMobile />

        <button className="bg-blue-dark rounded-full py-2 px-5 text-bs">
          Login
        </button>
      </div>
    </header>
  )
}