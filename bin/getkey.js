#!/usr/bin/env node
const fs = require("fs");
require("dotenv").config({ path: "./dev.env" });

console.log("getkey");

fs.readFile(process.env.FILE_PATH, "utf8", (err, data) => {
  err && console.log(`Error: ${err}`);
  console.log(JSON.parse(data));
});
