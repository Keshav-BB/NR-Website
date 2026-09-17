# Neuro Recode Website — URL Redirect Migration Map

## Overview
This document maps legacy FlexiFunnels / DC URLs to their clean, permanent canonical equivalents on the rebuilt Next.js web platform. All redirects are configured as HTTP 301 (Permanent Redirects) inside `next.config.ts`.

---

## Migration Mapping Matrix

| Legacy URL / Pattern | Target New URL | Status Code | Rationale |
| :--- | :--- | :--- | :--- |
| `/The%20Company.dc.html` | `/about` | `301 Permanent` | Legacy Company page contained broken HTML extension |
| `/The Company.dc.html` | `/about` | `301 Permanent` | Unencoded space variant |
| `/Careers.dc.html` | `/careers` | `301 Permanent` | Legacy careers link with `.dc.html` extension |
| `/b3rz8xhb` | `/` | `301 Permanent` | Legacy funnel hash canonical identifier on homepage |
| `/poiu3wez` | `/refund-policy` | `301 Permanent` | Legacy funnel hash canonical on refund policy |
| `/the-science` | `/science` | `301 Permanent` | Streamlined clean URL for science & research |
| `/what-is-anxiety-brain-vs-mind-hours--ride-model` | `/contact` | `301 Permanent` | Broken footer team link pointing to dead funnel URL |

---

## Search Engine & Social Crawler Handling
- All legacy URLs return permanent 301 headers before page rendering to preserve Google PageRank and prevent index duplication.
- Open Graph tags and canonical URLs on target pages point strictly to the canonical base URL without trailing hashes or query parameters.
