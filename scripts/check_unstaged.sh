#!/bin/bash

if [[ $(git ls-files --others --modified --exclude-standard) ]]; then
  echo ""
  echo "ERROR: There are unstaged changes."
  echo "  Run 'npm run stash', commit, and then run 'npm run unstash'."
  echo ""
  exit 1
fi
