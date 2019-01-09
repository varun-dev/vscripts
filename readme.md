### VScripts (work in progress)
This project demonstrates how you can abstract your project configurations and its dependencies inside a package by exposing an npm cli.

### Why do this?

- it decouples your code from configuration hell
- helps you maintain all configs at one place instead of duplicating in all your projects
- easy to change configurations and upgrade dependencies


### Usage
```
$ npm istall --dev vscripts
```
Do not try the above command, this is not published.

#### `package.json` script examples
```
"build": "vscripts build" 

// default is src
"lint": "vscripts lint"

// provide a source folder(s)
"lint": "vscripts lint --src source"
```

### Notes
- You can see this project in action in [dynamic-redux-state](https://github.com/varun-dev/dynamic-redux-state)
- The cli and relevant code is in `/bin`
- The `bin` config in `package.json` exposes the cli

#### External Reference:
https://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm

#### Feedback / Issues / Questions
- raise a ticket