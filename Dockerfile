FROM node:18.12.1-alpine
LABEL org.opencainters.image.authors="Herique de Freitas Almeida"
RUN mkdir -p /usr/src/app
RUN chmod -R 777 /usr/src/app
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm install
COPY . /usr/src/app/
EXPOSE 8080
CMD [ "npm" ,"start" ]
