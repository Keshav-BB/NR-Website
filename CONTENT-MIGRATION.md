# Content Migration & Audit Document
**Brand**: Neuro Recode Private Limited  
**Website**: `https://www.neurorecode.in`  

---

## 1. Preserved Brand Positioning & Core Narratives
- **Signature Headline**: *“Eliminate anxiety at the root — and get your life back.”*
- **Primary Tagline**: *“Heal your mind. Your life follows.”*
- **Secondary Tagline**: *“Rewire Your Mind. Rewrite Your Life.”*
- **The 3-Step Anxiety Re-Code Protocol™**:
  - `01 — Decode`: Identify the underlying pattern and root subconscious imprint using NLP timeline techniques.
  - `02 — Rewire`: Replace the anxious neural circuit with a calm default using clinical hypnotherapy and memory reconsolidation.
  - `03 — Reinforce`: Integrate and anchor the new default over a 90-day window until it becomes effortless.
- **Cultural & Audience Identity**: Designed specifically for high-functioning working professionals (Founders, Managers, Engineers, Doctors, Lawyers, Working Parents) and delivered in authentic, relatable **Tanglish (Tamil + English)**.

---

## 2. Legacy Defect Remediation Log

| Defect ID | Description on Old Site | Remediation in Rebuilt Platform |
| :--- | :--- | :--- |
| **DEF-01** | Missing Consultation Fee in Refund Policy (`"The  fee is non-refundable..."`) | Implemented dynamic CMS configuration (`siteConfig.feesAndPolicies.consultationBookingFee`) displaying **₹149** clearly throughout policy and terms. |
| **DEF-02** | Broken `.dc.html` routes (`The%20Company.dc.html`, `Careers.dc.html`) | Replaced with clean permanent Next.js App Router URLs (`/about`, `/careers`) with 301 server redirects. |
| **DEF-03** | Broken Footer Team link (`/what-is-anxiety-brain-vs-mind-hours--ride-model`) | Replaced with active `/contact` route, phone, WhatsApp, and email integration. |
| **DEF-04** | Broken Footer Pipe Characters (`<span>\|</span><span>\|</span>`) | Replaced with semantic, fully functional 4-column footer with dynamic current year. |
| **DEF-05** | No-JS Popup Blocker (`<noscript>` modal obstructing reading) | Completely eliminated. Website is rendered via React Server Components; all content and navigation are accessible with JS disabled. |
| **DEF-06** | Hardcoded internal metrics in React components | All statistics (`815+` professionals, `2,500+` members, `3 years`) moved to central configurable CMS file (`src/lib/cms/site-config.ts`). |
| **DEF-07** | Careers Page rendering failure / unpopulated template variables | Rebuilt with structured dataset (`src/content/careers-data.ts`) and interactive application forms with backend integration. |

---

## 3. Medical & Regulatory Guardrails
1. **Non-Clinical Wellness Declaration**: The website prominently clarifies that Neuro Recode provides non-clinical educational and personal development services based on NLP and clinical hypnotherapy.
2. **Exclusion of Medical Claims**: Zero claims of medical cure, psychiatric diagnosis, or pharmacological replacement.
3. **Emergency Helplines Prominently Integrated**:
   - Tele-MANAS (Government of India): `14416 (or 1-800-891-4416)`
   - National Emergency Helpline: `112`
4. **Corporate Transparency**: Full CIN (`U86909TN2026PTC195212`), MSME UDYAM (`UDYAM-TN-29-0062261`), and registered office address in Radhapuram, Tiruvannamalai, Tamil Nadu displayed on corporate and legal pages.
