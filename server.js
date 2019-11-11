const express = require("express");
const router = express();
const path = require("path");

router.use(express.static(path.join(__dirname + '/build')));

const port = process.env.PORT || 4000;

router.listen(port, () => {
console.log("Router listening on " + port);
});

