the entry point for the project is app.js, which connects to the dbModel in the models folder and this connects to mysql. 
Now when an http request is made, the flow is as follows: 
frontend -> app.js -> route folder -> route file -> controller folder -> controller file ->  database, and then back up from controller to router to app.js
