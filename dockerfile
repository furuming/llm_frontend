FROM node:latest

WORKDIR /var/www/frontend

COPY . .

RUN yarn


