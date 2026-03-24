# My Kiro Project

> A high-level overview for humans and new AI Agents

## Project Overview
> Describe the project purpose and core functionality here

## Tech Stack
- Language: TypeScript
- Runtime: Node.js
- Backend Framework: Hono
- AI SDK: Vercel AI SDK (`ai`)
- Testing: Vitest

## Quick Start

```bash
# Install dependencies
npm install

# Development mode
npm run dev

# Run tests (single run)
npx vitest --run

# Build
npm run build

# Start
npm start
```

## Directory Structure

```
my-kiro-project/
├── .kiro/               # Kiro AI settings and automation hooks
├── specs/               # 🔴 Active workspace - current requirements, design, and tasks
├── archives/            # 🔵 Frozen archive - completed specs and architecture decision records
├── skills/              # Agent capabilities (MCP, validation scripts)
├── src/                 # TypeScript source code
│   ├── routes/          # Hono route handlers
│   ├── services/        # Business logic layer
│   ├── repositories/    # Data access layer
│   ├── types/           # Type definitions
│   └── index.ts         # Application entry point
├── AGENT.md             # AI development guidelines
├── CHANGELOG.md         # Change log
└── README.md            # This file
```

## AI Agent Guide

1. Read `AGENT.md` to understand development conventions
2. Check `specs/01_requirements.md` for current requirements
3. Refer to `specs/02_design.md` for technical architecture
4. Follow `specs/03_tasks.md` to execute tasks
5. Update `CHANGELOG.md` upon completion

## Related Documents
- [Requirements](specs/01_requirements.md)
- [Technical Design](specs/02_design.md)
- [Task List](specs/03_tasks.md)
- [Architecture Decisions](archives/adr/)
