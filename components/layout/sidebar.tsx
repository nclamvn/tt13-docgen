'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/stores/sidebar-store'
import {
  FileText,
  LayoutDashboard,
  FolderOpen,
  Plus,
  Settings,
  LogOut,
  BookOpen,
  PanelLeftClose,
  PanelLeft,
  ChevronLeft,
} from 'lucide-react'
import { signOut } from 'next-auth/react'

const navigation = [
  { name: 'DASHBOARD', href: '/dashboard', icon: LayoutDashboard },
  { name: 'DỰ ÁN', href: '/projects', icon: FolderOpen },
  { name: 'TẠO MỚI', href: '/projects/new', icon: Plus },
  { name: 'THƯ VIỆN', href: '/knowledge', icon: BookOpen },
  { name: 'CÀI ĐẶT', href: '/settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const { collapsed, toggle } = useSidebarStore()

  return (
    <aside className={cn(
      "fixed left-0 top-0 z-40 h-screen border-r border-white/5 bg-primary-800 transition-all duration-300",
      collapsed ? "w-[72px]" : "w-64"
    )}>
      <div className="flex h-full flex-col">
        {/* Mobile: Back & Collapse row */}
        <div className="sm:hidden p-2 border-b border-white/10">
          <div className="flex items-center justify-between">
            {/* Back button - hidden when collapsed */}
            {!collapsed && (
              <Link
                href="/"
                className="p-2 text-white/60 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </Link>
            )}

            {/* Collapse/Expand button */}
            <button
              onClick={toggle}
              className={cn(
                "p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-all",
                collapsed ? "mx-auto" : "ml-auto"
              )}
            >
              {collapsed ? (
                <PanelLeft className="w-5 h-5" />
              ) : (
                <PanelLeftClose className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop: Logo & Collapse Button */}
        <div className="hidden sm:flex h-16 items-center justify-between px-4 border-b border-white/10">
          <Link href="/dashboard" className={cn(
            "flex items-center space-x-3 group overflow-hidden transition-all duration-300",
            collapsed ? "w-0 opacity-0" : "w-auto opacity-100"
          )}>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10
                          group-hover:bg-white/20 transition-all duration-300 flex-shrink-0">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <span className="font-heading text-lg font-bold text-white tracking-tight whitespace-nowrap">
              TT13 DocGen
            </span>
          </Link>

          {/* Collapse Button */}
          <button
            onClick={toggle}
            className={cn(
              "flex items-center justify-center h-9 w-9 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300",
              collapsed && "mx-auto"
            )}
          >
            {collapsed ? (
              <PanelLeft className="h-5 w-5" />
            ) : (
              <PanelLeftClose className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-0.5">
          {navigation.map((item) => {
            // Check exact match first
            const isExactMatch = pathname === item.href
            // Check if this is a parent route match (e.g., /projects matches /projects/123)
            // But exclude if a more specific nav item matches (e.g., /projects/new)
            const isParentMatch = item.href !== '/dashboard' &&
              pathname.startsWith(item.href + '/') &&
              !navigation.some(nav =>
                nav.href !== item.href &&
                nav.href.startsWith(item.href) &&
                (pathname === nav.href || pathname.startsWith(nav.href + '/'))
              )
            const isActive = isExactMatch || isParentMatch
            return (
              <Link
                key={item.name}
                href={item.href}
                title={collapsed ? item.name : undefined}
                className={cn(
                  'group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold tracking-wider transition-all duration-300',
                  isActive
                    ? 'bg-white/15 text-white shadow-lg shadow-black/10'
                    : 'text-white/80 hover:bg-white/10 hover:text-white hover:translate-x-1',
                  collapsed && "justify-center px-0 hover:translate-x-0"
                )}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-r-full" />
                )}

                <item.icon className={cn(
                  "h-[18px] w-[18px] transition-transform duration-300 flex-shrink-0",
                  !isActive && "group-hover:scale-110"
                )} />

                {!collapsed && <span>{item.name}</span>}
              </Link>
            )
          })}
        </nav>

        {/* User Info & Logout */}
        <div className="border-t border-white/10 p-3">
          <div className={cn(
            "flex items-center gap-3 px-2 py-2",
            collapsed && "flex-col gap-2 px-0"
          )}>
            {/* Avatar */}
            {session?.user?.image ? (
              <img
                src={session.user.image}
                alt={session.user.name || 'User'}
                className="h-9 w-9 rounded-full ring-2 ring-white/20 flex-shrink-0"
              />
            ) : (
              <div className="h-9 w-9 rounded-full bg-white/20 flex items-center justify-center ring-2 ring-white/10 flex-shrink-0">
                <span className="text-sm font-semibold text-white">
                  {session?.user?.name?.charAt(0) || 'U'}
                </span>
              </div>
            )}

            {/* Name & Email */}
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  {session?.user?.name || 'User'}
                </p>
                <p className="text-xs text-white/60 truncate">
                  {session?.user?.email || ''}
                </p>
              </div>
            )}

            {/* Logout Button */}
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              title="Đăng xuất"
              className="flex items-center justify-center h-9 w-9 rounded-xl text-white/60 hover:bg-red-500/20 hover:text-red-300 transition-all duration-300 flex-shrink-0"
            >
              <LogOut className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
