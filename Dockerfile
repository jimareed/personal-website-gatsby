FROM node:latest

RUN npm install -g gatsby-cli

RUN mkdir /home/node/app
WORKDIR /home/node/app

EXPOSE 8000

CMD ["gatsby", "develop", "-H", "0.0.0.0"]