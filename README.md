# Fighter web REST API

### Functionalities:

- Register fighter data
- Search all fighters
- Search for a fighter by ID
- Search for a fighter by name
- Update fighter data
- Delete a fighter by id


### Technologies
<br>

- <img src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg" width="30" height="30">  [Typescript](https://www.typescriptlang.org/)

- <img src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9lZDI1OTU4NzA0MWM1YWI3OWYyNGNiMWUzNDFmMGEzNz9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.hLdG6hXQE4Dfil6090lrDEuGdsHbfQUijpy5RvzXjSg" width="30" height="30"> [NestJS](https://nestjs.com/)  

- <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png"  width="30" height="30"> [MongoDB](https://www.mongodb.com/)
- <img src="https://i.pinimg.com/originals/5c/bb/a7/5cbba74b40ec0c0ce77b3db3ec1a5e05.png" width="30" height="30"> [Docker/Docker Compose](https://www.docker.com/)

## Important
To use NestJS, [Node.JS](https://nodejs.org/en) needs to be installed. For this project the [Node.JS version is 18.18.0](https://nodejs.org/dist/latest-v18.x/docs/api/).

You need to add and configure the **".env"** in the root directory(**src/**) file with the variables **DB_HOST**, **DB_NAME** and **DB_PORT** to connect to the MongoDB database. The ports are already configured in the **docker-compose.yml** file, you can change them as you wish.

### Running the application
##### Build
```
docker-compose build
```
##### Application up
```
docker-compose up
```
Docker will be in charge of uploading the environment. MongoDB and the REST API.
### URL
http://localhost:8080/fighter

### Documentation with Swagger
http://localhost:8080/swagger-ui/index.html
