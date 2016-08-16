FROM node:6.3

RUN npm install -g mocha

COPY package.json /app/package.json
WORKDIR /app
RUN npm install
COPY favicon.ico /app/favicon.ico
COPY .babelrc /app/.babelrc
COPY index.html /app/index.html
COPY src /app/src
COPY test /app/test