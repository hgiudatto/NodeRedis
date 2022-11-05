#!/usr/bin/env node
const fs = require("fs");
require("dotenv").config({ path: "./dev.env" });

console.log("setkey");

fs.readFile(process.env.FILE_PATH, "utf8", (err, data) => {
  err && console.log(`Error: ${err}`);
  let myData = JSON.parse(data);
  myData["test"] = "value";
  fs.writeFile(process.env.FILE_PATH, JSON.stringify(myData), "utf8", (err) => {
    err && console.log(`Error: ${err}`);
  });
});
