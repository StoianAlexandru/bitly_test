# Start from a PHP-FPM base image
FROM php:8.3-fpm-alpine

# Set working directory
WORKDIR /var/www/html

# Install system dependencies
RUN apk update && apk add \
    git \
    curl \
    sqlite \
    sqlite-dev \
    libzip-dev \
    zip \
    unzip \
    && rm -rf /var/cache/apk/*

# Install PHP extensions and dependencies for Laravel
RUN docker-php-ext-install \
    pdo \
    pdo_sqlite \
    zip \
    opcache

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Expose port 9000 and start php-fpm server
EXPOSE 9000
CMD ["php-fpm"]
