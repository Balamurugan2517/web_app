# Method of Procedure (MOP) Runbook

## Phase Verification Workflow
1. Run 
pm run lint prior to staging changes.
2. Run 
pm run build to ensure static and dynamic routes generate cleanly.
3. Commit with semantic convention: eat(phase-x), docs(phase-x), or ix(phase-x).
4. Push to remote main branch.
