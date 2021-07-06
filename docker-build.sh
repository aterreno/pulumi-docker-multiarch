#!/bin/bash
set -Eeuo pipefail

docker build -f ./Dockerfile --platform linux/amd64,linux/arm64 . -t e23d430b-container