#!/bin/bash

set -exu
__DIR__=$(
  cd "$(dirname "$0")"
  pwd
)

cd ${__DIR__}

test -d dist && rm -rf dist
mkdir -p dist/

cd ${__DIR__}/dist

test -f search-engine-extension.zip && rm -f search-engine-extension.zip


cd ${__DIR__}
zip -r dist/search-engine-extension.zip . \
  -x ".git/*" \
  -x ".idea/*" \
  -x "_metadata/*" \
  -x "node_modules/*" \
  -x "package-lock.json" \
  -x "local-deploy.sh" \
  -x "format-code.sh" \
  -x "release-archive.sh" \
  -x "update-library.sh" \
  -x "dist/*" \
  -x "screenshots/*"


cd ${__DIR__}/dist
# 查看打包结果
unzip search-engine-extension.zip -d search-engine-extension

cd ${__DIR__}
