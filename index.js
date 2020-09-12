const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const apiRoutes = require("./router")

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

const dbPath = 'mongodb://localhost/movie_list';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);

mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
});

const db = mongoose.connection;

if (!db)
    console.log("Error connecting");
else
    console.log("DB Connected Successfully");

const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Welcome to Express'));

app.use('/api', apiRoutes)

app.listen(port, function() {
    console.log("Running App on Port: "+ port);
});