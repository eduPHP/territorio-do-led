/**
 * prerender.mjs
 * Run after `vite build` to inject server-rendered HTML into dist/index.html.
 * This gives web crawlers fully populated markup without a live server.
 *
 * Usage (via npm run build): see package.json
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, 'dist')
const ssrDir = path.resolve(__dirname, 'dist-ssr')

// Load the SSR bundle produced by `vite build --ssr`
const { render } = await import(path.join(ssrDir, 'entry-server.js'))

// Read the client-built HTML shell (contains asset links injected by Vite)
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

// Render the React tree to an HTML string
const appHtml = render()

// Inject the rendered markup into the root div
const finalHtml = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`
)

// Overwrite dist/index.html with the pre-rendered version
fs.writeFileSync(path.join(distDir, 'index.html'), finalHtml)

// Cleanup: remove the temporary SSR bundle (not needed for deployment)
fs.rmSync(ssrDir, { recursive: true, force: true })

console.log('[prerender] ✅ dist/index.html pre-rendered successfully')
