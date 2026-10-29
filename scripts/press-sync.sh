#!/bin/zsh
# Sync hook of the Caption Genius project "Pavilion — Press" (its manifest's
# `sync`: {"kind": "command", "command": ["<this file>"]}). Caption Genius
# runs it with the job file and shows each line it prints; the last line, a
# URL, is where the result is.
#
# Uploads the included images (scripts/press.mjs), then publishes the list:
# copies press.json and captions.csv into the built site (release/) and
# deploys it as it is, without a rebuild. The two files are left changed in
# the working tree for the next commit.
set -e
setopt pipefail
export PATH="$HOME/.local/share/mise/installs/node/24/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
cd "${0:A:h}/.."

echo "Uploading the included images"
node scripts/press.mjs "${1:-$CG_SYNC_JOB}" | grep -v '^uploaded '

echo "Publishing the list"
mkdir -p release/data/press
cp resources/data/press/press.json resources/data/press/captions.csv release/data/press/
npx wrangler deploy --message "Press sync" >/dev/null 2>&1 || { echo "The deploy failed"; exit 1; }

want=$(node -e "console.log(require('./resources/data/press/press.json').images.length)")
for i in 1 2 3 4 5; do
  got=$(curl -s "https://armenianpavilion.org/data/press/press.json?v=$RANDOM" | node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>{try{console.log(JSON.parse(s).images.length)}catch{console.log(-1)}})")
  [ "$got" = "$want" ] && break
  sleep 2
done
[ "$got" = "$want" ] || { echo "The live list shows $got images, not $want"; exit 1; }
echo "Synced $want images to the Press page"
echo "https://armenianpavilion.org/press"
