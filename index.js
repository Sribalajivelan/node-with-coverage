const express = require('express');
const config = require('./config');
const itemController = require("./controller/itemController");
require("./dbConfig");

// Create the Express app
const app = express();
app.use(express.json());

app.use(itemController);

console.log("config === ", config)
// Start the server
const port = config.PORT | 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;