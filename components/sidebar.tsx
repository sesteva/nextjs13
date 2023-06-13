import Link from "next/link"
import { buttonVariants } from "@cintui/button"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: NavItem[]
}

export function Sidebar({ items }: SidebarProps) {
  return (
    <div className="space-y-4 py-4">
      <div className="px-4 py-2">
        <div className="flex">
          <Icons.logo className="expanded h-12 w-12" />
          <h2 className="expanded px-2 text-3xl font-semibold tracking-tight">
            {siteConfig.name}
          </h2>
        </div>
        <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
          <Icons.logo className="collapsed h-6 w-6" />
        </h2>

        {items?.length ? (
          <nav className="space-y-1">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    prefetch={item.prefetch || true}
                    className={cn(
                      buttonVariants({
                        size: "sm",
                        variant: "ghost",
                      }),
                      "w-full justify-start"
                    )}
                  >
                    <span className="expanded">{item.title}</span>
                    <span className="collapsed">a</span>
                  </Link>
                )
            )}
          </nav>
        ) : null}
      </div>
    </div>
  )
}
