import { Link } from "react-router-dom";
import { ArrowRight, Database, LockKeyhole, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginPage() {
  return (
    <main className="grid min-h-screen bg-background lg:grid-cols-[1.05fr_0.95fr]">
      <section className="flex min-h-screen flex-col justify-between border-r bg-card px-6 py-6 md:px-10">
        <Link to="/dashboard" className="flex w-fit items-center gap-3">
          <img src="/ragger-mark.svg" alt="RAGGER" className="size-10 rounded-md" />
          <div>
            <p className="text-sm font-semibold">RAGGER</p>
            <p className="text-xs text-muted-foreground">Enterprise GraphRAG</p>
          </div>
        </Link>

        <div className="mx-auto w-full max-w-md py-12">
          <Card className="shadow-none">
            <CardHeader>
              <CardTitle>Sign in to your workspace</CardTitle>
              <CardDescription>Authentication is not connected yet. This form is ready for the future auth flow.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="name@company.com" autoComplete="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter password" autoComplete="current-password" />
                </div>
                <Button asChild className="w-full">
                  <Link to="/dashboard">
                    Continue
                    <ArrowRight />
                  </Link>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <p className="text-xs text-muted-foreground">Copyright 2026 RAGGER. Built for secure retrieval workflows.</p>
      </section>

      <section className="hidden min-h-screen flex-col justify-between bg-[#0f2f4f] px-10 py-10 text-white lg:flex">
        <div className="max-w-xl">
          <p className="text-sm font-medium text-[#f2c94c]">Graph-native retrieval operations</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-normal">
            Manage knowledge ingestion, vector search, and retrieval quality from one console.
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-6 text-white/75">
            RAGGER gives platform teams a quiet control plane for indexing data, monitoring pipeline health, and preparing enterprise retrieval workflows.
          </p>
        </div>

        <div className="grid gap-4">
          {[
            { icon: Network, title: "Graph-aware pipelines", body: "Connect entity relationships and source provenance across your corpus." },
            { icon: Database, title: "Vector store visibility", body: "Track collections, embeddings, and indexing activity without leaving the console." },
            { icon: LockKeyhole, title: "Enterprise posture", body: "Designed for future workspace controls, audit trails, and access policies." },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-white/15 bg-white/8 p-5">
              <item.icon className="size-5 text-[#f2c94c]" />
              <p className="mt-3 text-sm font-semibold">{item.title}</p>
              <p className="mt-1 text-sm leading-6 text-white/70">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
