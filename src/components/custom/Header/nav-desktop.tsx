"use client"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../../ui/navigation-menu"

import { NAV_ITEMS } from "@/src/config/navigation";

export function NavDesktop() {

  return (
    <div className="hidden md:flex">
      <NavigationMenu>
        <NavigationMenuList>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon

            return (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink key={item.href} className="text-md">
                  <Icon sx={{ width: 20 }} className="text-white" />
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
