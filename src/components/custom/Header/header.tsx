"use client"

import Image from "next/image";
import { NavDesktop } from "./nav-desktop";
import { NavMobile } from "./nav-mobile";
// import { Button } from "../../ui/button";
// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Link from "next/link";
import { useAuth } from "@/src/features/auth/hook/useAuth";
import { logoutService } from "@/src/features/auth/services/auth.service";


export default function Header() {
  // const { isAuthenticated } = useAuth();


  // function handleLogout() {
  //   logoutService();
  //   window.location.href = "/login"
  // }
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-4 lg:px-8 px-2">
      <div className=" bg-white/90 backdrop-blur-md flex items-center justify-between py-2 px-6 text-blue-6 rounded-lg w-full pointer-events-auto shadow-lg shadow-gray-4">
        <div>
          <Link href="/">
            <Image
              src="/assets/Logo.png"
              width={65}
              height={65}
              alt="Logo Mossoró cidade junina" />
          </Link>
        </div>

        <NavDesktop />
        <NavMobile />

        {/* {isAuthenticated ? (
          <Button onClick={handleLogout} className="bg-blue-dark rounded-xl px-5 text-bs cursor-pointer">
            <LogoutOutlinedIcon sx={{ width: 20 }} />
            Sair
          </Button>

        ) : (

          //<Link href="/login">
          <Button onClick={handleLogout} className="bg-blue-dark rounded-full py-2 px-5 text-bs cursor-pointer">
            Login
          </Button>
          //</Link>
        )
        } */}

      </div>
    </header>
  )
}