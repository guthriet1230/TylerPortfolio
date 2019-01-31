const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

// Configure middleware

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public a static folder
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    // console.log("hello - home");
  });

// Start the server
app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
  });