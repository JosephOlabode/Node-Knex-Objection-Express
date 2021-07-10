const express = require("express");
const app = express();

const apiRoutes = require("./routes/api");

app.use("/api", apiRoutes);


// Start the server
const server = app.listen(8080, error => {
    if(error) {
        console.log("Error running Express");
    }

    console.log("Server is running on port", server.address().port);
})