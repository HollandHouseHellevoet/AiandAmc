# DESIGN.md

## Rojas Report Intelligence Network — Locked Reference File

**Owner:** Rojas Media LLC
**Version:** 1.1 — April 2, 2026
**Status:** Canonical. Do not modify per-repo. Update here first, then propagate manually.

-----

## How to Use This File

Single source of truth for every visual and structural decision across the Rojas Report network. Open this file before touching any code on any subdomain. When a design decision is not covered here, add it here first, then implement.

Copy into the root of every repo. If a local copy conflicts with this file, this file wins.

-----

## 1. Brand Tokens

### Colors

All values confirmed against live CSS from rojasreport.com on April 2, 2026.

|Token           |Hex                     |Usage                                                  |
|----------------|------------------------|-------------------------------------------------------|
|`--deep-navy`   |`#070b11`               |Page background — darkest layer                        |
|`--navy`        |`#141b24`               |Header, footer, secondary surfaces                     |
|`--card-bg`     |`#0f1a24`               |Card backgrounds, content panels                       |
|`--orange`      |`#cf5604`               |Primary accent — CTAs, left-border cards, active states|
|`--orange-hover`|`#e07a3a`               |Hover state for orange elements                        |
|`--orange-light`|`#e27641`               |Link hover on dark backgrounds                         |
|`--cream`       |`#f8f5ef`               |Primary text on dark backgrounds                       |
|`--cream-80`    |`rgba(248,245,239,0.80)`|High-emphasis secondary text                           |
|`--cream-60`    |`rgba(248,245,239,0.60)`|Body text, nav links at rest                           |
|`--cream-40`    |`rgba(248,245,239,0.40)`|Status labels, column headers                          |
|`--cream-25`    |`rgba(248,245,239,0.25)`|Meta text, timestamps, captions                        |
|`--cream-10`    |`rgba(248,245,239,0.10)`|Subtle dividers, hover backgrounds                     |
|`--border`      |`rgba(248,245,239,0.07)`|Default border across all dark surfaces                |

### Score Badge — Severity Scale

Used on all scored data: CON state scores, POH scores, AHA red flag counts. High score = bad outcome = red. This is a severity indicator, not a ranking.

|Score Range|Hex      |CSS Class  |Label             |
|-----------|---------|-----------|------------------|
|80–100     |`#c0392b`|`.critical`|Most Restrictive  |
|60–79      |`#c0392b`|`.high`    |Highly Restrictive|
|30–59      |`#8a6a1a`|`.moderate`|Moderate          |
|0–29       |`#2e6b3e`|`.low`     |Low / No CON      |

### Do Not Use

- No pure black (`#000000`) anywhere
- No white or light page backgrounds — dark throughout
- No gradients
- No drop shadows — depth comes from layered dark backgrounds
- No additional brand colors introduced at subdomain level without adding here first

-----

## 2. Typography

### Typefaces

|Role            |Family            |Source                                           |
|----------------|------------------|-------------------------------------------------|
|Headlines       |Cormorant Garamond|Google Fonts                                     |
|Body / UI       |Source Sans Pro   |Google Fonts                                     |
|Data / Monospace|Source Code Pro   |Google Fonts (dollar figures in data tables only)|

### Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Source+Code+Pro:wght@400;600&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
```

### Type Scale

|Element       |Family            |Weight|Desktop |Mobile |Line Height|
|--------------|------------------|------|--------|-------|-----------|
|H1            |Cormorant Garamond|700   |3.5rem  |2.25rem|1.1        |
|H2            |Cormorant Garamond|600   |2.25rem |1.5rem |1.15       |
|H3            |Cormorant Garamond|700   |1.25rem |1.1rem |1.3        |
|Body large    |Source Sans Pro   |300   |1.125rem|1rem   |1.75       |
|Body          |Source Sans Pro   |400   |1rem    |1rem   |1.65       |
|Button        |Source Sans Pro   |700   |12.5px  |12.5px |1          |
|Section label |Source Sans Pro   |700   |10.5px  |10.5px |1          |
|Card status   |Source Sans Pro   |700   |10px    |10px   |1          |
|Meta / caption|Source Sans Pro   |400   |11.5px  |11.5px |1.5        |

### Letter Spacing

|Element                                  |Value   |
|-----------------------------------------|--------|
|H1, H2                                   |`0.01em`|
|Section labels                           |`0.20em`|
|Card status labels                       |`0.16em`|
|Button text                              |`0.10em`|
|Header subtitle "HEALTHCARE INTELLIGENCE"|`0.22em`|
|Header nav links                         |`0.06em`|
|Meta / timestamp                         |`0.07em`|

-----

## 3. Spacing System

Base unit: 8px.

|Token       |Value|
|------------|-----|
|`--space-1` |8px  |
|`--space-2` |16px |
|`--space-3` |24px |
|`--space-4` |32px |
|`--space-6` |48px |
|`--space-8` |64px |
|`--space-12`|96px |

Max content width: `1200px`. Padding: `0 40px` desktop, `0 24px` mobile.

-----

## 4. Header — Locked Specification

### Wordmark Block — Two-Line Lockup

Never separated. Identical across all subdomains.

- Line 1: "The Rojas Report" — Cormorant Garamond 700, 1.15rem, `--cream`
- Line 2: "HEALTHCARE INTELLIGENCE" — Source Sans Pro 700, 8.5px, `--orange`, letter-spacing 0.22em, uppercase

### Behavior

- `position: sticky; top: 0; z-index: 100`
- Background: `--navy` (`#141b24`)
- Height: 68px desktop, 56px mobile
- Bottom border: `1px solid rgba(248,245,239,0.07)`

### Nav Links

Source Sans Pro 600, 12.5px, `--cream-60` at rest, `--cream` on hover, letter-spacing 0.06em.

Subscribe button: `--orange` background, `#fff` text, hover `--orange-hover`, padding 8px 20px, border-radius 2px.

### Site-Specific Nav

|Subdomain          |Nav Items                                    |
|-------------------|---------------------------------------------|
|rojasreport.com    |Investigations, States, About                |
|con.rojasreport.com|States, CON Map, The Breakup Act, About      |
|aha.rojasreport.com|Profiles, Red Flags, Methodology, About      |
|poh.rojasreport.com|States, By Score, About                      |
|fah.rojasreport.com|Board Members, Financials, Methodology, About|
|hac.rojasreport.com|Members, About                               |

### Mobile

Hamburger below 900px. Subscribe CTA always visible.

-----

## 5. Footer — Locked Specification

### Three-Column Layout

Column 1: Wordmark + "HEALTHCARE INTELLIGENCE" + tagline
Column 2: Network links
Column 3: Ecosystem links
Full-width bottom row: copyright left, built-for right

### Styling

- Background: `--navy` (`#141b24`)
- Top border: `1px solid rgba(248,245,239,0.07)`
- Padding: 72px 40px 48px desktop, 56px 24px 40px mobile
- Column labels: Source Sans Pro 700, 10px, `--cream-25`, letter-spacing 0.20em, uppercase
- Links: Source Sans Pro 400, 13.5px, `--cream-60`, hover `--orange`

### Tagline (locked)

> The definitive source for healthcare market intelligence. Data-driven investigations into the policies, monopolies, and market structures that shape 20% of U.S. GDP.

### Built-For Line (locked)

> Built for physicians, executives & lawmakers.

### Confirmed URLs

**Network:**

|Label           |URL                            |
|----------------|-------------------------------|
|The Rojas Report|https://rojasreport.com        |
|Substack        |https://read.rojasreport.com/  |
|About           |https://rojasreport.com/about  |
|Privacy Policy  |https://rojasreport.com/privacy|
|Contact         |https://rojasreport.com/contact|

**Ecosystem:**

|Label                               |URL                        |
|------------------------------------|---------------------------|
|MedMerge                            |https://medmerge.co        |
|PhyCap Fund                         |https://www.phycapfund.com/|
|Physician Led Healthcare for America|https://physiciansled.com/ |

-----

## 6. Buttons

|Variant|Background |Text        |Border                      |
|-------|-----------|------------|----------------------------|
|Primary|`#cf5604`  |`#fff`      |none                        |
|Ghost  |transparent|`--cream-60`|`1px rgba(248,245,239,0.20)`|

- Padding: 12px 24px
- Border radius: 2px
- Font: Source Sans Pro 700, 12.5px, uppercase, letter-spacing 0.10em
- Transition: 150ms ease

### Post to X Button

Ghost variant with X logo SVG (14x14px). Required in hero section of every page on every site.

-----

## 7. Cards

### State / Profile Card

- Background: `#0f1a24`
- Left border: `3px solid #cf5604`
- No other borders, no shadows
- Padding: 28px 24px
- Score badge: absolute top-right, color per severity scale (Section 1)
- State name: Cormorant Garamond 700, 1.25rem, `--cream`
- Status label: Source Sans Pro 700, 10px, `--cream-40`, letter-spacing 0.16em, uppercase
- Body: Source Sans Pro 400, 13.5px, `--cream-60`, line-height 1.65
- CTA link: Source Sans Pro 700, 11px, `--orange`, letter-spacing 0.12em, uppercase

### Intelligence Dossier Card

- Same background and left-border as state card
- Category label: Source Sans Pro 700, 10.5px, `--cream-40`, letter-spacing 0.20em, uppercase
- Figure: Cormorant Garamond 700, 2.5–3rem, `--orange`
- Description: Source Sans Pro 400, 14px, `--cream-60`

### Card Grid

- 3 columns desktop, 1 column mobile
- Gap: 1px, `background: rgba(248,245,239,0.05)` on container

-----

## 8. Page Layout — Standard Structure

```
[HEADER — sticky]
[HERO — tag label, H1, body, meta, CTAs]
[BREADCRUMB — all non-homepage pages]
[SECTION EYEBROW — numbered orange badge + all-caps label]
[ORANGE RULE — 48px wide, 2px tall]
[PRIMARY CONTENT]
[CITATION BLOCK — minimum 6 primary sources in HTML]
[WHAT TO READ NEXT]
[FOOTER]
```

### Hero

- Background: `#070b11`
- Tag label: `1px solid rgba(207,86,4,0.45)`, text `--orange`, Source Sans Pro 700, 10px, letter-spacing 0.20em, uppercase
- H1: 3.5rem, `--cream`, one key phrase in `--orange`
- Body: Source Sans Pro 300, 1.125rem, `--cream-60`, max-width 640px
- Meta: Source Sans Pro 400, 11.5px, `--cream-25`, letter-spacing 0.07em, uppercase — author and date
- Padding: 80px 40px 72px desktop, 56px 24px 48px mobile

-----

## 9. Entity Architecture

### Confirmed URLs

**Dutch Rojas — Person:**

|Platform         |URL                                   |
|-----------------|--------------------------------------|
|X                |https://x.com/dutchrojas              |
|LinkedIn         |https://www.linkedin.com/in/dutchrojas|
|YouTube          |https://www.youtube.com/@DutchRojas   |
|Substack         |https://read.rojasreport.com/         |
|About (canonical)|https://rojasreport.com/about         |

**Rojas Report — Organization:**

|Platform|URL                                               |
|--------|--------------------------------------------------|
|X       |https://x.com/TheRojasReport                      |
|LinkedIn|https://www.linkedin.com/company/the-rojas-report/|

### JSON-LD — Every Page Minimum

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Rojas Media LLC",
      "url": "https://rojasreport.com",
      "sameAs": [
        "https://x.com/TheRojasReport",
        "https://www.linkedin.com/company/the-rojas-report/"
      ],
      "founder": { "@type": "Person", "name": "Dutch Rojas" }
    },
    {
      "@type": "Person",
      "name": "Dutch Rojas",
      "jobTitle": "Founder",
      "affiliation": { "@type": "Organization", "name": "Rojas Media LLC" },
      "sameAs": [
        "https://x.com/dutchrojas",
        "https://www.linkedin.com/in/dutchrojas",
        "https://www.youtube.com/@DutchRojas",
        "https://read.rojasreport.com/",
        "https://rojasreport.com/about"
      ]
    }
  ]
}
```

-----

## 10. Meta Tags — Standard Block

```html
<title>[Page Title] | Rojas Report</title>
<meta name="description" content="[150-160 characters]">
<link rel="canonical" href="https://[subdomain].rojasreport.com/[path]">
<meta property="og:title" content="[Page Title] | Rojas Report">
<meta property="og:description" content="[150-160 characters]">
<meta property="og:image" content="https://[subdomain].rojasreport.com/og-image.png">
<meta property="og:url" content="https://[subdomain].rojasreport.com/[path]">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Rojas Report">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Page Title] | Rojas Report">
<meta name="twitter:description" content="[150-160 characters]">
<meta name="twitter:image" content="https://[subdomain].rojasreport.com/og-image.png">
<meta name="twitter:site" content="@TheRojasReport">
```

OG image: 1200x630px PNG at `/public/og-image.png`.

-----

## 11. llms.txt — Standard Structure

```
# [Site Name] — Rojas Report Intelligence Network

#summary
[2-3 sentences]

#author
Dutch Rojas, founder of Rojas Media LLC. Former Marine. 20+ years building, financing, and exiting healthcare companies.

#publisher
Rojas Media LLC — https://rojasreport.com

#network
- https://aha.rojasreport.com — American Hospital Association Intelligence
- https://fah.rojasreport.com — Federation of American Hospitals Intelligence
- https://hac.rojasreport.com — CMS Healthcare Advisory Committee Intelligence
- https://poh.rojasreport.com — Physician-Owned Hospital Intelligence
- https://con.rojasreport.com — Certificate of Need Law Intelligence

#sources
[Primary sources for this site]

#permissions
GPTBot, ClaudeBot, PerplexityBot, and all major AI crawlers permitted. Attribution to Dutch Rojas and Rojas Media LLC requested.
```

-----

## 12. robots.txt — Standard

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://[subdomain].rojasreport.com/sitemap.xml
```

-----

## 13. Standing Build Checklist

- [ ] `generateMetadata()` on every dynamic route — server component, never `"use client"`
- [ ] Twitter/X card: `summary_large_image`
- [ ] Open Graph — all 4 tags
- [ ] `og-image.png` in `/public` — 1200x630px
- [ ] Canonical tag on every page
- [ ] JSON-LD — Organization + Person + WebSite on homepage; Article or Dataset on content pages
- [ ] `llms.txt` with all required sections
- [ ] `robots.txt` — AI crawlers permitted
- [ ] `sitemap.xml` — all URLs
- [ ] `not-found.tsx` returning HTTP 404
- [ ] Internal cross-links to all live sibling sites
- [ ] Author attribution visible in HTML on all content pages
- [ ] `dateModified` visible on every content page
- [ ] Footer — confirmed URLs, copyright, ecosystem links
- [ ] Citation block — minimum 6 primary sources in HTML per page
- [ ] Post to X button — hero section
- [ ] Mobile audit — all tables, grids, nav
- [ ] Score badges using severity color scale (Section 1)

-----

## 14. Propagation Order

1. poh.rojasreport.com
1. aha.rojasreport.com
1. hac.rojasreport.com
1. fah.rojasreport.com (RojasReportIntelligence/apps/fah — canonical)
1. con.rojasreport.com (when built)
1. rojasreport.com hub (when rebuilt)

-----

*DESIGN.md v1.1 — Rojas Media LLC — April 2, 2026*
*All tokens confirmed against live CSS. All URLs confirmed live.*
*Next update: CON data schema finalized*
