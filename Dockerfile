FROM node:6.3

COPY package.json /app/package.json
WORKDIR /app
RUN npm install

COPY src /app/src/
COPY test /app/test/