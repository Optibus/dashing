FROM node:10.12.0-alpine

RUN npm i -g pm2

RUN mkdir /dashing
COPY . /dashing
RUN chmod -R 755 /dashing

RUN /dashing/install.sh

EXPOSE 5555

CMD ['pm2', 'start', 'process.json']