#!/bin/bash

export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  \. "$NVM_DIR/nvm.sh"
  echo "nvm инициализирован."
else
  echo "nvm не найден. Убедитесь, что nvm установлен."
  exit 1
fi

cd /var/www/understat/frontend || { echo "Не удалось перейти в директорию проекта."; exit 1; }

if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
  echo "Переменные окружения загружены из .env."
else
  echo ".env файл не найден."
  exit 1
fi


pnpm install --store .pnpm-store
if [ $? -ne 0 ]; then
  echo "Ошибка при установке зависимостей."
  exit 1
fi
echo "Зависимости установлены."

pm2 reload sveltekit-app || pm2 start ./index.js --name sveltekit-app --watch -- --port 3000
if [ $? -ne 0 ]; then
  echo "Ошибка при запуске приложения через PM2."
  exit 1
fi
echo "Приложение запущено через PM2."

echo "Деплой завершён успешно."
