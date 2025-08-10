# PHP Laravel project

## Requirements
- Docker lts

## How to install
- run `docker build -t php_api_test .` to build the docker image 
  - `-t` is to specify the container name to build that is defined in [docker-compose.yaml](docker-compose.yaml)
- run `docker run -p 81:8000 -d php_api_test` and access project at `http://127.0.0.1:81` 
  - 404 page is expected on landing 
  - available testing routes 
    - `http://127.0.0.1:81/api/v1/posts`
    - `http://127.0.0.1:81/api/v1/posts/:id`

## Directory structure
- [app](app) - main php code base
  - [DataTransferObjects](app/DataTransferObjects) - Used for data structure integrity 
  - [Http](app/Http) 
    - [Controllers](app/Http/Controllers) -  controllers where the routes point for data rendering
  - [Models](app/Models) - database models
  - [Providers](app/Providers) - laravel providers
  - [Repositories](app/Repositories) - clases that hold common repeating db queries
- [bootstrap](bootstrap) - internal bootstrap-ing initialization
- [config](config) - project config files
- [database](database) - database specific files
- [public](public) -  public access point for the nginx/apache server
- [resources](resources) - not used
- [routes](routes) - Web/API routes
- [storage](storage) - Internal application storage
- [tests](tests) - PHPUnit tests

## Nginx config
On a linux server if nginx is installed, add the fallowing config for reverse proxy domain 
```
server {
    listen 81;
    listen [::]:81;

    server_name your_domain.dev;

    location / {
        proxy_pass http://backend_server_ip:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
