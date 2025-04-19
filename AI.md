# AI Way of Working

## Adding New Proverbs

1. Add the new proverb to `databases/proverbs.csv` following this format:

   ```
   _id,dutch,english
   [next_id],"dutch proverb","english translation"
   ```

   - Make sure to use the next available ID number
   - Keep all text in lowercase
   - Avoid using accents
   - Ensure both Dutch and English translations are provided
   - Always put the Dutch proverb first, followed by the English translation
   - The order must be: Dutch proverb, then English translation

2. Run the initialization script:
   ```bash
   node bin/init.js
   ```
   This will:
   - Validate the proverbs.csv file
   - Generate/update bin/proverbs.json
   - Check for common issues like:
     - Uppercase characters
     - Missing translations
     - Accent characters
     - Incorrect number of fields

## Validation Rules

The initialization script enforces these rules:

- All text must be lowercase
- No accent characters allowed
- Each proverb must have both Dutch and English translations
- Each line must have exactly 3 fields (\_id, dutch, english)
- Dutch proverb must come first, followed by English translation

If any validation errors occur, they will be displayed in the console.
