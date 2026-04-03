const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  // Read font files and base64 encode
  const fontsDir = path.join(__dirname, '..', 'node_modules', '@fontsource');
  const cgBold = fs.readFileSync(path.join(fontsDir, 'cormorant-garamond', 'files', 'cormorant-garamond-latin-700-normal.woff2')).toString('base64');
  const ss700 = fs.readFileSync(path.join(fontsDir, 'source-sans-3', 'files', 'source-sans-3-latin-700-normal.woff2')).toString('base64');
  const ss300 = fs.readFileSync(path.join(fontsDir, 'source-sans-3', 'files', 'source-sans-3-latin-300-normal.woff2')).toString('base64');

  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
@font-face {
  font-family: 'Cormorant Garamond';
  font-weight: 700;
  src: url(data:font/woff2;base64,${cgBold}) format('woff2');
}
@font-face {
  font-family: 'Source Sans Pro';
  font-weight: 700;
  src: url(data:font/woff2;base64,${ss700}) format('woff2');
}
@font-face {
  font-family: 'Source Sans Pro';
  font-weight: 300;
  src: url(data:font/woff2;base64,${ss300}) format('woff2');
}
* { margin:0; padding:0; box-sizing:border-box; }
body {
  width: 1200px; height: 630px;
  background: #070b11;
  overflow: hidden;
  position: relative;
}
.edge-bar {
  position: absolute; left: 0; top: 0;
  width: 4px; height: 100%;
  background: #cf5604;
}
.top { position: absolute; left: 72px; top: 72px; }
.label {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700; font-size: 11px;
  color: #cf5604;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}
.headline {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700; font-size: 72px;
  color: #f8f5ef;
  line-height: 1.05;
  margin-top: 16px;
}
.headline .amc { color: #cf5604; }
.body-text {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 300; font-size: 21px;
  color: rgba(248,245,239,0.65);
  line-height: 1.5;
  margin-top: 20px;
  max-width: 700px;
}
.bottom {
  position: absolute;
  left: 72px; right: 72px; bottom: 56px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.wordmark {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700; font-size: 22px;
  color: #f8f5ef;
}
.subline {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700; font-size: 10px;
  color: #cf5604;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-top: 4px;
}
.cards { display: flex; gap: 12px; }
.card {
  background: #0f1a24;
  border-left: 3px solid #cf5604;
  padding: 20px 32px;
  min-width: 180px;
}
.card-number {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 700; font-size: 52px;
  color: #cf5604; line-height: 1;
}
.card-label {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700; font-size: 10px;
  color: #f8f5ef;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-top: 8px;
}
</style>
</head>
<body>
  <div class="edge-bar"></div>
  <div class="top">
    <div class="label">Intelligence Briefing &mdash; Rojas Report</div>
    <div class="headline">The <span class="amc">AMC</span> Debt Trap</div>
    <div class="body-text">
      The most protected institutions in American<br>
      healthcare are the most exposed.
    </div>
  </div>
  <div class="bottom">
    <div>
      <div class="wordmark">The Rojas Report</div>
      <div class="subline">Healthcare Intelligence</div>
    </div>
    <div class="cards">
      <div class="card">
        <div class="card-number">$5B+</div>
        <div class="card-label">New Debt Issued</div>
      </div>
      <div class="card">
        <div class="card-number">&le;2%</div>
        <div class="card-label">Operating Margin</div>
      </div>
      <div class="card">
        <div class="card-number">25</div>
        <div class="card-label">AMCs Profiled</div>
      </div>
    </div>
  </div>
</body>
</html>`;

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 630 });

  await page.setContent(html, { waitUntil: 'load' });
  // Give fonts time to render
  await page.waitForTimeout(1000);

  const outPath = path.join(__dirname, '..', 'public', 'og-image.png');
  await page.screenshot({ path: outPath, type: 'png' });

  await browser.close();
  console.log('Generated', outPath, `(${fs.statSync(outPath).size} bytes)`);
})();
