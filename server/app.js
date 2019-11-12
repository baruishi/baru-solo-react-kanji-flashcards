// server/app.js
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const db = require("knex.js");
//const getall = require("./getAll");
const bodyParser = require("body-parser");
const app = require("app");

// Setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use((req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Headers`, `*`);
  res.header(`Access-Control-Allow-Methods`, `*`);
  next();
});


//get all radicals
app.get("/api/radicals", async (req, res) => {
  try {
    const radicals = await db("radicals").select();
    // res.json(radicals);
    res.json(radicals);
  } catch (err) {
    console.error("Error loading locations!", err);
    res.sendStatus(500);
  }
});

//get one radical in english (kmeaning)
// app.get("/api/radical/:kmeaning", async (req, res) => {
//   try {
//     const { kmeaning } = req.params;
//     const radicals = await db("radicals")
//     const { kmeaning } = req.params;
//     .where({ city })
//       .select();
//     res.send(radicals);
//   } catch (err) {
//     console.error("Error loading radicals!", err);
//     res.sendStatus(500);
//   }
// });

// app.get("/api/radical/:kmeaning", async (req, res) => {
//   try {
//     const { kmeaning } = req.params;
//     const singleRadical = await db("radicals")
//     const { kmeaning } = req.params;
//     .where({ city })
//       .select();
//     res.send(radicals);
//   } catch (err) {
//     console.error("Error loading radicals!", err);
//     res.sendStatus(500);
//   }
// });


// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

module.exports = app;
