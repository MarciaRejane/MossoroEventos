import { NAV_ITEMS } from "@/src/config/navigation";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../../ui/sheet";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"
import Link from "next/link";
import Image from "next/image";

export function NavMobile() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button className="text-blue-5 cursor-pointer">
            <MenuOutlinedIcon />
          </button>
        </SheetTrigger>

        <SheetContent side="top" className="bg-white border-none">
          <SheetHeader>
            <Image
              src="/assets/Logo.png"
              width={40}
              height={40}
              alt="Logo"
              className="rounded-sm"
            />
            <SheetTitle className="text-white sr-only">
              Menu
            </SheetTitle>
          </SheetHeader>

          <nav className="px-2 text-blue-6">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex gap-2 py-2 text-bs hover:bg-blue-2 hover:rounded-md hover:px-1"
                >
                  <Icon sx={{ width: 20 }} />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}