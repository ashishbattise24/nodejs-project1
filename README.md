# Cryptocurrency Exchange

This project is a simple Cryptocurrency exchange application built using `JavaScript`, `Node.js`, `Express`, and `MongoDB` as the database. The API documentation is available through `Swagger`, and the project can be containerized using `Docker`.

## Project Overview

- **Tech Stack**: JavaScript, Node.js, Express
- **Database**: MongoDB
- **Documentation**: Swagger
- **Containerization**: Docker

## Prerequisites

- [Docker](https://www.docker.com/get-started/)

## How to Run

1. Clone the project from Git:

2. Navigate to the project directory.

3. Build and start the project using Docker Compose:
    ```bash
    docker-compose up -d
    ```
This command will build the project and start the containers in detached mode.

The project should now be up and running.

## Access the Documentation
You can access the API documentation using Swagger at the following URL:
http://localhost:3000/api-docs


Enjoy using the Cryptocurrency Exchange project!

## Test

After you deploy the project(using Docker), you can test the containers by using the following command:
```bash
npm run test
```

It will run test.js file and check if the project was deployed successfully

That's it! You now know how to run and interact with the "Cryptocurrency Exchange" project using Docker.
