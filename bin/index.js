#!/usr/bin/env node

const dbLocal = require('db-local');
const chalk = require('chalk');
const path = require('path');
const dbLocation = path.resolve(__dirname);
const { Schema } = new dbLocal({ path: dbLocation });
const yargs = require('yargs');

const Proverb = Schema('proverbs', {
  _id: { type: Number, required: true },
  dutch: { type: String },
  english: { type: String },
});

yargs
  .scriptName('dungly')
  .help(false)
  .usage('dungly <keyword>')
  .command(
    ['keyword', '$0'],
    'Dutch keyword to find English proverb',
    (yargs) => {
      yargs
        .positional('keyword', {
          type: 'string',
          describe: 'Dutch keyword to find English proverb',
        })
        .option('reverse', {
          alias: 'r',
          describe: 'Reverse search for English keyword instead of Dutch',
          type: 'boolean',
        });
    },
    function (argv) {
      const keyword = argv._[0];
      const reverse = argv.reverse;

      let query = {};
      if (reverse) {
        query = { english: { $in: keyword } };
      } else {
        query = { dutch: { $in: keyword } };
      }

      let proverbs;
      try {
        proverbs = Proverb.find(query);
      } catch (e) {
        console.log(chalk.red(`error getting stuff from db: ${e}`));
        process.exit(1);
      }

      if (proverbs.length === 0) {
        console.log(chalk.red(`nothing found for keyword '${keyword}'`));
      }
      proverbs.forEach((proverb) => {
        console.log(chalk.green(`${proverb.english}`) + ` - ` + chalk.blue(`${proverb.dutch}`));
      });
    },
  )
  .help().argv;
