import { useParams } from "react-router-dom";
import { ArrowUpRight, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const sectionCopy: Record<string, { title: string; description: string }> = {
  knowledge: {
    title: "Knowledge",
    description: "Manage source systems, document collections, metadata, and corpus readiness.",
  },
  pipelines: {
    title: "Pipelines",
    description: "Configure ingestion, chunking, enrichment, embedding, and indexing workflows.",
  },
  retrieval: {
    title: "Retrieval",
    description: "Review query behavior, grounding quality, prompt context, and response traces.",
  },
  "vector-stores": {
    title: "Vector Stores",
    description: "Inspect collections, embedding dimensions, payload fields, and sync health.",
  },
  workspaces: {
    title: "Workspaces",
    description: "Prepare future workspace boundaries for teams, environments, and projects.",
  },
  security: {
    title: "Security",
    description: "Plan access policies, audit history, secret handling, and compliance controls.",
  },
  settings: {
    title: "Settings",
    description: "Control environment preferences, API endpoints, and local console behavior.",
  },
};

export function SectionPage() {
  const { section = "" } = useParams();
  const content = sectionCopy[section] ?? {
    title: "Dashboard",
    description: "This console area is ready for implementation.",
  };

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div>
          <h1 className="text-2xl font-semibold tracking-normal">{content.title}</h1>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">{content.description}</p>
        </div>
        <Button variant="outline">
          Configure
          <ArrowUpRight />
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Ready for product workflow</CardTitle>
          <CardDescription>This screen is intentionally scaffolded without backend or authentication logic.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex min-h-72 flex-col items-center justify-center rounded-lg border border-dashed bg-muted/40 p-8 text-center">
            <Construction className="size-8 text-muted-foreground" />
            <p className="mt-4 text-sm font-medium">Implementation placeholder</p>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
              Navigation, layout, and page structure are in place for the next feature pass.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
