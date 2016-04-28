FROM node:6
MAINTAINER Benoit BELZ

RUN mkdir /src
WORKDIR /src

ADD package.json /src/package.json
RUN npm install
COPY . /src

EXPOSE  8080

CMD [ "npm", "run", "startProd" ]
