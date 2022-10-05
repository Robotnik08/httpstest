const express = require('express');
const app = express();
var fs = require('fs');
const https = require("https");
app.use(express.static('public'));
const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};
const server = https.createServer(options, app);
server.listen(80, () => {
    console.log(`listening on *:${80}`);
});