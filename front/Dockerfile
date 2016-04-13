FROM httpd:2.4
MAINTAINER Benoit BELZ

RUN apt-get update
RUN apt-get install nodejs npm

COPY . /usr/local/apache2/htdocs/

RUN apt-get autoremove nodejs npm
