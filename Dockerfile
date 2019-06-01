FROM node:11.12.0-alpine

WORKDIR .

COPY . .

RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]