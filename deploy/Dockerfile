FROM ubuntu:22.04

WORKDIR /app

ARG pwd
ENV pwd ${pwd}

RUN apt-get update -y
RUN apt-get install curl -y
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash - &&\
    apt-get install -y nodejs ncftp

COPY ../package*.json ./
RUN npm install
COPY ../ .
RUN npm run docs:build

RUN ncftpput -R -v -u "deploy-service" -p ${pwd} ftp.rotfuks.de / /app/content/.vitepress/dist/*