import { Activity, ArrowUpRight, CheckCircle2, Clock3, Database, FileText, Gauge, Layers3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  { label: "Documents indexed", value: "24,812", change: "+12.4%", icon: FileText },
  { label: "Active pipelines", value: "18", change: "4 running", icon: Layers3 },
  { label: "Vector collections", value: "7", change: "Qdrant", icon: Database },
  { label: "Retrieval quality", value: "92.6%", change: "+3.1%", icon: Gauge },
];

const jobs = [
  { name: "Customer support corpus", status: "Running", time: "2 min ago", progress: "72%" },
  { name: "Product documentation", status: "Complete", time: "18 min ago", progress: "100%" },
  { name: "Security policy archive", status: "Queued", time: "41 min ago", progress: "0%" },
];

export function DashboardPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">Local workspace</Badge>
            <Badge variant="outline">No auth connected</Badge>
          </div>
          <h1 className="mt-3 text-2xl font-semibold tracking-normal">Dashboard</h1>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">
            Monitor ingestion activity, retrieval readiness, and infrastructure health for your GraphRAG platform.
          </p>
        </div>
        <Button>
          New pipeline
          <ArrowUpRight />
        </Button>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardDescription>{metric.label}</CardDescription>
              <metric.icon className="size-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">{metric.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{metric.change}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <Card>
          <CardHeader>
            <CardTitle>Pipeline activity</CardTitle>
            <CardDescription>Recent ingestion runs and indexing progress.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {jobs.map((job) => (
              <div key={job.name} className="rounded-lg border p-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-medium">{job.name}</p>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <Clock3 className="size-3.5" />
                      {job.time}
                      <span>/</span>
                      {job.status}
                    </div>
                  </div>
                  <Badge variant={job.status === "Complete" ? "success" : "secondary"}>{job.progress}</Badge>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary" style={{ width: job.progress }} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Infrastructure</CardTitle>
              <CardDescription>Local service readiness.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {["PostgreSQL", "Redis", "Qdrant", "Backend API"].map((service) => (
                <div key={service} className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-600" />
                    <span className="truncate text-sm font-medium">{service}</span>
                  </div>
                  <Badge variant="success">Online</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Retrieval load</CardTitle>
              <CardDescription>Current request activity.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                {[42, 58, 35, 76, 64, 88, 54, 69, 81, 73, 92, 67].map((height, index) => (
                  <div key={index} className="flex h-32 flex-1 items-end rounded-sm bg-muted">
                    <div className="w-full rounded-sm bg-primary" style={{ height: `${height}%` }} />
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Activity className="size-4" />
                1,284 retrieval requests in the last 24 hours
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
