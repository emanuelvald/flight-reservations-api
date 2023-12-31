# Flight Reservations API

A monorepo microservices application to manage flight reservations created
with [@NestJS](https://github.com/nestjs/nest)

## Services

By now, the functional services are decomposed into three core services. Each of them have its resepective database and
configurations. Also, there is a shared library with recourses available to use inside every service

#### Auth service

Provides API for user authentication and authorization with JWT

| Method | Path         | Description                                   |
|--------|--------------|-----------------------------------------------|
| POST   | /auth/signup | Create a new user application                 |
| POST   | /auth/signin | Get new access token and refresh access token |

#### User Service

Provides API to manage user profile and preferences

| Method | Path      | Description                                |
|--------|-----------|--------------------------------------------|
| POST   | /user/:id | Get user profile passed by parameter id    |
| PUT    | /user/:id | Update user profile passed by parameter id |

#### Reservation Service

Provides API to manage flight reservations

| Method | Path             | Description                                         |
|--------|------------------|-----------------------------------------------------|
| POST   | /reservation     | Create a new flight reservation for the logged user |
| PUT    | /reservation/:id | Update an existing reservation for the logged user  |

## Environment Variables

To run this project, you will need to add the following environment variables to your .env.development file in the root

`PORT`

`AMQP_URL`

`JWT_SECRET`

`JWT_EXPIRES`

`USER_TYPEORM_TYPE`

`USER_TYPEORM_HOST`

`USER_TYPEORM_PORT`

`USER_TYPEORM_USERNAME`

`USER_TYPEORM_PASSWORD`

`USER_TYPEORM_DATABASE`

`USER_TYPEORM_SYNCHRONIZE`

`USER_TYPEORM_LOGGING`

`RESERVATION_TYPEORM_TYPE`

`RESERVATION_TYPEORM_HOST`

`RESERVATION_TYPEORM_PORT`

`RESERVATION_TYPEORM_USERNAME`

`RESERVATION_TYPEORM_PASSWORD`

`RESERVATION_TYPEORM_DATABASE`

`RESERVATION_TYPEORM_SYNCHRONIZE`

`RESERVATION_TYPEORM_LOGGING`