#!/bin/bash

source .env

pnpm install

pnpm run build

rsync -avz --delete build/ dev@$SERVER_IP:~/frontend/

ssh dev@$SERVER_IP 'bash ~/deploy_frontend.sh'

ssh dev@$SERVER_IP 'sudo systemctl restart nginx'