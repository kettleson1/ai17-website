# AI Agents at AI17

## Why Agents Matter
- AI agents help operational teams automate multi-step workflows, orchestrate tools, and make decisions without the need for constant human intervention.
- They act as the connective tissue between AI models, business data, and enterprise systems to deliver measurable productivity gains.
- By combining AI transformation strategy with applied engineering, AI17 deploys agents that are secure, observable, and aligned with business KPIs.

## Design Principles
1. **Business-first** – we start from the user journey and measurable outcomes before selecting models or frameworks.
2. **Composable architecture** – modular tool adapters, memory stores, and guardrails so agents can be reused across use cases.
3. **Human-in-the-loop** – clear feedback and override paths to sustain trust and accelerate iteration cycles.
4. **Observability by default** – telemetry, evaluation harnesses, and policy checks built in from day one.

## Engagement Flow
1. **Opportunity framing** – identify workflows suited for agentic automation, value sizing, and success metrics.
2. **Blueprint & pilot** – design the agent topology, integrate with systems of record, and launch in a controlled sandbox.
3. **Scale & enable** – harden infrastructure, automate monitoring, hand off playbooks, and train operators.

## Implementation Checklist
- [ ] Use-case narrative, KPIs, and SLAs documented
- [ ] Tools, APIs, and data sources cataloged with access tokens managed via secrets vault
- [ ] Safety guardrails (rate limits, policy filters, escalation paths) implemented
- [ ] Automatic evaluation jobs scheduled with regression alerts
- [ ] Runbooks and success dashboards shared with stakeholders

## Common Agent Patterns
- Customer service copilots that triage tickets, recommend actions, and trigger workflows in CRMs
- Field operations copilots that summarize maintenance logs and schedule technician visits
- Finance automation agents that reconcile transactions, flag anomalies, and prepare reporting drafts
- Knowledge agents that index proprietary docs, answer employee questions, and enforce retention policies

## Tooling Snapshot
- Orchestration: LangGraph / custom node orchestrators backed by serverless workers
- Memory & context: vector stores + SQL feature stores with retrieval policies
- Monitoring: evaluation pipelines, tracing, and incident webhooks integrated into existing observability stacks

## Experience Surfaces
- Website: AI17 marketing site focused on agents, outcomes, and engagement flow.
- Mobile: Outreach HQ app mirrors the web workflows for performance snapshots, lead queue, call logging, and script access.

## Mobile Application
- The AI17 mobile app is built with Expo and lives in `mobile/`.
- Configure AWS Cognito (User Pool + Hosted UI) and Firebase before testing.
- For Expo Go testing, use the Hosted UI domain and set redirect URLs to the Expo AuthSession proxy URL.

For more information or to start an agent initiative, reach out to the AI17 team via `/contact`.
