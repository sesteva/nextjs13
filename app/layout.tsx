import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Sidebar } from "@/components/sidebar"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

import "@/styles/sidebar.css"

// DO NOT USE MSW WAY: I've left this is as a reminder to NOT do it.
// This runs on every route change and its prompt to error when combining msw+faker

// if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
//   console.info("Using MSW mocks....")
//   import("../msw");
// }

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
  modal: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  console.log("re-rendering layout")
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="hidden md:block">
              <div className="border-t">
                <div className="bg-background">
                  <div className="flex">
                    <input id="hide" type="checkbox" name="group" />
                    <div
                      className="flex flex-col duration-300 ease-in-out"
                      id="menu"
                    >
                      <label htmlFor="hide" id="open">
                        <Icons.panelLeftOpen className="float-right" />
                      </label>
                      <label htmlFor="hide" id="close">
                        <Icons.panelLeftClose className="float-right" />
                      </label>
                      <div className="pb-12 transition-all duration-300 ease-in-out">
                        <Sidebar items={siteConfig.mainNav} />
                      </div>
                    </div>

                    <div className="flex-1 border-l">
                      <div className="h-full px-4 py-6 lg:px-8">{children}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
