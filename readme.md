## vslint
This project demonstrates how you can hide eslint configurations and its dependencies inside a package by exposing an npm cli. You can extend this concept to hide any configurations like build with all babel dependencies.

### Why do this?

- it decouples your code from configuration hell
- helps you maintain all configs at one place instead of duplicating in all your projects
- easy to change configurations and upgrade dependencies


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