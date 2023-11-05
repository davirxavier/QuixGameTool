FROM node:16.20.2-bullseye as build
RUN apt-get -y update && apt-get -y install git

COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/qxgametool-server && cp -a /tmp/node_modules /usr/qxgametool-server

WORKDIR /usr/qxgametool-server
COPY . /usr/qxgametool-server

ARG BASE_PATH
RUN sed -i "s/\(<base href=\"\).*\(\">\)/\1\/${BASE_PATH}\/\2/" /usr/qxgametool-server/src/index.html

RUN npm install
RUN npm run build

FROM nginx:1.15.8-alpine
COPY --from=build /usr/qxgametool-server/dist/qgtfront /usr/share/nginx/html
EXPOSE 80
