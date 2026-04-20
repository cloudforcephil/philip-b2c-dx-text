/**
 * After `pwa-kit-dev build`, attach the resolved app config under `mobify` in `build/package.json`.
 * Managed Runtime / Lambda may not ship loose `config/*.js` files where cosmiconfig expects them;
 * `getConfig()` falls back to the `mobify` key in package.json (see pwa-kit-runtime ssr-config.server.js).
 */
'use strict'

const fs = require('fs')
const path = require('path')

const projectRoot = path.resolve(__dirname, '..')
const buildPkgPath = path.join(projectRoot, 'build', 'package.json')

// eslint-disable-next-line import/no-dynamic-require
const mobify = require(path.join(projectRoot, 'config', 'default.js'))

const pkg = JSON.parse(fs.readFileSync(buildPkgPath, 'utf8'))
pkg.mobify = mobify
fs.writeFileSync(buildPkgPath, `${JSON.stringify(pkg, null, 2)}\n`)
console.log('attach-mobify: wrote mobify config into build/package.json')
