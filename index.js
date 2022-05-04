const app = require("./app");
const port = 4545;

app.listen( port, () => {
    console.log("App listening on " + port + " port");
});
