#!/bin/bash

export NVM_DIR=\"\$HOME/.nvm\"
[ -s \"\$NVM_DIR/nvm.sh\" ] && \. \"\$NVM_DIR/nvm.sh\"

cd /var/www/understat/frontend || exit

pnpm install --store .pnpm-store

pm2 reload sveltekit-app || pm2 start build/index.js --name sveltekit-app -- --port 4671
