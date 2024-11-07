"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/ui/toggle-component"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { href: "#home", label: "Home" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#products", label: "Products" },
    { href: "#old-projects", label: "Old Projects" },
    { href: "#team", label: "Team" },
    { href: "#partners", label: "Partners" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact Us" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-gray-800 dark:text-white"
            >
              Our Business
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
            <div className="md:hidden ml-2">
              <Button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
