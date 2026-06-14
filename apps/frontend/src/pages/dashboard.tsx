import { Activity, ArrowUpRight, CheckCircle2, Clock3, Database, FileText, MessageSquare, Search, ShieldCheck, Layers3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const overviewCards = [
  { label: "Knowledge bases", value: "12", icon: Database, tone: "bg-violet-50 text-violet-700" },
  { label: "Documents", value: "1,842", icon: FileText, tone: "bg-violet-50 text-violet-700" },
  { label: "Chunks", value: "412,198", icon: Layers3, tone: "bg-violet-50 text-violet-700" },
  { label: "Queries", value: "4,321", icon: Search, tone: "bg-violet-50 text-violet-700" },
  { label: "Accuracy", value: "96.8%", icon: ShieldCheck, tone: "bg-violet-50 text-violet-700" },
];

const knowledgeBases = [
  { name: "Enterprise handbook", source: "Confluence", items: "183 docs", freshness: "2h ago", status: "Live" },
  { name: "Customer support", source: "Zendesk", items: "94 docs", freshness: "5h ago", status: "Syncing" },
  { name: "Developer portal", source: "Github", items: "120 docs", freshness: "Yesterday", status: "Live" },
];

const documents = [
  { title: "RAG integration guide", type: "Guide", size: "1.2 MB", status: "Indexed" },
  { title: "Security review notes", type: "Notes", size: "340 KB", status: "Pending" },
  { title: "Analytics glossary", type: "Reference", size: "920 KB", status: "Indexed" },
];

const queries = [
  { text: "How do I configure vector search?", volume: "432", latency: "120ms" },
  { text: "What is the latest ingestion status?", volume: "318", latency: "105ms" },
  { text: "Show me knowledge base health", volume: "241", latency: "97ms" },
];

const activity = [
  { event: "Knowledge base synced", target: "Customer support", time: "3 min ago", status: "success" },
  { event: "Chunk reindex started", target: "Enterprise handbook", time: "12 min ago", status: "warning" },
  { event: "Query response improved", target: "Retrieval engine", time: "28 min ago", status: "success" },
  { event: "Document upload failed", target: "Security review notes", time: "47 min ago", status: "danger" },
];

const assistantMessages = [
  { author: "Assistant", text: "Your knowledge base health is stable. Accuracy is above your threshold.", time: "Just now" },
  { author: "You", text: "Show me the latest chunk coverage for enterprise docs.", time: "1 min ago" },
  { author: "Assistant", text: "Coverage is at 94.2% across active knowledge bases.", time: "2 min ago" },
];

export function DashboardPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-violet-100 text-violet-800 border-transparent">Workspace overview</Badge>
              <Badge variant="outline">Live data</Badge>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">RAGGER</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">Knowledge intelligence dashboard</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                Monitor your knowledge stores, document ingestion, retrieval performance, and AI chat readiness from one centralized console.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button className="bg-violet-600 hover:bg-violet-700">New knowledge base</Button>
            <Button variant="outline">Review activity</Button>
          </div>
        </div>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {overviewCards.map((item) => (
          <Card key={item.label} className="overflow-hidden">
            <CardContent className="flex items-center gap-4">
              <div className={`grid h-14 w-14 place-items-center rounded-2xl ${item.tone}`}>
                <item.icon className="size-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{item.label}</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">{item.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_0.95fr]">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Knowledge bases</CardTitle>
              <CardDescription>Current workspace sources and sync status.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {knowledgeBases.map((item) => (
                  <div key={item.name} className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-base font-semibold text-slate-950">{item.name}</p>
                      <p className="mt-1 text-sm text-slate-600">{item.source} · {item.items}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                      <span>{item.freshness}</span>
                      <Badge className={item.status === "Live" ? "bg-emerald-100 text-emerald-800 border-transparent" : "bg-violet-100 text-violet-800 border-transparent"}>{item.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent documents</CardTitle>
                <CardDescription>Latest content indexed and review status.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {documents.map((doc) => (
                  <div key={doc.title} className="grid gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                    <div>
                      <p className="font-medium text-slate-950">{doc.title}</p>
                      <p className="mt-1 text-sm text-slate-600">{doc.type} · {doc.size}</p>
                    </div>
                    <Badge className={doc.status === "Indexed" ? "bg-emerald-100 text-emerald-800 border-transparent" : "bg-amber-100 text-amber-800 border-transparent"}>{doc.status}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Chunk distribution</CardTitle>
                <CardDescription>Indexed chunk coverage across knowledge bases.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span>Policy guides</span>
                      <span>41%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-5/12 rounded-full bg-violet-600" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span>Support articles</span>
                      <span>28%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-7/12 rounded-full bg-violet-600" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span>Technical docs</span>
                      <span>31%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full w-9/12 rounded-full bg-violet-600" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Accuracy score</CardTitle>
              <CardDescription>Grounding and retrieval quality for your production flows.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center gap-6 rounded-3xl border border-violet-100 bg-violet-50 p-8 text-center">
                <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white shadow-sm">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-violet-600 text-4xl font-semibold text-white shadow-lg">
                    96.8%
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-slate-700">Current model alignment and citation accuracy across the latest query batch.</p>
                  <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-700">
                    <span className="rounded-full bg-white px-3 py-1.5 text-slate-800 shadow-sm">Precision 97.2%</span>
                    <span className="rounded-full bg-white px-3 py-1.5 text-slate-800 shadow-sm">Recall 95.3%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent activity</CardTitle>
              <CardDescription>Latest events from ingestion, indexing, and query processing.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {activity.map((item) => (
                <div key={`${item.event}-${item.time}`} className="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <div>
                    <p className="font-medium text-slate-950">{item.event}</p>
                    <p className="mt-1 text-sm text-slate-600">{item.target}</p>
                  </div>
                  <div className="text-right text-sm text-slate-500">
                    <p>{item.time}</p>
                    <Badge className={
                      item.status === "success"
                        ? "bg-emerald-100 text-emerald-800 border-transparent"
                        : item.status === "warning"
                        ? "bg-amber-100 text-amber-800 border-transparent"
                        : "bg-rose-100 text-rose-800 border-transparent"
                    }>{item.status}</Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Chat assistant</CardTitle>
              <CardDescription>Ask the assistant for retrieval insights and summary guidance.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4 rounded-3xl bg-slate-50 p-4">
                {assistantMessages.map((message) => (
                  <div key={`${message.author}-${message.time}`} className="space-y-1">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                      <MessageSquare className="size-4 text-violet-600" />
                      <span>{message.author}</span>
                    </div>
                    <p className="text-sm leading-6 text-slate-700">{message.text}</p>
                    <p className="text-xs text-slate-500">{message.time}</p>
                  </div>
                ))}
              </div>
              <div className="grid gap-3">
                <input
                  className="w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                  placeholder="Ask about your knowledge graph, documents, or retrieval status"
                  type="text"
                />
                <Button className="w-full bg-violet-600 hover:bg-violet-700">Send message</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top queries</CardTitle>
            <CardDescription>Most frequent questions from the last 24 hours.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {queries.map((query) => (
              <div key={query.text} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-medium text-slate-950">{query.text}</p>
                  <Badge className="bg-violet-100 text-violet-800 border-transparent">{query.volume}</Badge>
                </div>
                <p className="mt-2 text-sm text-slate-600">Average response latency {query.latency}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Document snapshots</CardTitle>
            <CardDescription>Fast view of important indexed assets.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {documents.map((doc) => (
              <div key={doc.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-semibold text-slate-950">{doc.title}</p>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                  <span>{doc.type}</span>
                  <span>•</span>
                  <span>{doc.size}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
