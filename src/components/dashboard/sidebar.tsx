"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";
import {
  HomeIcon,
  MessageSquare,
  Settings,
  LayoutDashboard,
  ChevronRight,
} from "lucide-react";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Messages",
    icon: MessageSquare,
    href: "/dashboard/messages",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-80 border-r border-border h-screen fixed left-0 top-0 bg-background">
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="p-6 border-b">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight">frontstep.ai</h1>
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4">
          <div className="space-y-1">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "group flex items-center rounded-lg px-4 py-3.5 text-sm font-medium transition-colors hover:bg-accent relative",
                  pathname === route.href
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                <route.icon
                  className={cn(
                    "h-5 w-5 mr-3 transition-colors",
                    pathname === route.href
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-primary"
                  )}
                />
                {route.label}
                {pathname === route.href && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-4">
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "h-10 w-10",
                  },
                }}
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium">Account</span>
                <span className="text-xs text-muted-foreground">
                  Manage your account
                </span>
              </div>
            </div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
