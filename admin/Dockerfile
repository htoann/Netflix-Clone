FROM node:14.21.3

WORKDIR /app

# first, install dependencies, 
COPY package.json .

RUN npm install

# and then copy everything else in.
COPY . .

EXPOSE ${ADMIN_PORT}

CMD ["npm", "start"]