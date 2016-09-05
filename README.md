# Preserve RequireJS Webpack Plugin

This plugin to Webpack preserves `requirejs.config()` in Webpack output

![https://www.npmjs.com/package/preserve-requirejs-webpack-plugin](https://nodei.co/npm/preserve-requirejs-webpack-plugin.png?downloads=true&downloadRank=true&stars=true)

## Install

`npm install preserve-requirejs-webpack-plugin --save-dev`

## Usage

In `webpack.config.js`

```JavaScript
var webpack = require('webpack');

var KeepRequireJsPlugin = require('preserve-requirejs-webpack-plugin')

module.exports = {
    ...
    plugins: [
        new KeepRequireJsPlugin(),
    ]
};
```

