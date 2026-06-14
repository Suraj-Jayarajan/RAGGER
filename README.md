# RAGGER

RAGGER is an enterprise GraphRAG platform designed as a Docker-first monorepo with a clear separation between frontend, backend, and infrastructure concerns.

## Tech Stack

- Frontend: React, TypeScript, Vite
- Backend: FastAPI, Python 3.12
- Datastores: PostgreSQL, Redis, Qdrant
- Future platform support: Neo4j, MinIO, Celery, LangGraph

## Repository Structure

```text
RAGGER/
  apps/
    frontend/                 # React + TypeScript + Vite application
      public/
      src/
    backend/                  # FastAPI service
      src/
        domain/               # Enterprise rules and domain model
        application/          # Use cases and orchestration
        infrastructure/       # External systems, persistence, providers
        interfaces/           # API, schemas, controllers, adapters
      tests/
  packages/                   # Shared internal packages, contracts, SDKs
  infra/
    docker/
      backend/                # Backend image and runtime assets
      frontend/               # Frontend image and runtime assets
      postgres/               # PostgreSQL configuration and init assets
      redis/                  # Redis configuration
      qdrant/                 # Qdrant configuration
      future/
        neo4j/
        minio/
        celery/
        langgraph/
  docs/                       # Architecture and product documentation
  scripts/                    # Developer and automation scripts
  .github/
    workflows/                # CI/CD workflows
```

## Architecture Direction

RAGGER follows Clean Architecture principles:

- `domain` contains enterprise rules and core concepts.
- `application` contains use cases and application-specific workflows.
- `infrastructure` contains adapters for databases, queues, vector stores, object storage, and external providers.
- `interfaces` contains delivery mechanisms such as HTTP APIs, request/response schemas, and controllers.

The backend should keep framework code at the edges. FastAPI, PostgreSQL, Redis, Qdrant, and future integrations such as Neo4j, MinIO, Celery, and LangGraph belong in adapter layers, not in domain logic.

## Docker-First Development

The initial compose setup provides infrastructure services only:

- PostgreSQL
- Redis
- Qdrant

Application containers will be added once frontend and backend application code is introduced.

```bash
docker compose up -d
docker compose ps
docker compose down
```

Copy `.env.example` to `.env` before local development and adjust secrets as needed.

## Current Status

This repository currently contains project structure, configuration templates, and Docker infrastructure placeholders only. Application code has intentionally not been generated yet.
