"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}
