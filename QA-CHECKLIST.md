# Quality Assurance & Launch Checklist
**Platform**: Neuro Recode Rebuilt Web Platform  
**Target Release**: Production

---

## 1. Functional Verification
- [x] **Primary Navigation**: 100% of header navigation links resolve to active Server Component routes (`/method`, `/who-we-serve`, `/about`, `/stories`, `/science`, `/resources`, `/careers`).
- [x] **Primary Conversion Funnel**:
  - [x] "Start with the Free Training" button routes to `https://learn.neurorecode.in/welcome-page`.
  - [x] Preserves incoming UTM tracking parameters (`utm_source`, `utm_medium`, `utm_campaign`).
  - [x] Fires `free_training_click` analytics event.
- [x] **Contact & RCA Forms**:
  - [x] Client-side Zod validation provides friendly inline error messages.
  - [x] Server-side route handler `/api/contact` validates incoming payload.
  - [x] Submissions with filled honeypots are silently dropped without alerting bots.
  - [x] Successful submissions transition to `/thank-you`.
- [x] **Frappe CRM Integration**:
  - [x] Secure server-side REST API dispatch.
  - [x] Fail-safe fallback: when CRM is unavailable, leads are safely stored in local queue (`lead-queue.json`) with zero data loss.
- [x] **Careers Application Engine**:
  - [x] All published jobs on `/careers` display complete metadata (salary, hours, equipment, duties).
  - [x] `/careers/[slug]` renders dedicated application form connected to `/api/careers/apply`.
- [x] **Floating WhatsApp CTA**:
  - [x] Unobtrusive button floating at bottom-right with pre-filled message.
  - [x] Dispatches `whatsapp_click` analytics event with current page path.

---

## 2. Legacy URL Redirects Verification
- [x] `/The%20Company.dc.html` → Returns HTTP 301 to `/about`
- [x] `/Careers.dc.html` → Returns HTTP 301 to `/careers`
- [x] `/b3rz8xhb` → Returns HTTP 301 to `/`
- [x] `/poiu3wez` → Returns HTTP 301 to `/refund-policy`
- [x] `/the-science` → Returns HTTP 301 to `/science`
- [x] `/what-is-anxiety-brain-vs-mind-hours--ride-model` → Returns HTTP 301 to `/contact`

---

## 3. Responsive Breakpoint Testing
- [x] **Mobile (320px – 430px)**:
  - Zero horizontal scrolling or overflow.
  - Headings scale smoothly via fluid clamp (`clamp(24px, 6vw, 44px)`).
  - Mobile full-screen drawer menu operates with smooth toggle and accessible close button.
- [x] **Tablet (768px – 1023px)**:
  - 2-column grid adaptation for situation and story cards.
  - Proper padding without clipping.
- [x] **Desktop (1024px – 1920px)**:
  - Sticky header transitions cleanly from transparent to solid with backdrop blur.
  - 3-stage interactive method protocol expands cleanly.

---

## 4. Accessibility (a11y) & WCAG 2.2 AA
- [x] Keyboard focus visible across all interactive buttons, links, and form inputs (`focus-visible:ring-2`).
- [x] Skip-to-content link positioned at the very top of DOM (`#main-content`).
- [x] High-contrast color palette: Deep purple (`#241033`) on warm cream (`#FAF7F3`) yields > 9:1 contrast ratio.
- [x] Reduced motion preference (`prefers-reduced-motion`) fully respected in CSS.
- [x] Semantic landmarks used throughout (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).

---

## 5. SEO & Structured Data
- [x] Dynamic XML Sitemap generated at `/sitemap.xml`.
- [x] Optimized `robots.txt` generated at `/robots.txt` blocking `/thank-you` and `/api/`.
- [x] Canonical URLs specified on every public page.
- [x] OpenGraph and Twitter card meta tags populated.
- [x] JSON-LD Schema.org structured data embedded:
  - `Organization` (Name, CIN, address, support email)
  - `WebSite` (Canonical URL, bilingual inLanguage)
  - `JobPosting` (Structured careers data on detail pages)

---

## 6. Content & Regulatory Accuracy
- [x] ₹149 consultation fee explicitly displayed on refund policy and terms without missing template variables.
- [x] All internal figures (`815+`, `2,500+`, `3 yrs`) sourced from `siteConfig`.
- [x] Non-clinical wellness disclaimer prominently positioned on support and legal pages.
- [x] Emergency helplines (Tele-MANAS `14416` and Emergency `112`) accurately displayed.
- [x] Dynamic copyright year generated dynamically in footer.
