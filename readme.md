## vslint

Totally random name :)

This project demonstrates how you can hide eslint configurations and dependencies inside a package by exposing an npm cli.

### Example Usage
```
$ npm istall --dev vslint
```
Do not try the above command, this is not published.

### `package.json` script examples
```
// default is src
"eslint": "vslint"

// provide a source folder(s)
"eslint": "vslint source"
```

- The cli is in `/bin/vslint.js`
- Note the `bin` config in `/vslint/package.json`, that's what does the magic

#### External Reference:
https://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm

#### Feedback/Issies/Questions
- raise a ticket