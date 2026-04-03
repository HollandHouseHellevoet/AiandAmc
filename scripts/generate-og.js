const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const CHROMIUM = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

(async () => {
  // Base64-encode local font files for embedding
  const fontsDir = path.join(__dirname, '..', 'node_modules', '@fontsource');
  const cgBold = fs.readFileSync(path.join(fontsDir, 'cormorant-garamond', 'files', 'cormorant-garamond-latin-700-normal.woff2')).toString('base64');
  const ss700 = fs.readFileSync(path.join(fontsDir, 'source-sans-3', 'files', 'source-sans-3-latin-700-normal.woff2')).toString('base64');
  const ss300 = fs.readFileSync(path.join(fontsDir, 'source-sans-3', 'files', 'source-sans-3-latin-300-normal.woff2')).toString('base64');

  const fontFaces = `
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
}`;

  // Read template and inject font faces
  const templatePath = path.join(__dirname, 'og-template.html');
  const html = fs.readFileSync(templatePath, 'utf8').replace('@@FONT_FACES@@', fontFaces);

  // Launch puppeteer with local chromium
  const browser = await puppeteer.launch({
    executablePath: CHROMIUM,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.setContent(html, { waitUntil: 'load' });

  // Allow fonts to render
  await page.evaluate(() => document.fonts.ready);

  const outPath = path.join(__dirname, '..', 'public', 'og-image.png');
  await page.screenshot({ path: outPath, type: 'png' });

  await browser.close();
  console.log('Generated', outPath, `(${fs.statSync(outPath).size} bytes)`);
})();
