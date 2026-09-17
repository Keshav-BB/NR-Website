# Technical & UX Implementation Specification

**Product**: Neuro Recode Web Platform Rebuild  
**Brand**: Neuro Recode Private Limited  
**Stack**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Lucide React, React Hook Form, Zod, Frappe REST API  

---

## 1. Information Architecture & Sitemap
All URLs are clean, permanent routes powered by Next.js Server Components. Fundamental navigation works seamlessly without client-side JavaScript execution.

- `/` — Homepage: Problem recognition, 3-Step Re-Code Protocol™, Differentiation, Metrics, Stories, Science Preview, Who We Serve, Free Training Funnel.
- `/method` — Comprehensive long-form protocol documentation, session logistics, what the method is/isn't, and FAQs.
- `/who-we-serve` — Target audience breakdown (Founders, Managers, Doctors, Lawyers, Finance, IT, Parents) and eligibility boundaries.
- `/about` — Origin story, core values, leadership standards, Chennai/Tamil Nadu positioning, and official corporate registration.
- `/stories` — Interactive transformation library with category filtering and client consent notices.
- `/science` — Biological mechanisms, interactive HPA axis diagram, and peer-reviewed research bibliography.
- `/resources` & `/resources/[slug]` — Knowledge center with articles, guides, takeaways, and downloadable assets.
- `/careers` & `/careers/[slug]` — Structured job board with role requirements, compensation, and integrated application form.
- `/contact` — Multi-intent inquiry form, direct WhatsApp integration, and emergency crisis hotlines.
- `/privacy-policy`, `/terms-and-conditions`, `/refund-policy`, `/disclaimer` — Comprehensive legal templates with dynamic variables.
- `/thank-you` — Conversion confirmation and direct Free Training access.
- `404` (`not-found.tsx`) — Branded fallback page with navigation alternatives.

---

## 2. Design System & Tokens
The visual design embodies **Premium + Calm + Scientific + Human**, calibrated directly from the official Neuro Recode brand logo (`media_1789621444553.png`).

### Official Brand Assets
- **Full Brand Logo**: `/neuro-recode-logo.png` (1024x223 transparent PNG containing the circular neural emblem, dual-tone wordmark "NEURO" / "RECODE", and official tagline).
- **Circular Neural Emblem**: `/neuro-recode-emblem.png` (172x180 transparent PNG with upper violet neural arc and lower gold neural arc).
- **Favicons & App Icons**: `/favicon.png`, `/favicon.ico`, and Apple touch icons pointing to the emblem.
- **Official Brand Tagline**: **"Heal Your Mind To Heal Your Life"** (CMS-managed via `siteConfig.company.tagline`).

### Color Tokens (Calibrated from Official Logo)
- `--background`: `#FAF8F5` (Warm Alabaster / Premium Calm Canvas)
- `--surface`: `#FFFFFF` (Card White)
- `--surface-muted`: `#F3EDF9` (Soft Violet Tint)
- `--primary`: `#6B32A1` (Official Royal Violet — Upper Neural Arc)
- `--primary-hover`: `#562386`
- `--primary-dark`: `#241033` (Midnight Plum / Aubergine Deep Canvas)
- `--primary-light`: `#824CB8`
- `--accent`: `#C99940` (Official Metallic Gold — Lower Neural Arc & "RECODE")
- `--accent-hover`: `#B8872E`
- `--accent-muted`: `#9E7423`
- `--accent-light`: `#F7E5BC`
- `--logo-violet`: `#7849AD` (High-resonance upper synapse node)
- `--logo-gold`: `#C99940` (Polished gold gradient stop)
- `--logo-silver`: `#B4B4B4` (Chrome Platinum "NEURO" wordmark)
- `--text-primary`: `#241033`
- `--text-secondary`: `#584B66`
- `--text-muted`: `#887B96`
- `--border`: `rgba(107, 50, 161, 0.12)`

### Typography
- **Display / Headings**: *Lora* (Editorial Serif / Academic Rigor)
- **Body & Controls**: *Plus Jakarta Sans* (Contemporary, High-Legibility Sans-Serif)

---

## 3. Conversion Funnel & Lead Flow
```
Visitor Lands on Website
  │
  ├── Attribution Engine captures UTMs & Referrer (sessionStorage & localStorage)
  │
  ├── Explores Problem → Method (01 Decode, 02 Rewire, 03 Reinforce) → Stories
  │
  ├── Primary Action: "Start with the Free Training"
  │     └── Redirects to https://learn.neurorecode.in/welcome-page
  │         (Preserving all UTM parameters cross-domain)
  │
  └── Secondary Action: Submits Inquiry or RCA Consultation Booking
        │
        ├── Client validation via React Hook Form + Zod
        ├── Submits payload + Attribution to /api/contact or /api/leads
        ├── Honeypot spam trap check
        ├── Secure server-side call to Frappe CRM REST API
        │     ├── If Frappe reachable: Lead created / deduplicated
        │     └── If Frappe unavailable: Lead safely logged to lead-queue.json
        │
        └── User redirected to /thank-you with instant Free Training access
```

---

## 4. Security & Compliance
- **Zero Exposed Secrets**: All Frappe API keys and webhook tokens reside exclusively in server-side environment variables.
- **Bot Defense**: Silent honeypot trap fields detect automated scrapers without annoying human visitors with intrusive CAPTCHAs.
- **Regulatory Transparency**: Corporate CIN (`U86909TN2026PTC195212`) and MSME UDYAM registration are visible in footers and legal documents.
- **Medical Safeguards**: Non-clinical disclaimers and Government of India crisis hotlines (Tele-MANAS `14416` and Emergency `112`) are prominently placed.
