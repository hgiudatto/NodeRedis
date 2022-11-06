#!/usr/bin/env node
const fs = require("fs");
require("dotenv").config({ path: "./dev.env" });

console.log("getkey");

const key = process.argv[2];

fs.readFile(process.env.FILE_PATH, "utf8", (err, data) => {
  err && console.log(`Error: ${err}`);
  const myData = JSON.parse(data);
  console.log(myData[key]);
  console.log(JSON.parse(data));
});
