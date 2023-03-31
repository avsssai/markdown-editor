import { useState } from "react"
import Link from "next/link"
import { useMenuState } from "@/hooks/useToggleMenu"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

export function SiteHeader() {
  const [menuState, setMenuState] = useMenuState()
  return (
    <header className="sticky top-0 z-40 w-full border-b  border-b-stone-700 bg-stone-900 text-white">
      <div className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <nav className="flex items-center space-x-4">
          <div
            className="h-full w-full bg-zinc-500 p-5"
            onClick={() => setMenuState(!menuState)}
          >
            {menuState ? (
              <Icons.chevronsLeft size={24} />
            ) : (
              <Icons.menu size={24} />
            )}
          </div>
          <div className=" hidden items-center  px-8 lg:flex">
            <span className="tracking-[4px]">MARKDOWN</span>
            <Separator orientation="vertical" className="!bg-white" />
          </div>
          <div className="flex items-center gap-4 text-lg">
            <Icons.file />
            <div className="">
              <div className="hidden w-fit text-xs text-gray-400 md:block">
                Document Name
              </div>
              welcome.md
            </div>
          </div>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4 pr-3">
          <nav className="flex items-center space-x-5">
            <Icons.trash />
            <Button variant="save" className="md:hidden">
              <Icons.save />
            </Button>
            <Button
              variant="save"
              className="hidden items-center gap-2 md:flex"
            >
              <Icons.save /> Save Changes
            </Button>
            {/* <ThemeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  )
}
