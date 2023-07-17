FROM node:alpine

USER root

RUN apk add --update yarn \
    && rm -rf /var/cache/apk/*
RUN npm i -g @angular/cli