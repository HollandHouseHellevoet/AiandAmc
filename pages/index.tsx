import Head from 'next/head';
import { GetStaticProps } from 'next';
import { useState } from 'react';

const XSVG = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Rojas Media LLC',
      url: 'https://rojasreport.com',
      sameAs: [
        'https://x.com/TheRojasReport',
        'https://www.linkedin.com/company/the-rojas-report/',
      ],
      founder: { '@type': 'Person', name: 'Dutch Rojas' },
    },
    {
      '@type': 'Person',
      name: 'Dutch Rojas',
      jobTitle: 'Founder',
      affiliation: { '@type': 'Organization', name: 'Rojas Media LLC' },
      sameAs: [
        'https://x.com/dutchrojas',
        'https://www.linkedin.com/in/dutchrojas',
        'https://www.youtube.com/@DutchRojas',
        'https://read.rojasreport.com/',
        'https://rojasreport.com/about',
      ],
    },
    {
      '@type': 'WebSite',
      name: 'The AMC Debt Trap',
      url: 'https://academic.rojasreport.com',
      publisher: { '@type': 'Organization', name: 'Rojas Media LLC' },
    },
  ],
};

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="https://rojasreport.com" className="header-brand">
          <span className="header-logo-text">The Rojas Report</span>
          <span className="header-tagline">Healthcare Intelligence</span>
        </a>
        <nav className="header-nav">
          <div className="desktop-nav">
            <a href="#thesis">Thesis</a>
            <a href="#the-data">The Data</a>
            <a href="#scenarios">Scenarios</a>
            <a href="#about">About</a>
            <a href="https://read.rojasreport.com/" className="btn-subscribe">Subscribe</a>
          </div>
          <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </nav>
      </div>
      <nav className="mobile-nav" style={{ display: mobileOpen ? 'flex' : 'none' }}>
        <a href="#thesis">Thesis</a>
        <a href="#the-data">The Data</a>
        <a href="#scenarios">Scenarios</a>
        <a href="#about">About</a>
        <a href="https://read.rojasreport.com/" className="mobile-sub">Subscribe on Substack</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <span className="footer-wordmark">The Rojas Report</span>
            <span className="footer-tagline-sub">Healthcare Intelligence</span>
            <p className="footer-desc">
              The definitive source for healthcare market intelligence. Data-driven
              investigations into the policies, monopolies, and market structures
              that shape 20% of U.S. GDP.
            </p>
          </div>
          <div>
            <div className="footer-col-label">Network</div>
            <nav className="footer-links">
              <a href="https://rojasreport.com">The Rojas Report</a>
              <a href="https://read.rojasreport.com/">Substack</a>
              <a href="https://rojasreport.com/about">About</a>
              <a href="https://rojasreport.com/privacy">Privacy Policy</a>
              <a href="https://rojasreport.com/contact">Contact</a>
            </nav>
          </div>
          <div>
            <div className="footer-col-label">Ecosystem</div>
            <nav className="footer-links">
              <a href="https://medmerge.co">MedMerge</a>
              <a href="https://www.phycapfund.com/">PhyCap Fund</a>
              <a href="https://physiciansled.com/">Physician Led Healthcare for America</a>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">&copy; 2026 Rojas Media LLC. All rights reserved.</span>
          <span className="footer-built">Built for physicians, executives &amp; lawmakers.</span>
        </div>
      </div>
    </footer>
  );
}

/* ─── SECTION 1: HERO ─── */
function HeroSection() {
  const tweetText = encodeURIComponent(
    'The AMC Debt Trap: Five institutions issued $5B+ in new debt while operating at or below 2% margin. The most protected are the most exposed. https://academic.rojasreport.com'
  );
  return (
    <section className="hero" id="thesis">
      <div className="hero-inner">
        <div className="hero-tag">Intelligence Briefing</div>
        <h1>
          The AMC Debt Trap
        </h1>
        <h1 style={{ marginTop: '-10px' }}>
          The Most Protected Are the <span>Most Exposed</span>
        </h1>
        <p className="hero-body">
          Academic medical centers borrowed at scale for forty years on a credential
          scarcity argument that no longer holds. The debt remains. The institutions
          that issued it will be the last to admit the collateral is obsolete — and
          the first to ask for a bailout.
        </p>
        <div className="hero-meta">
          Dutch Rojas &nbsp;&middot;&nbsp; Rojas Media LLC &nbsp;&middot;&nbsp; April 2, 2026
        </div>
        <div className="hero-btns">
          <a href="#finding" className="btn-primary">Read the Thesis &rarr;</a>
          <a
            href={`https://x.com/intent/tweet?text=${tweetText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <XSVG /> Post to X
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 2: KEY FINDING ─── */
function FindingSection() {
  return (
    <section className="content-section" id="finding">
      <div className="content-inner">
        <div className="section-eyebrow">
          <span className="section-num">01</span>
          <span className="section-label">The Finding</span>
        </div>
        <h2 className="section-h2">Five Institutions. $5B. Sub-2% Margins.</h2>
        <p className="section-desc">
          This is not a stress indicator. This is the argument. Institutions
          borrowing at scale while operating performance deteriorates.
        </p>
        <div className="orange-rule" />

        <div className="card-grid">
          <div className="card">
            <div className="card-figure">$5B+</div>
            <div className="card-label">New Debt Issued</div>
            <p className="card-desc">
              Five AMCs issued over $5 billion in combined new debt while operating
              at or below 2% margin.
            </p>
          </div>
          <div className="card">
            <div className="card-figure">5</div>
            <div className="card-label">Institutions</div>
            <p className="card-desc">
              UPMC, Northwell, Duke, Yale New Haven, and Emory. Named. Documented.
              On the record.
            </p>
          </div>
          <div className="card">
            <div className="card-figure">2%</div>
            <div className="card-label">Operating Margin</div>
            <p className="card-desc">
              The threshold below which new debt issuance signals deteriorating
              fundamentals, not investment.
            </p>
          </div>
        </div>

        {/* 5-institution issuance table */}
        <div style={{ marginTop: '36px' }}>
          <div className="table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Institution</th>
                  <th>New Issuance</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="institution">UPMC</td>
                  <td className="mono">$1.6B</td>
                  <td>2025</td>
                </tr>
                <tr>
                  <td className="institution">Northwell Health</td>
                  <td className="mono">$762.8M</td>
                  <td>2024</td>
                </tr>
                <tr>
                  <td className="institution">Duke University Health System</td>
                  <td className="mono">$743M</td>
                  <td>2025</td>
                </tr>
                <tr>
                  <td className="institution">Yale New Haven Health</td>
                  <td className="mono">$669M</td>
                  <td>2024</td>
                </tr>
                <tr>
                  <td className="institution">Emory Healthcare</td>
                  <td className="mono">$1B+</td>
                  <td>2025 (planned)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="table-caption">
            Source: EMMA/MSRB, institutional continuing disclosure filings.
            Flagged entries verified against public bond documents.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 3: WHY IT WORKED ─── */
function WhyItWorkedSection() {
  return (
    <section className="content-section">
      <div className="content-inner">
        <div className="section-eyebrow">
          <span className="section-num">02</span>
          <span className="section-label">Forty Years</span>
        </div>
        <h2 className="section-h2">Why the AMC Debt Model Worked</h2>
        <div className="orange-rule" />

        <div className="card-grid">
          <div className="card card-no-border">
            <h3>Credential Scarcity</h3>
            <div className="card-status">&nbsp;</div>
            <p>
              Hands-on volume, credentialed faculty, and physical infrastructure
              were non-substitutable. This justified facility expansion as a
              competitive moat.
            </p>
          </div>
          <div className="card card-no-border">
            <h3>Federal Revenue Floor</h3>
            <div className="card-status">&nbsp;</div>
            <p>
              NIH grant revenue and indirect cost recovery provided a funding floor
              that made long-duration bond issuance appear low-risk.
            </p>
          </div>
          <div className="card card-no-border">
            <h3>Prestige Pricing Power</h3>
            <div className="card-status">&nbsp;</div>
            <p>
              AMC brand translated into above-market reimbursement, facility fee
              stacking, and payer negotiating leverage that serviced the debt.
            </p>
          </div>
        </div>

        <p className="body-close">
          These assumptions were correct. For forty years, they held. The bond
          market priced them accordingly.
        </p>
      </div>
    </section>
  );
}

/* ─── SECTION 4: WHY IT'S A LIABILITY ─── */
function LiabilitySection() {
  return (
    <section className="content-section">
      <div className="content-inner">
        <div className="section-eyebrow">
          <span className="section-num">03</span>
          <span className="section-label">The Inversion</span>
        </div>
        <h2 className="section-h2">Why the Same Logic Is Now a Liability</h2>
        <div className="orange-rule" />

        <div className="card-grid">
          <div className="card">
            <h3>Assumption 1 Inverted</h3>
            <div className="card-status">Credential Scarcity</div>
            <p>
              Robot-assisted surgery and AI-augmented diagnostics have decoupled
              skill acquisition from physical volume. The credential scarcity
              argument that justified $2B surgical towers is eroding in real time.
            </p>
          </div>
          <div className="card">
            <h3>Assumption 2 Exposed</h3>
            <div className="card-status">NIH Indirect Cost Recovery</div>
            <p>
              Federal scrutiny of indirect cost recovery rates hits AMC operating
              margins directly. Institutions modeled for 26-28% recovery rates are
              not hedged for 18%.
            </p>
          </div>
          <div className="card">
            <h3>Assumption 3 Legislated Away</h3>
            <div className="card-status">Pricing Power</div>
            <p>
              Price transparency enforcement, site-neutral payment proposals, and
              facility fee reform target the exact revenue streams that made AMC
              debt serviceable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */
export default function HomePage() {
  return (
    <>
      <Head>
        <title>The AMC Debt Trap | Rojas Report</title>
        <meta
          name="description"
          content="Academic medical centers borrowed at scale for forty years on a credential scarcity argument that no longer holds. The data is in."
        />
        <link rel="canonical" href="https://academic.rojasreport.com" />
        <meta property="og:title" content="The AMC Debt Trap | Rojas Report" />
        <meta
          property="og:description"
          content="Academic medical centers borrowed at scale for forty years on a credential scarcity argument that no longer holds. The data is in."
        />
        <meta property="og:image" content="https://academic.rojasreport.com/og-image.png" />
        <meta property="og:url" content="https://academic.rojasreport.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Rojas Report" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The AMC Debt Trap | Rojas Report" />
        <meta
          name="twitter:description"
          content="Academic medical centers borrowed at scale for forty years on a credential scarcity argument that no longer holds. The data is in."
        />
        <meta name="twitter:image" content="https://academic.rojasreport.com/og-image.png" />
        <meta name="twitter:site" content="@TheRojasReport" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </Head>

      <Header />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Key Finding */}
      <FindingSection />

      {/* 3. Why It Worked */}
      <WhyItWorkedSection />

      {/* 4. Why It's a Liability */}
      <LiabilitySection />

      {/* Sections 5-9 will be added in Commit 2 */}

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};
