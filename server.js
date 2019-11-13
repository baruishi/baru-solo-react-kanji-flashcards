
const express = require("express");
const path = require("path");

const app = express();

// const port = process.env.PORT || 4000;
const port = process.env.PORT || 3000; //for heroku

app.use("/", express.static(path.join(__dirname, `/dist`)));


app.listen(port, () => {
  console.log(`Server up and listening on port ${port}`);
});

// app.get("/api", (req, res) => {
//   res.send("HELLOOO");
// });
// module.exports = app;