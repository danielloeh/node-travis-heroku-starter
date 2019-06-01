'use strict'

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send("{message: 'Hello World'}"));

let server = app.listen(port, () => {
        console.log(`Listening on port ${port}!`);
    }
);

function stop() {
    server.close();
}

module.exports = {app, stop};