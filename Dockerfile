FROM caddy:2.7-alpine

COPY .docker/Caddyfile /etc/caddy/Caddyfile
COPY storybook-static/ /usr/share/caddy