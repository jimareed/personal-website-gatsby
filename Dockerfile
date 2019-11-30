FROM node:latest

RUN npm install -g gatsby-cli

RUN mkdir -p /usr/src/app
ADD . /usr/src/app
WORKDIR /usr/src/app

RUN npm install

EXPOSE 8000

CMD ["gatsby", "develop", "-H", "0.0.0.0"]