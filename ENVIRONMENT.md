# Environment Configuration & Security Reference

This document provides a reference for all environment variables used by the Neuro Recode web application.

---

## 1. Variable Inventory

| Variable Name | Environment | Required | Description | Example Value |
| :--- | :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | Public / Browser | Yes | Canonical production origin URL | `https://www.neurorecode.in` |
| `NEXT_PUBLIC_GA_ID` | Public / Browser | Optional | Google Analytics 4 Measurement ID | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_META_PIXEL_ID` | Public / Browser | Optional | Meta Pixel ID for ad conversion tracking | `1234567890` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Public / Browser | Yes | Contact desk WhatsApp number (international digits only) | `919876543210` |
| `NEXT_PUBLIC_FREE_TRAINING_URL` | Public / Browser | Yes | Principal conversion destination masterclass URL | `https://learn.neurorecode.in/welcome-page` |
| `FRAPPE_BASE_URL` | Server Only | Optional* | Root URL of Frappe CRM instance | `https://crm.neurorecode.in` |
| `FRAPPE_API_KEY` | Server Only | Optional* | Frappe REST API user key | `f7b8a9...` |
| `FRAPPE_API_SECRET` | Server Only | Optional* | Frappe REST API user secret | `c1d2e3...` |
| `SUPPORT_EMAIL` | Server / UI | Yes | Primary client support email address | `support@neurorecode.in` |
| `CAREERS_EMAIL` | Server / UI | Yes | Recruitment desk email address | `careers@neurorecode.in` |

*\*Note on Frappe CRM credentials: If Frappe credentials are not supplied during early staging, the platform safely routes all leads into a local fail-safe JSON queue (`lead-queue.json`) with zero data loss.*

---

## 2. Security Best Practices
1. **Never Commit Secrets**: Ensure `.env` and `.env*.local` remain in `.gitignore`. Only `.env.example` should be tracked in Git.
2. **Server-Side Isolation**: `FRAPPE_API_KEY` and `FRAPPE_API_SECRET` must **never** be prefixed with `NEXT_PUBLIC_`. They are consumed exclusively within Next.js Route Handlers (`/api/leads`, `/api/contact`, `/api/careers/apply`).
3. **Least-Privilege API User**: In Frappe CRM, create a dedicated system user (e.g. `website_api_bot`) equipped only with `Create` permissions on `Lead` and `Job Applicant` doctypes.
4. **Input Normalization**: All contact forms implement Zod schema validation, length limits, and honeypot spam traps on both client and server layers.
