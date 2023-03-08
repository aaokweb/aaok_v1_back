# Aaok Backend

This is project consists of a React.js frontend, which is compiled and served by an Express.js backend. The backend is the only application running on the web host. The Express.js backend is also used to connect to a MySQL server and manages that communication so that it is not visible to users. The Express.js application is configured to route requests to URLs that it does not define to the compiled React.js frontend, which uses its own separate routing to serve responses. The React.js frontend can make requests to the backend if it needs information from the MySQL server at `localhost:5000`, the address the backend is configured to listen on.

NOTE: Instructions assume you are using a terminal/shell.

**IMPORTANT**: Set the following lines in your ~/.bashrc, ~/.zshrc, or other corresponding shell profile dotfile. Also, ensure that the repository is always set to private and that these values are not made public..

## Installation

    $ git clone https://github.com/Rajaneesh12345/aaok-backend
    $ cd aaok-backend
    $ npm install
    The project is up and running in your local machine at PORT 5000

    For development purposes, you can use the following command to run the project
    $ npm run dev

## Configure app

create a `.env` in the root folder and add the required environmental variables. You will need:

-  **MYSQL_DBNAME** => the name of the database;
-  **MYSQL_HOST** => the host of the database;
-  **MYSQL_PASSWORD** => the password of the database;
-  **MYSQL_USER** => the user of the database;

This sets the username and password of the MySQL server account that the
application will authenticate with. It will attempt to connect to the MySQL
database with the name _**MYSQL_DBNAME**_, and it will try to contact the database
server at the host address. The application will grab these values from the
environment at runtime.

## Workflow for viewing site as used in production

    $ npm start
    $ npm run dev

-  In a browser, navigate to `localhost:5000`, the Express.js url.

## [View the Routes](./routes/routes.md)

## [Set up the Database](./docs/mysql.md)

## [AWS RDS](./docs/aws.md)

## [S3](./docs/s3.md)
