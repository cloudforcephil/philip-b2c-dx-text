#!/usr/bin/env bash
# b2c mrt bundle deploy uses SSR glob defaults that omit build/server-renderer.js (PWA Kit puts it at
# the build root, not under server/). Patterns here must match config/default.js mobify.ssrOnly / ssrShared.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
PROJECT="${npm_package_name:-$(node -p "require('./package.json').name")}"
TARGET="${MRT_ENV:-production}"
MSG="${1:-Deploy $(git rev-parse --short HEAD 2>/dev/null || echo manual)}"

npm run build

exec b2c mrt bundle deploy \
  -p "$PROJECT" \
  -e "$TARGET" \
  --node-version 20.x \
  --ssr-only 'ssr.js,ssr.js.map,node_modules/**/*.*' \
  --ssr-shared 'static/ico/favicon.ico,static/robots.txt,server-renderer.js,loadable-stats.json,config/default.js,config/production.js,config/sites.js,config/utils.js,**/*.js,**/*.js.map,**/*.json' \
  -m "$MSG"
