import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Bell, Menu, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sidebar } from "@/components/layout/sidebar";

export function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        {isSidebarOpen ? (
          <div className="fixed inset-0 z-40 lg:hidden">
            <button
              type="button"
              className="absolute inset-0 bg-foreground/30"
              aria-label="Close navigation"
              onClick={() => setIsSidebarOpen(false)}
            />
            <div className="relative z-10">
              <Sidebar onNavigate={() => setIsSidebarOpen(false)} />
            </div>
          </div>
        ) : null}
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur md:px-6">
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation" onClick={() => setIsSidebarOpen(true)}>
              <Menu />
            </Button>
            <div className="relative hidden w-full max-w-md md:block">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="h-9 pl-9" placeholder="Search projects, pipelines, or documents" />
            </div>
            <div className="ml-auto flex items-center gap-3">
              <Button variant="ghost" size="icon" aria-label="Notifications">
                <Bell />
              </Button>
              <Separator orientation="vertical" className="hidden h-8 md:block" />
              <div className="hidden text-right md:block">
                <p className="text-sm font-medium">Local Admin</p>
                <p className="text-xs text-muted-foreground">Workspace Owner</p>
              </div>
              <Avatar>
                <AvatarFallback>LA</AvatarFallback>
              </Avatar>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
