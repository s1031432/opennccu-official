#!/bin/bash
set -e

echo "Building..."
npx nuxi build

# Kill existing production server on port 3010
PID=$(lsof -ti:3010 2>/dev/null || true)
if [ -n "$PID" ]; then
  echo "Stopping old server (PID: $PID)..."
  kill $PID 2>/dev/null || true
  sleep 1
fi

echo "Starting production server on port 3010..."
nohup node .output/server/index.mjs > /tmp/opennccu-server.log 2>&1 &
echo "Server started (PID: $!)"
echo "Live at https://wtf.yth.tw"
