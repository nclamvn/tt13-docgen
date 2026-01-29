'use client'

import { useSidebarStore } from '@/stores/sidebar-store'
import { cn } from '@/lib/utils'

export function MainContent({ children }: { children: React.ReactNode }) {
  const { collapsed } = useSidebarStore()

  return (
    <div className={cn(
      "transition-all duration-300",
      collapsed ? "pl-[72px]" : "pl-64"
    )}>
      {children}
    </div>
  )
}
