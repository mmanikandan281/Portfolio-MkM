"use client";

import { useEffect } from "react";

import {
  SidebarProvider,
  SidebarInset,
  useSidebar,
} from "@/components/ui/sidebar";
import Header from "./Header";
import { AppSidebar } from "./AppSidebar";
import { useMediaQuery } from "@/hooks/use-media-query";

interface LayoutProps {
  children: React.ReactNode;
}

function LayoutContent({ children }: LayoutProps) {
  const { setOpen } = useSidebar();
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isLargeScreen) {
      setOpen(false);
    }
  }, [isLargeScreen, setOpen]);

  return (
    <div className="relative flex-1">
      <Header />
      <div className="flex-1">
        <AppSidebar />
        <SidebarInset className="pb-12">
          <main className="flex w-full flex-1 flex-col overflow-hidden">
            {children}
          </main>
        </SidebarInset>
      </div>
    </div>
  );
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider defaultOpen={false}>
      <LayoutContent>
        <main className="flex-1 bg-bodyColor">{children}</main>
      </LayoutContent>
    </SidebarProvider>
  );
}
