## vslint

Totally random name :) This project demonstrates how you can package eslint settings and dependencies into one package by exposing an npm cli. 


### Example Usage
```
$ npm istall --save-dev vslint
```
Do not try the above command, this is not published.

### How to run the demo
```
$ cd demo
$ npm install
$ npm run eslint
```

- The cli is in `/vslint/bin/vslint.js`
- Note the `bin` config in `/vslint/package.json`, that's what does the magic

#### External Reference:
https://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm
