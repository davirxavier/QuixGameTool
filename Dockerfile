FROM node:16.20.2-alpine
RUN apk update && apk add git

COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/qxgametool-server && cp -a /tmp/node_modules /usr/qxgametool-server

WORKDIR /usr/qxgametool-server
COPY . /usr/qxgametool-server

ARG BASE_PATH
RUN sed -i "s/\(<base href=\"\).*\(\">\)/\1\/${BASE_PATH}\2/" /usr/qxgametool-server/src/index.html

RUN npm install
EXPOSE 4200
CMD npm run start -- --host 0.0.0.0
