# Information
These files define a base Docker image for the front web application, we need to be able to "npm install" inside our container.

This image is not published on dockerhub because I think it's not wort it and not "nice" enough to be used by someone else.

Based on httpd:2.4 and contains
- nodejs:5.x
- npm:lastest
- curl
- git

## Getting started
"docker-compose up -d" will create the image
docker rm XX to remove the generated container (you don't need it)

### Good to know
For now there are no options to "build only" an image with docker-compose, we are using a trick to make the generated container crash immediatly. We use docker-compose to be sure that the image will have the name we want.

Don't forget to remove node, npm, curl and git once your "npm install" is done.

### Update history
- 1.0 : 1st commit
