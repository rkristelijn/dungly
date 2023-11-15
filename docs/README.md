# Dungly

This tool came as an idea when working in the English language when being native Dutch. At some point you want to bring across a message using a proverb. But to avoid speaking Dunglish, you want to use the right proverb in English, but how do you find it?

The name of the tool is short, but not too short (e.g. Dung is not nice). There is [Dungli](https://names.quillem.com/vegetables/what-is-dungli-in-english) which is a crop. That is nice, but then with a 'y' at the end.

## Design

End result will be that you can install this tool globally `npm i -g dungly` (at time of writing, [dungly doesn't exist](https://www.npmjs.com/search?q=dungly)) and then when you type `dungly pijpenstelen` you will get `It is raining cats and dogs`. When typing `dungly` you will get the usage `dungly argument`.

## Local development

- `node .` - will just fire up the tool
- `npm install -g .` - install globally
- `npm uninstall -g dungly` - uninstall globally

## Extending

- update `databases/proverbs.csv`, run `npm run init`

Make sure the full csv file is lowercase (VSC/mac: command-shift-P, transform to lowercase)

## Plans

1. Could add more languages, therefore the nl and en need to switch places and e.g. Polish can be added. There could be a new 'command' added to check a different column or just a setting to flip Dutch for another language.

## Resources used

- [Build Your First Node.js Command Line Application](https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs)
- [What is Dungli](https://names.quillem.com/vegetables/what-is-dungli-in-english)
- [yargs with 1 argument](https://github.com/yargs/yargs/blob/main/docs/advanced.md)
- [De meest gebruikte Engelse spreekwoorden](https://www.ef.nl/leermiddelen-engels/engelse-spreekwoorden/)
- [Meest gebruikte Spreekwoorden](https://www.meest-gebruikte.nl/meest-gebruikte-spreekwoorden/)
- [Nederlandse spreekwoorden](https://nl.wikiquote.org/wiki/Nederlandstalige_spreekwoorden)
- [False friends](https://www.vertaalbureau-perfect.nl/engels-vertaalbureau/false-friends)
