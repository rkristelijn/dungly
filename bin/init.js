const csv = require("csvtojson");
const fs = require("fs");

const csvFilePath = "./databases/proverbs.csv";
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    fs.writeFileSync("./databases/proverbs.json", JSON.stringify(jsonObj, null, 2));
  });
