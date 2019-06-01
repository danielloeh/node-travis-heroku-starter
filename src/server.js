'use strict'

const express = require('express');
const app = express();
const PORT = parseInt(process.env.PORT, 10) || 3000;

app.get('/', (req, res) => res.send("{message: 'Hello World'}"));

let server = app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}!`);
    }
);

function stop() {
    server.close();
}

module.exports = {app, stop};