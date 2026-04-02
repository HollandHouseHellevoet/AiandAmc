import Head from 'next/head';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 — Page Not Found | Rojas Report</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#070b11',
        color: '#f8f5ef',
        fontFamily: "'Source Sans Pro', system-ui, sans-serif",
        padding: '40px',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 700,
          fontSize: '3.5rem',
          marginBottom: '16px',
          lineHeight: 1.1,
        }}>
          404
        </h1>
        <p style={{
          fontSize: '1.125rem',
          color: 'rgba(248,245,239,0.60)',
          fontWeight: 300,
          maxWidth: '480px',
          lineHeight: 1.75,
          marginBottom: '36px',
        }}>
          This page does not exist. The data you are looking for may have been moved or is not yet published.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#cf5604',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '2px',
            fontWeight: 700,
            fontSize: '12.5px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase' as const,
            textDecoration: 'none',
          }}
        >
          Return to Briefing
        </a>
      </div>
    </>
  );
}
