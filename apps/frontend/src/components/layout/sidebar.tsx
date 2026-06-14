import { Link, NavLink } from "react-router-dom";
import {
  BarChart3,
  BookOpenText,
  Boxes,
  Database,
  FileSearch,
  Layers3,
  LifeBuoy,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const primaryNav = [
  { label: "Overview", to: "/dashboard", icon: BarChart3 },
  { label: "Knowledge", to: "/dashboard/knowledge", icon: BookOpenText },
  { label: "Pipelines", to: "/dashboard/pipelines", icon: Layers3 },
  { label: "Retrieval", to: "/dashboard/retrieval", icon: FileSearch },
  { label: "Vector Stores", to: "/dashboard/vector-stores", icon: Database },
  { label: "Workspaces", to: "/dashboard/workspaces", icon: Boxes },
];

const secondaryNav = [
  { label: "Security", to: "/dashboard/security", icon: ShieldCheck },
  { label: "Settings", to: "/dashboard/settings", icon: Settings },
];

type SidebarProps = {
  onNavigate?: () => void;
};

export function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <aside className="flex h-screen w-72 shrink-0 flex-col border-r bg-card">
      <div className="flex h-16 items-center gap-3 border-b px-5">
        <Link to="/dashboard" className="flex min-w-0 items-center gap-3">
          <img src="/ragger-mark.svg" alt="RAGGER" className="size-9 rounded-md" />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">RAGGER</p>
            <p className="truncate text-xs text-muted-foreground">GraphRAG Console</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-5">
        <div>
          <p className="px-3 text-xs font-semibold uppercase tracking-normal text-muted-foreground">Platform</p>
          <div className="mt-2 space-y-1">
            {primaryNav.map((item) => (
              <NavItem key={item.label} {...item} onNavigate={onNavigate} />
            ))}
          </div>
        </div>

        <div>
          <p className="px-3 text-xs font-semibold uppercase tracking-normal text-muted-foreground">Administration</p>
          <div className="mt-2 space-y-1">
            {secondaryNav.map((item) => (
              <NavItem key={item.label} {...item} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
      </nav>

      <div className="border-t p-4">
        <div className="rounded-lg border bg-background p-4">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-medium">System status</p>
            <Badge variant="success">Healthy</Badge>
          </div>
          <p className="mt-2 text-xs leading-5 text-muted-foreground">Postgres, Redis, and Qdrant are ready for local development.</p>
          <Button variant="outline" size="sm" className="mt-4 w-full justify-start">
            <LifeBuoy />
            Support
          </Button>
        </div>
      </div>
    </aside>
  );
}

type NavItemProps = {
  label: string;
  to: string;
  icon: typeof BarChart3;
  onNavigate?: () => void;
};

function NavItem({ label, to, icon: Icon, onNavigate }: NavItemProps) {
  return (
    <NavLink
      to={to}
      onClick={onNavigate}
      className={({ isActive }) =>
        cn(
          "flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
          isActive && "bg-secondary text-secondary-foreground",
        )
      }
    >
      <Icon />
      <span className="truncate">{label}</span>
    </NavLink>
  );
}
