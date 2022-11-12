const csv = require("csvtojson");

const csvFilePath = "./databases/proverbs.csv";
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    console.log(jsonObj);
  });
