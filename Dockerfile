FROM node:16.20.2-alpine as build
RUN apk update && apk add git

COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/qxgametool-server && cp -a /tmp/node_modules /usr/qxgametool-server

WORKDIR /usr/qxgametool-server
COPY . /usr/qxgametool-server

ARG BASE_PATH
RUN npm run build -- --base-href=/${BASE_PATH}/

FROM nginx:1.8-alpine

ARG BASE_PATH
RUN mkdir "/usr/share/nginx/html/${BASE_PATH}"
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build "/usr/qxgametool-server/dist/qgtfront" "/usr/share/nginx/html/${BASE_PATH}"

ARG EXTERNAL_SERVER_PORT
RUN echo "server {" > /etc/nginx/conf.d/default.conf
RUN echo "  listen 0.0.0.0:${EXTERNAL_SERVER_PORT};" >> /etc/nginx/conf.d/default.conf
RUN echo "  root /usr/share/nginx/html;" >> /etc/nginx/conf.d/default.conf
RUN echo "  location ~ /${BASE_PATH}/index.html|.*\.json$ {" >> /etc/nginx/conf.d/default.conf
RUN echo "    expires -1;" >> /etc/nginx/conf.d/default.conf
RUN echo "    add_header Cache-Control 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0';" >> /etc/nginx/conf.d/default.conf
RUN echo "  }" >> /etc/nginx/conf.d/default.conf
RUN echo "  location /${BASE_PATH} {" >> /etc/nginx/conf.d/default.conf
RUN echo "    try_files \$uri \$uri/ /${BASE_PATH}/index.html =404;" >> /etc/nginx/conf.d/default.conf
RUN echo "  }" >> /etc/nginx/conf.d/default.conf
RUN echo "}" >> /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
