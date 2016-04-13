FROM bbz/webserver:1.0
MAINTAINER Benoit BELZ

COPY package.json /usr/local/apache2/htdocs/
COPY bower.json /usr/local/apache2/htdocs/
COPY .bowerrc /usr/local/apache2/htdocs/

WORKDIR /usr/local/apache2/htdocs/
RUN npm install --unsafe-perm --production

COPY . /usr/local/apache2/htdocs/
