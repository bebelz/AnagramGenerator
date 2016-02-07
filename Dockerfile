FROM node:5.5.0
MAINTAINER Benoit BELZ

ADD . /usr/src/app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ONBUILD COPY package.json /usr/src/app/
ONBUILD RUN npm install
ONBUILD COPY . /usr/src/app

EXPOSE  8080

CMD [ "npm", "start" ]