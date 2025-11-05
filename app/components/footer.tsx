"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [isDark, setIsDark] = useState(false)

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <span>© 2025 OpenBun Notes</span>
          <a href="#" className="hover:text-gray-900">
            About
          </a>
          <a href="#" className="hover:text-gray-900">
            Changelog
          </a>
          <a href="#" className="hover:text-gray-900">
            Contact
          </a>
          <a href="#" className="hover:text-gray-900">
            Legal
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsDark(!isDark)}
            className="text-gray-600 hover:text-gray-900"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </footer>
  )
}
