FROM node:14.21.3

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE ${CLIENT_PORT}

CMD ["npm", "start"]