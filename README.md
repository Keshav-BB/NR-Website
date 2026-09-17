# Neuro Recode — Digital Conversion & Wellness Web Platform

> A science-based, high-performance web platform built for **Neuro Recode Private Limited**, designed to move qualified working professionals experiencing anxiety-related challenges into the Free Training and Root Cause Analysis (RCA) consultation funnel.

---

## Table of Contents
1. [Project Purpose & Positioning](#project-purpose--positioning)
2. [Architecture & Technology Stack](#architecture--technology-stack)
3. [Quick Setup & Local Development](#quick-setup--local-development)
4. [Build & Production Run](#build--production-run)
5. [Frappe CRM Integration & Fail-Safe Queue](#frappe-crm-integration--fail-safe-queue)
6. [CMS & Business Configuration](#cms--business-configuration)
7. [Marketing Attribution & Analytics](#marketing-attribution--analytics)
8. [Environment Variables](#environment-variables)
9. [Documentation Suite](#documentation-suite)

---

## Project Purpose & Positioning
Neuro Recode helps high-functioning working professionals eliminate anxiety at the root through a structured 3-stage protocol:
- **01 — Decode**: Identify the underlying formative pattern and subconscious imprint using NLP timeline work.
- **02 — Rewire**: Replace the anxious neural circuit with a calm baseline via clinical hypnotherapy and memory reconsolidation.
- **03 — Reinforce**: Integrate and anchor the calm response over a 90-day window until it becomes the permanent default.

The website delivers an educational, premium, calm, and scientifically credible user experience without relying on generic therapy clichés.

---

## Architecture & Technology Stack
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS with custom design system tokens
- **Icons**: Lucide React
- **Validation**: Zod + React Hook Form
- **CRM Integration**: Frappe CRM REST API with local file-backed offline fail-safe queuing
- **SEO & Metadata**: Static Server Components, Dynamic Sitemap (`/sitemap.xml`), Robots (`/robots.txt`), Schema.org JSON-LD

---

## Quick Setup & Local Development

### Prerequisites
- Node.js `v20.0.0` or later (tested on Node `v24.x`)
- npm `v10.x` or later

### Installation
```bash
# Clone the repository
git clone <repository-url> neurorecode-web
cd neurorecode-web

# Install dependencies
npm install

# Setup local environment variables
cp .env.example .env.local

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build & Production Run

```bash
# Type check TypeScript
npm run typecheck

# Build optimized production bundle
npm run build

# Start production server
npm run start
```

---

## Frappe CRM Integration & Fail-Safe Queue
All website inquiries submitted via `/contact`, consultation bookings, or career applications route through secure server-side API endpoints (`/api/leads`, `/api/contact`, `/api/careers/apply`).

### How Leads are Protected:
1. **Direct API Dispatch**: Leads are formatted to match Frappe doctypes (`Lead`, `Job Applicant`) and dispatched via HTTPS with Bearer/Token authorization.
2. **Attribution Preservation**: First-touch and latest-touch UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`), referral sources, and landing pages are embedded into every lead payload.
3. **Fail-Safe Offline Queue (`lead-queue.json`)**: If the Frappe CRM server is unreachable, undergoing maintenance, or credentials are not yet configured, the system automatically logs the lead to a secure local file (`lead-queue.json`). **Zero leads are ever dropped or silently lost.**

---

## CMS & Business Configuration
Per specification rules, **no quantitative claims, consultation fees, or contact details are hardcoded into visual React components**.

All business settings can be updated in a single file:
👉 `src/lib/cms/site-config.ts`

Editable settings include:
- Impact statistics (`815+` professionals helped, `2,500+` community members, `3 years`)
- Consultation / RCA booking fee (`₹149`)
- Rescheduling notice window (`24 hours`)
- Primary Free Training destination URL
- Contact WhatsApp number & prefilled chat prompt
- Support emails & official company registration details

---

## Marketing Attribution & Analytics
- **UTM Persistence Engine**: Automatically extracts UTM parameters on first landing and preserves them in session storage.
- **Cross-Domain Transfer**: When visitors click *"Start with the Free Training"*, the system appends all active UTM tags to the outbound URL (`https://learn.neurorecode.in/welcome-page?utm_source=...`) ensuring seamless Google Analytics / Meta ad attribution.
- **Event Tracking**: Custom events (`free_training_click`, `whatsapp_click`, `contact_submitted`, `job_apply_click`) are pushed to Google Tag Manager / GA4 (`NEXT_PUBLIC_GA_ID`).

---

## Environment Variables
See [ENVIRONMENT.md](ENVIRONMENT.md) and [.env.example](.env.example) for detailed environment descriptions.

Key variables:
- `NEXT_PUBLIC_SITE_URL`: Canonical site domain (`https://www.neurorecode.in`)
- `NEXT_PUBLIC_FREE_TRAINING_URL`: Free training webinar link
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: Direct WhatsApp contact number
- `FRAPPE_BASE_URL`: Root URL of Frappe CRM
- `FRAPPE_API_KEY`: Server-side Frappe API key
- `FRAPPE_API_SECRET`: Server-side Frappe API secret

---

## Documentation Suite
- [IMPLEMENTATION.md](IMPLEMENTATION.md) — Technical and UX architecture specification
- [DEPLOYMENT.md](DEPLOYMENT.md) — Vercel, VPS (PM2/Nginx), and production deployment guide
- [ENVIRONMENT.md](ENVIRONMENT.md) — Environment variables and security best practices
- [CONTENT-MIGRATION.md](CONTENT-MIGRATION.md) — Content audit and legacy defect remediation log
- [REDIRECTS.md](REDIRECTS.md) — Permanent HTTP 301 URL migration map
- [QA-CHECKLIST.md](QA-CHECKLIST.md) — Quality assurance and verification checklist
- [.env.example](.env.example) — Environmental template

---

## License
© Neuro Recode Private Limited. All Rights Reserved.
