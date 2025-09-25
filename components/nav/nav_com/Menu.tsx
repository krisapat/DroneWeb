"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { MenuIcon } from "@/components/ui/MenuIcon"
import { menuLink } from "@/utils/menuLink"

const Menu = () => {
    const pathname = usePathname()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
                <Button variant="outline" className="p-2">
                    <MenuIcon />
                    <span className="sr-only">Toggle profile</span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent >
                <DropdownMenuLabel>My Profile</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {menuLink
                    .map((item) => {
                        const isActive =
                            item.path === "/"
                                ? pathname === "/"
                                : pathname.startsWith(item.path)

                        return (
                            <DropdownMenuItem key={item.path} asChild>
                                <Link
                                    href={item.path}
                                    className={cn(
                                        "px-4 py-2 rounded-md transition-color duration-300 hover:!bg-primary-foreground hover:!text-white kanitFont",
                                        isActive ? "text-white font-semibold transition-color bg-primary hover:!bg-primary" : ""
                                    )}
                                >
                                    {item.name}
                                </Link>
                            </DropdownMenuItem>
                        )
                    })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Menu
