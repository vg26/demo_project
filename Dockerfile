FROM node:lts-alpine

COPY ./ /tests

WORKDIR /tests

RUN npm install codeceptjs codeceptjs-testrail webdriverio

CMD ["sh", "-c", "npx codeceptjs run "]