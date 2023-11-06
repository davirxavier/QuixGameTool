FROM node:16.20.2-alpine as build
RUN apk update && apk add git

COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /usr/qxgametool-server && cp -a /tmp/node_modules /usr/qxgametool-server

WORKDIR /usr/qxgametool-server
COPY . /usr/qxgametool-server

ARG BASE_PATH
RUN npm run build -- --base-href=/${BASE_PATH}/

FROM httpd:2.4.58-alpine

ARG BASE_PATH
COPY --from=build /usr/qxgametool-server/dist/qgtfront /usr/local/apache2/htdocs/${BASE_PATH}

RUN echo "RewriteEngine on" > /usr/local/apache2/htdocs/.htaccess
RUN echo "RewriteCond %{REQUEST_FILENAME} !-f" >> /usr/local/apache2/htdocs/.htaccess
RUN echo "RewriteCond %{REQUEST_FILENAME} !-d" >> /usr/local/apache2/htdocs/.htaccess
RUN echo "RewriteCond %{REQUEST_URI} !\.(?:css|js|map|jpe?g|gif|png)$ [NC]" >> /usr/local/apache2/htdocs/.htaccess
RUN echo "# rewrite everything else to index.html" >> /usr/local/apache2/htdocs/.htaccess
RUN echo "RewriteRule ^(.*)$ /${BASE_PATH}/index.html?path=$1 [NC,L,QSA] " >> /usr/local/apache2/htdocs/.htaccess

RUN echo "LoadModule rewrite_module modules/mod_rewrite.so" >> /usr/local/apache2/conf/httpd.conf
RUN echo 'DocumentRoot "/usr/local/apache2/htdocs"' >> /usr/local/apache2/conf/httpd.conf
RUN echo '<Directory "/usr/local/apache2/htdocs">' >> /usr/local/apache2/conf/httpd.conf
RUN echo "  Options Indexes FollowSymLinks" >> /usr/local/apache2/conf/httpd.conf
RUN echo "  AllowOverride All" >> /usr/local/apache2/conf/httpd.conf
RUN echo "  Require all granted" >> /usr/local/apache2/conf/httpd.conf
RUN echo "</Directory>" >> /usr/local/apache2/conf/httpd.conf

