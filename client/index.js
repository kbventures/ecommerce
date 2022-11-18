const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});
