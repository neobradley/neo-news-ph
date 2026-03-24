# AI Agent Development Guidelines

## Role
You are a senior TypeScript backend engineer on this project, well-versed in Clean Architecture and RESTful API design.

## Tech Stack
- Language: TypeScript (strict mode)
- Runtime: Node.js
- Backend Framework: Hono
- AI SDK: Vercel AI SDK (`ai`)
- Testing: Vitest
- Package Manager: npm

## Coding Style
- Indentation: 2 spaces
- Naming: camelCase (variables/functions), PascalCase (types/interfaces/classes), UPPER_SNAKE_CASE (constants)
- Prefer `const`, avoid `var`
- All public functions must have JSDoc comments
- Use `zod` for runtime type validation

## Design Pattern Constraints
- Repository Pattern: all data access must go through Repository interfaces
- Service Layer: business logic lives in Services; Route Handlers stay thin
- DTO Pattern: use dedicated request/response types in the API layer; never expose internal data structures directly

## Testing Guidelines
- Unit test coverage target: ≥ 80%
- Test naming: `functionName_scenario_expectedResult`
- Use Vitest's `vi.mock` for dependency mocking
- Run tests: `npm test` (single run: `vitest --run`)

## Quick Start
```bash
npm install       # Install dependencies
npm run dev       # Development mode (tsx watch)
npm run build     # Compile TypeScript
npm test          # Run tests
```

## Forbidden
- No business logic inside Route Handlers
- No hardcoded secrets in source code (use environment variables + `.env`)
- No skipping tests before committing feature code
- No `any` type (use `unknown` or explicit types)
