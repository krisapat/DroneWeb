'use client'

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function Darkmode() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    // สลับระหว่าง "light" และ "dark"
    setTheme(theme === "light" ? "dark" : "light")
  }
  if (!mounted) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        variant="default" // ใช้ variant="default"
        size="icon"
        onClick={toggleTheme}
        className="group w-12 h-12 bg-white dark:bg-black rounded-md
             relative shadow-lg
             transition-colors hover:bg-gray-100 dark:hover:bg-gray-900"
      >
        {theme === "dark" ? (
          <Moon key="moon-icon" className="h-6 w-6 text-blue-500 transition-transform duration-300 md:group-hover:rotate-90" />
        ) : (
          <Sun key="sun-icon" className="h-6 w-6 text-orange-500 transition-transform duration-300 md:group-hover:rotate-90" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}