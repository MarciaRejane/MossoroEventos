"use client"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../../ui/navigation-menu"
import Link from "next/link";
import { NAV_ITEMS } from "@/src/config/navigation";

export function NavDesktop() {

  return (
    <div className="hidden lg:flex">
      <NavigationMenu>
        <NavigationMenuList>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon

            return (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink asChild className="text-md">
                  <Link href={item.href}>
                    <Icon sx={{ width: 20 }} className="text-blue-6" />
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
