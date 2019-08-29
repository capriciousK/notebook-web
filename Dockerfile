# base image
FROM node:9.6.1

# set working directory
WORKDIR /app
ADD . /app

# add `/usr/src/run/node_modules/.bin` to $PATH

# install and cache run dependencies

COPY package.json /app/package.json

RUN npm install

COPY start-web-server.sh /start-web-server.sh


# start app

ENTRYPOINT ["/start-web-server.sh"]