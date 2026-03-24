# Implementation Plan: Project Initialization

## Overview

Set up the TypeScript/Node.js project with Hono, configure the build toolchain, establish the source directory structure, implement the Hello World endpoint with a layered architecture, and add unit and property-based tests.

## Tasks

- [x] 1. Configure package.json, tsconfig.json, and remove Java placeholders
  - Add `hono` and `ai` as production dependencies in `package.json`
  - Add `typescript`, `tsx`, `vitest`, `@types/node`, and `fast-check` as dev dependencies
  - Add npm scripts: `dev` (`tsx watch src/index.ts`), `build` (`tsc`), `start` (`node dist/index.js`), `test` (`vitest --run`)
  - Create `tsconfig.json` with `strict: true`, `module: NodeNext`, `moduleResolution: NodeNext`, `outDir: dist`, `rootDir: src`
  - Delete `src/main/java/` and `src/test/java/` directories
  - Create empty placeholder directories: `src/repositories/` and `src/types/`
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 2.1, 2.2_

- [x] 2. Implement the Index Service
  - [x] 2.1 Create `src/services/index.service.ts` with `IndexService` class exposing `getHello(): { message: string }`
    - Method returns `{ message: "Hello, World!" }`
    - _Requirements: 3.3, 5.1, 5.2_

  - [x] 2.2 Write unit tests for IndexService
    - Create `src/services/index.service.test.ts`
    - Test that `getHello()` returns `{ message: "Hello, World!" }`
    - _Requirements: 5.1, 5.2_

- [x] 3. Implement the Index Handler and Router
  - [x] 3.1 Create `src/routes/index.handler.ts` as a thin Hono handler
    - Call `IndexService.getHello()` and return result as JSON with status 200
    - No business logic in the handler
    - _Requirements: 3.1, 3.2, 3.3_

  - [x] 3.2 Create `src/routes/index.router.ts` registering `GET /` with the index handler
    - Export a `Hono` instance with the route registered
    - _Requirements: 3.4_

  - [x] 3.3 Write unit tests for the GET / handler
    - Create `src/routes/index.handler.test.ts`
    - Use Hono's `app.request()` helper (no real HTTP server)
    - Test status is `200` for `GET /`
    - Test response body equals `{ "message": "Hello, World!" }`
    - _Requirements: 3.1, 3.2, 5.1, 5.2_

  - [x] 3.4 Write property test for GET / correctness (Property 1)
    - **Property 1: GET / returns correct status and body**
    - **Validates: Requirements 3.1, 3.2, 3.4**
    - Add to `src/routes/index.handler.test.ts`
    - Tag: `// Feature: project-initialization, Property 1: GET / returns correct status and body`

- [x] 4. Implement the Entry Point and Application Bootstrap
  - [x] 4.1 Create `src/index.ts` that wires the app together
    - Create Hono app instance
    - Register the index router on `/`
    - Read `PORT` from `process.env.PORT`, default to `3000`
    - Start the server and log the listening address to stdout
    - _Requirements: 2.3, 3.4, 4.1, 4.2, 4.3_

  - [x] 4.2 Write property test for PORT env var binding (Property 2)
    - **Property 2: PORT environment variable controls listen port**
    - **Validates: Requirements 4.1**
    - Add to `src/index.test.ts`
    - Use `fc.integer({ min: 1024, max: 65535 })` with minimum 100 iterations
    - Tag: `// Feature: project-initialization, Property 2: PORT environment variable controls listen port`

  - [x] 4.3 Write unit test for default port fallback (Property 3)
    - Test that when `PORT` is unset the resolved port is `3000`
    - **Validates: Requirements 4.2**

- [x] 5. Checkpoint — Ensure all tests pass
  - Run `npm test` and confirm exit code is `0`
  - _Requirements: 5.3, 5.4_

## Notes

- Property tests use `fast-check` and must run at least 100 iterations each
- Each property test must include the comment tag format specified in the design
- Hono's `app.request()` helper is used for handler tests — no real server needed
