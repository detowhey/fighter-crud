FROM node:18.12.1-alpine
LABEL org.opencainters.image.authors="Herique de Freitas Almeida"
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm start" ]
