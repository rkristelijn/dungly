# Dungly

A tool to quickly find English proverbs based of Dutch keywords in Spreekwoorden or vice versa.

## Usage


- `npm i -g dungly` - install globally

```bash
dungly --help
dungly <keyword>

Positionals:
  keyword  Dutch keyword to find English proverb                        [string]

Options:
      --version  Show version number                                   [boolean]
      --help     Show help                                             [boolean]
  -r, --reverse  Reverse search for English keyword instead of Dutch   [boolean]

$ dungly paard
don't beat a dead horse - niet aan een dood paard trekken
do not look a gift-horse in the mouth - men mag een gegeven paard niet in de bek kijken.
trust arrives on foot and leaves on horseback. - vertrouwen komt te voet en gaat te paard.

$ dungly -r stool
falling between two stools - tussen wal en schip vallen
```

## More information

[Detailed documentation](https://github.com/rkristelijn/dungly/blob/main/docs/README.md)
