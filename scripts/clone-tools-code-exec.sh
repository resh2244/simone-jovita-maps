#!/usr/bin/env bash
set -euo pipefail

# Set TOOLS_CODE_EXEC_REPO_URL to the authenticated clone URL before running.
# Do not commit credentials or the URL containing credentials to this repository.
: "${TOOLS_CODE_EXEC_REPO_URL:?Set TOOLS_CODE_EXEC_REPO_URL to the authenticated repository URL}"

target_dir="${1:-tools-code-exec-with-text}"

if [[ -e "$target_dir" ]]; then
  echo "Refusing to overwrite existing path: $target_dir" >&2
  exit 1
fi

git clone "$TOOLS_CODE_EXEC_REPO_URL" "$target_dir"
