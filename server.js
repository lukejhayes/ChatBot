<<<<<<< HEAD
var express = require("express");
var path = require("path");


var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var http = require("http");

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});
=======
// ADD MIDDLEWARE JAVASCRIPT CODE INTO SERVER.JS 
// LOOK AT PAST PROJECTS USING MIDDLEWARE FOR HELP
>>>>>>> master
