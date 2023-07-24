const express = require('express');
const itemController = require("./controller/itemController");
require("./dbConfig");

// Create the Express app
const app = express();
app.use(express.json());

app.use(itemController);

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;