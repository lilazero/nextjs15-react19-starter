import type { Metadata } from "next"
import { ThemeProvider } from "@/components/layoutComponents/theme-provider"
import "./globals.css"

import { Inter } from "next/font/google"

import { MaxWidthWrapper } from "@/layout/max-width-wrapper.component"
import Navigation from "@/components/Navigation"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sitech",
  description: "Sitech /Website",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={inter.className}
      suppressHydrationWarning={true}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={true}
        >
          <Navigation />
          <MaxWidthWrapper>{children}</MaxWidthWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
