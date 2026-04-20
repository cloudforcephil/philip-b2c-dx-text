/*
 * Patch getConfig before any SSR code runs. On MRT/Lambda, cosmiconfig may not find
 * config files on disk. This module is loaded first from overrides/app/ssr.js and from
 * overrides/app/server-renderer-entry.js (each bundle has its own ssr-config copy).
 */
'use strict'

const mobify = require('../../config/default.js')
const ssrConfig = require('@salesforce/pwa-kit-runtime/utils/ssr-config')

ssrConfig.getConfig = () => mobify

module.exports = {}
