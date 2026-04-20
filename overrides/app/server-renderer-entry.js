/*
 * Copyright (c) 2023, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 */
'use strict'

// Must run before react-rendering loads ssr-config (separate webpack bundle from overrides/app/ssr.js).
require('./prime-ssr-config.js')

module.exports = require('@salesforce/pwa-kit-react-sdk/ssr/server/react-rendering.js')
