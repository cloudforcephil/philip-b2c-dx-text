/*
 * Managed Runtime sets DEPLOY_TARGET=production; cosmiconfig loads this before default.*.
 * Re-export default so behavior stays in sync.
 */
module.exports = require('./default.js')
