const express = require('express')
const app = express();
const port = process.env.PORT || 8080;

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dbPath = 'mongodb://localhost/firstrest';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options);

app.get('/', (req, res) => res.send('Hello world'));

app.listen(port, function() {
    console.log("You can see the app at port: "+ port);
})

const apiRoutes = require("./router")

app.use('/api', apiRoutes)

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
})