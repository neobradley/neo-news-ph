# Requirements Document

## Introduction

This feature initializes the project with the agreed-upon tech stack (TypeScript, Node.js, Hono, Vercel AI SDK, Vitest) and delivers a working "Hello World" HTTP endpoint as the first runnable artifact. It also establishes the canonical source directory structure, replacing the existing Java placeholder directories with a TypeScript-idiomatic layout.

## Glossary

- **App**: The Hono application instance that registers routes and starts the HTTP server.
- **Router**: A Hono router module that groups related route handlers.
- **Route_Handler**: A thin Hono handler function that delegates to a Service and returns an HTTP response.
- **Service**: A class containing business logic, called by Route Handlers.
- **Index_Endpoint**: The HTTP `GET /` route that returns the Hello World response.
- **Entry_Point**: The `src/index.ts` file that bootstraps and starts the App.
- **Build_Toolchain**: The set of npm scripts (`dev`, `build`, `start`, `test`) that compile and run the project.

## Requirements

### Requirement 1: Project Dependency Setup

**User Story:** As a developer, I want all required dependencies installed and configured, so that the project compiles and runs without manual setup steps.

#### Acceptance Criteria

1. THE App SHALL declare `hono`, `ai`, and their peer dependencies as production dependencies in `package.json`.
2. THE App SHALL declare `typescript`, `tsx`, `vitest`, and `@types/node` as development dependencies in `package.json`.
3. THE Build_Toolchain SHALL include an `npm run dev` script that starts the server in watch mode using `tsx watch`.
4. THE Build_Toolchain SHALL include an `npm run build` script that compiles TypeScript via `tsc`.
5. THE Build_Toolchain SHALL include an `npm start` script that runs the compiled output.
6. THE Build_Toolchain SHALL include an `npm test` script that executes `vitest --run`.
7. THE App SHALL include a `tsconfig.json` configured for strict TypeScript with `NodeNext` module resolution.

### Requirement 2: Source Directory Structure

**User Story:** As a developer, I want a clean TypeScript source layout, so that new code has a predictable home and the Java placeholder directories are removed.

#### Acceptance Criteria

1. THE App SHALL organise source files under `src/` with subdirectories `routes/`, `services/`, `repositories/`, and `types/`.
2. THE App SHALL remove the `src/main/java/` and `src/test/java/` placeholder directories.
3. THE Entry_Point SHALL reside at `src/index.ts`.

### Requirement 3: Hello World Index Endpoint

**User Story:** As a developer, I want a `GET /` endpoint that returns a Hello World response, so that I can verify the server is running correctly.

#### Acceptance Criteria

1. WHEN a `GET /` request is received, THE Index_Endpoint SHALL return HTTP status `200`.
2. WHEN a `GET /` request is received, THE Index_Endpoint SHALL return a JSON body `{ "message": "Hello, World!" }`.
3. THE Route_Handler for `GET /` SHALL delegate to a Service and contain no business logic itself.
4. THE App SHALL register the Index_Endpoint Router on the root path `/`.

### Requirement 4: Application Bootstrap

**User Story:** As a developer, I want the application to start a listening HTTP server, so that the endpoint is reachable over the network.

#### Acceptance Criteria

1. WHEN the Entry_Point is executed, THE App SHALL start an HTTP server on the port defined by the `PORT` environment variable.
2. IF the `PORT` environment variable is not set, THEN THE App SHALL default to port `3000`.
3. WHEN the server starts successfully, THE App SHALL log the listening address to standard output.

### Requirement 5: Unit Test Coverage for Hello World

**User Story:** As a developer, I want unit tests for the Hello World service and route, so that regressions are caught automatically.

#### Acceptance Criteria

1. THE App SHALL include a Vitest unit test that verifies the Index_Endpoint returns HTTP status `200` for `GET /`.
2. THE App SHALL include a Vitest unit test that verifies the response body equals `{ "message": "Hello, World!" }`.
3. WHEN `npm test` is executed, THE Build_Toolchain SHALL run all tests and exit with code `0` when all tests pass.
4. IF any test fails, THEN THE Build_Toolchain SHALL exit with a non-zero exit code.
