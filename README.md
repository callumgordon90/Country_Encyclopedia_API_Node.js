### The entry point for the project is app.js, which connects to the dbModel in the models folder and this connects to mysql. ###

Now when an http request is made, the flow is as follows:

Frontend -> app.js -> route folder -> route file -> controller folder -> controller file -> model folder -> model file -> database, and then back up from controller to router to app.js


### NOTE: In my current project, I am not using an Object-Relational Mapping (ORM) library. I am interacting with the MySQL database using the mysql2 library, which is a MySQL driver for Node.js, and I'm writing SQL queries manually. ###

ORMs like Sequelize or TypeORM provide a higher-level abstraction, allowing one to interact with databases using JavaScript or TypeScript objects instead of raw SQL queries. They can simplify database interactions, handle relationships between tables, and provide features like migrations.

```
/models
  - countryModel.js
  - userModel.js
  - authModel.js (for authentication-related functionality)

/controllers
  - countryController.js
  - userController.js
  - authController.js (for authentication-related endpoints)

/routes
  - countryRoutes.js
  - userRoutes.js
  - authRoutes.js

/app.js (entry point)
```