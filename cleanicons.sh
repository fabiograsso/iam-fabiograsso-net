#!/bin/sh
# This script cleans up the icons directory by removing files that are present in the blowfish theme's assets/icons directory.
# Ensure the script is run from the correct directory

for file in ./themes/blowfish/assets/icons/*; do
  filename=$(basename "$file")
  if [ -f "./assets/icons/$filename" ]; then
    rm "./assets/icons/$filename"
    echo "Deleted: ./assets/icons/$filename"
  fi
done
