const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(require("./src/routers/comments.js"));
app.use(require("./src/routers/contacts.js"));
app.use(require("./src/routers/products.js"));
app.use(require("./src/routers/vehicles.js"));

app.use(express.static('public'));

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
