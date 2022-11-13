const csv = require("csvtojson");
const fs = require("fs");

const csvFilePath = "./databases/proverbs.csv";
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    checkLines(jsonObj);
    fs.writeFileSync("./bin/proverbs.json", JSON.stringify(jsonObj, null, 2));
  });

/** Loop all values check the length */
function checkLines(lines) {
  lines.forEach((line) => {
    checkLowerCase(line);
    checkForLength(line);
  });
}

function checkForLength(line) {
  if (Object.keys(line).length > 3) {
    logError(line, "has a problem with the length, larger than 3 values");
  }
}

/** Check if everything is lowercase */
function checkLowerCase(line) {
  if (containsUppercase(line.dutch) || containsUppercase(line.english)) {
    logError(
      line,
      "has an uppercase character (should be all lowercase for ease of searching)"
    );
  }
}

function containsUppercase(str) {
  return /[A-Z]/.test(str);
}

function logError(line, problem) {
  console.log(`Error: line"${Object.values(line).join(",")}" ${problem}`);
}
