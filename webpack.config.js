/*
 * Point the server (server-renderer) entry at a wrapper that primes getConfig before react-rendering.
 * Without this, only overrides/app/ssr.js patches ssr-config; server-renderer.js is a separate bundle
 * with an unpatched copy and getConfig() fails on Managed Runtime.
 */
'use strict'

const path = require('path')
const baseConfigs = require('@salesforce/pwa-kit-dev/configs/webpack/config.js')
const {SERVER} = require('@salesforce/pwa-kit-dev/configs/webpack/config-names')

const serverRendererEntry = path.join(__dirname, 'overrides', 'app', 'server-renderer-entry.js')

module.exports = baseConfigs.map((config) => {
    if (config.name !== SERVER) {
        return config
    }
    return {
        ...config,
        entry: serverRendererEntry
    }
})
