# oops

Object Oriented Programming System

## How to run

This is a step-by-step guide on how to run Oops application locally.

### Reqirements

- [Docker desktop](https://www.docker.com/products/docker-desktop/)
- [Intellij Idea with Java 17](https://www.jetbrains.com/idea/)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
- [Hasura CLI](https://hasura.io/docs/latest/hasura-cli/install-hasura-cli/)

### Backend

1. Clone this repository with `git clone https://github.com/Jullija/oops.git`
2. Cd into backend directory `cd oops/backend`
3. Run Docker desktop
4. Run `docker compose up -d`.

   Note: If you're on Windows/Linux you should remove `platfor: linux/arm64/v8` from `docker-compose.yaml`

5. Open Intellij Idea in backend project folder
6. Setup sdk to use Java 17. (On MacOs click `cmd + ;`)
7. Build a project with gradle, alternatively run `./gradlew build` (`./gradlew.bat build` for Windows)
8. Run `BackendApplication` file, alternatively run `./gradlew bootRun` (`./gradlew.bat bootRun` for Windows)
9. If something doesnt work make sure sdk is correctly set up and all dependencies are downloaded
10. Apply hasura metadata by `cd hasura`, `hasura metadata apply`
11. If there are any updates to backend do git pull, rebuild a project and apply hasura metadata again
12. To access hasura console go to `localhost:9191`. The password is `admin_secret`
13.  To populate the database run `cd backend/src/main/python/` and `python insert_data.py`. This script purges the existing data from the database and repopulates the database with random (set seed) data.

### Frontend

1. Cd frontent directory `cd ../frontend`
2. Make sure yarn is installed `npm install --global yarn`
3. Run `yarn`
4. Run `yarn codegen`
5. Run `yarn dev`
