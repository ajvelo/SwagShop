var express = require('express');
var cors = require('cors');
var app = express();

var routes = require("./routes");

app.use(cors())
app.use("/", routes);

app.listen(3000, function() {
    console.log('Running on port 3000..');
});