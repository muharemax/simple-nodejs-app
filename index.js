const express = require('express');
const router = require('./routes');
const port = 4545;
const app = express();

app.use(express.json());
app.use(router);

app.listen( port, () => console.log("App listening on " + port + " port") )