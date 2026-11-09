# CargoPool AI — Task Board

This is the initial planning board. Items are proposed tasks, not completed work.

## Phase 0 — Confirm the foundation
- [ ] Inspect the repository and local project folder; reconcile any differences.
- [ ] Confirm the MVP problem statement and target users.
- [ ] Confirm frontend, backend, database, and deployment choices.
- [ ] Define the first demo workflow and acceptance criteria.
- [ ] Add architecture overview and setup instructions.

## Phase 1 — Working MVP
- [ ] Design the core data model for users, shipments, vehicles/capacity, and matching.
- [ ] Implement validated APIs and persistence.
- [ ] Build the primary shipper workflow.
- [ ] Build the primary transporter workflow.
- [ ] Implement a transparent baseline cargo-capacity matching algorithm.
- [ ] Add route/distance estimation only after selecting a suitable data provider.
- [ ] Build a usable dashboard for the demo.

## Phase 2 — AI and optimization
- [ ] Establish measurable matching and optimization objectives.
- [ ] Compare a rule-based baseline against an AI-assisted approach.
- [ ] Add AI assistance only where it improves measurable outcomes.
- [ ] Handle missing, uncertain, and untrusted input safely.
- [ ] Document model/API costs, limitations, and fallback behavior.

## Phase 3 — Quality and delivery
- [ ] Add unit and integration tests.
- [ ] Add end-to-end tests for critical user journeys.
- [ ] Review authentication, authorization, input validation, and secret handling.
- [ ] Add error states, logging, and basic monitoring.
- [ ] Prepare deployment configuration and a reproducible demo.
- [ ] Update README with setup, architecture, screenshots, and demo instructions.

## Working rules
- Move an item to done only after implementation and verification.
- Keep tasks small and add acceptance criteria before implementation.
- Record blockers and decisions in `PROJECT_CONTEXT.md`.
- Never store credentials or real user data in this repository.
