# Preserve RequireJS Webpack Plugin

This plugin to Webpack preserves `requirejs.config()` in Webpack 2 output

[![npmjs](https://nodei.co/npm/preserve-requirejs-webpack-plugin.png?downloads=true&downloadRank=true&stars=true)]((https://www.npmjs.com/package/preserve-requirejs-webpack-plugin))

## Install

`npm install preserve-requirejs-webpack-plugin --save-dev`


### If you're still using Webpack 1.x

This plugin, from version 2.x.x, is targeted for Webpack 2.x. To use with Webpack 1.x use the following to install

`npm install preserve-requirejs-webpack-plugin@1.0.1 --save-dev`


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

