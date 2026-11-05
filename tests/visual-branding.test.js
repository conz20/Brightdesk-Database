'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.join(__dirname,'..');
test('Database follows the approved Brightdesk design contract',()=>{
 const css=fs.readFileSync(path.join(root,'src/design-system.css'),'utf8');
 const html=fs.readFileSync(path.join(root,'src/index.html'),'utf8');
 const readme=fs.readFileSync(path.join(root,'README.md'),'utf8');
 const brief=fs.readFileSync(path.join(root,'docs/BRIGHTDESK_DESIGN.md'),'utf8');
 const icon=fs.readFileSync(path.join(root,'src/branding/icons/database.svg'),'utf8');
 assert.ok(css.includes('#F3F6FA')&&css.includes('#14233F')&&css.includes('#0D1930'));
 assert.match(css,/\.sidebar\s*\{[^}]*background:var\(--bd-nav-background\)/s);
 const accents=[...css.matchAll(/--bd-accent\s*:\s*(#[0-9a-fA-F]{6})/g)];
 assert.equal(accents.at(-1)[1].toUpperCase(),'#8058B3');
 assert.ok(html.includes(path.basename('src/branding/icons/database.svg')));
 assert.match(icon,/<svg[^>]+role="img"/);
 assert.ok(readme.includes('docs/BRIGHTDESK_DESIGN.md'));
 assert.ok(brief.includes('BRIGHTDESK_VISUAL_STANDARD.md')&&brief.includes('#8058B3'));
});

test('final stylesheet tokens match the exact approved Database palette', () => {
  const css = fs.readFileSync(path.join(root, 'src', 'design-system.css'), 'utf8');
  const lastHex = (token) => {
    const values = [...css.matchAll(new RegExp(token + String.raw`\s*:\s*(#[0-9a-f]{6})`, 'gi'))];
    return values.at(-1)?.[1].toUpperCase();
  };

  assert.equal(lastHex('--bd-accent'), '#8058B3');
  assert.equal(lastHex('--bd-accent-strong'), '#63428F');
  assert.equal(lastHex('--bd-accent-soft'), '#F3EFF8');
  assert.equal(lastHex('--bd-product-tint'), '#F3EFF8');
  assert.equal(lastHex('--bd-canvas'), '#F3F6FA');
  assert.equal(lastHex('--bd-ink'), '#202B3C');
});
