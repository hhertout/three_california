FROM node:20-alpine3.19

RUN apk update

WORKDIR /app

COPY ./package.json ./package-lock.json ./


RUN npm install

COPY . .

CMD ["npm", "run", "dev"]