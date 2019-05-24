const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = 4100;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (request, response) {
    response.json({ "api": "jwt authentication" });
});

app.listen(port, () => {
    console.log(`Node server listening port ${port}`);
});