#!/bin/bash
docker compose exec php chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache
docker compose exec php chmod -R 775 /var/www/storage /var/www/bootstrap/cache
docker compose exec php composer install
docker compose exec php php artisan key:generate
docker compose exec php php artisan config:cache
docker compose exec php php artisan migrate
docker compose exec php bash -c "cd laravel_react_project;npm install;npm run build"
