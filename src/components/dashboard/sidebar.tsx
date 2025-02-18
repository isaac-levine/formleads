"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/mode-toggle";
import {
  MessageSquare,
  Settings,
  LayoutDashboard,
  ChevronRight,
  Menu,
} from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

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
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { user, isLoaded } = useUser();

  // Handle window resize
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="p-6 border-b">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
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
              onClick={() => setOpen(false)}
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
            <div className="flex flex-col truncate">
              {isLoaded ? (
                <>
                  <span className="text-sm font-medium truncate">
                    {user?.firstName} {user?.lastName}
                  </span>
                  <span className="text-xs text-muted-foreground truncate">
                    {user?.emailAddresses[0]?.emailAddress}
                  </span>
                </>
              ) : (
                <>
                  <div className="h-4 w-24 bg-muted animate-pulse rounded" />
                  <div className="h-3 w-32 bg-muted animate-pulse rounded mt-1" />
                </>
              )}
            </div>
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden fixed top-4 left-4 z-50"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="left" className="p-0 w-72">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </>
    );
  }

  return (
    <div className="hidden md:block w-80 border-r border-border h-screen fixed left-0 top-0 bg-background">
      <SidebarContent />
    </div>
  );
}
