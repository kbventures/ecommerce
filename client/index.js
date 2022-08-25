const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "dist")));

// serve our React application for all GET request paths
// change to test deployment
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});


//Hello World Test!