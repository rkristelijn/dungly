#!/usr/bin/env node

const dbLocal = require("db-local");
const chalk = require("chalk");
const path = require("path");
const dbLocation = path.resolve(__dirname);
const { Schema } = new dbLocal({ path: dbLocation });

const Proverb = Schema("proverbs", {
  _id: { type: Number, required: true },
  dutch: { type: String },
  english: { type: String },
});


require("yargs")
  .scriptName("dungly")
  .usage("dungly <keyword>")
  .command(
    ["keyword", "$0"],
    "Dutch keyword to find English proverb",
    (yargs) => {
      yargs.positional("keyword", {
        type: "string",
        describe: "Dutch keyword to find English proverb",
      });
    },
    function (argv) {
      const keyword = argv._[0];
      const proverbs = Proverb.find({ dutch: { $in: keyword } });

      if (proverbs.length === 0) {
        console.log(chalk.red(`nothing found for keyword '${keyword}'`));
      }
      proverbs.forEach((proverb) => {
        console.log(
          chalk.green(`${proverb.english}`) +
            ` - ` +
            chalk.blue(`${proverb.dutch}`)
        );
      });
    }
  )
  .help().argv;
