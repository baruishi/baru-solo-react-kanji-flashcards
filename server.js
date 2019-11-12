// const express = require("express");
//const proxy = require("http-proxy-middleware");
// // const cors = require("cors")
// const path = require("path");
// const router = express();

// router.use(cors());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });



// router.use(
//   '/api',
//   proxy({ target: 'http://https://app.kanjialive.com.example.org', changeOrigin: true }))

// router.use(express.static(path.join(__dirname + '/build')));

// const port = process.env.PORT || 4000;

// router.listen(port, () => {
// console.log("Router listening on " + port);
// });






const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 4000;

app.use(express.static(path.resolve(__dirname + `/dist`)));


app.listen(port, () => {
  console.log(`Server up and listening on port ${port}`);
});

app.get("/api", (req, res) => {
  res.send("HELLO");
});
module.exports = app;