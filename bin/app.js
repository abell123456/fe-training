'use strict';

var path = require('path'),
    fs = require('fs'),

    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    mock = require('./mock'),

    devDir = path.join(__dirname, '../dev'),
    mockDir = path.join(__dirname, '../mock'),

    webpackDevMiddleware = require("webpack-dev-middleware"),
    webpack = require("webpack"),
    ReplacePlugin = require('./ReplacePlugin'),
    webpackConfig = require('../webpack.config.js');

var argv = require('optimist').argv;
var hbs = require('hbs');

var cssInterceptor = require('./cssInterceptor');

// views
var helpers = require('./helpers')(argv.v || 'development');
Object.keys(helpers).forEach(function(key) {
    hbs.registerHelper(key, helpers[key]);
});
app.set('views', devDir);
app.set('view engine', 'hbs');

// bodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// intercept javascript
app.use(cssInterceptor(devDir));

// webpack
var mapFilePath = path.join(mockDir, '_map.js'),
    mapRules;
if (fs.existsSync(mapFilePath)) {
    mapRules = require(mapFilePath);
}

if (!(Object.prototype.toString.call(webpackConfig) === '[object Array]')) {
    webpackConfig = [webpackConfig];
}

webpackConfig.forEach(function(currentValue, i, array) {
    array[i].context = __dirname;
    array[i].plugins = [
        new ReplacePlugin(mapRules)
    ];
});

app.use(webpackDevMiddleware(webpack(webpackConfig), {
    publicPath: '/'
}));

// static
app.use(express.static(devDir));

// logger
app.use(morgan('dev'));

// mock
mock(app, mockDir);

app.listen(3000);
console.log('Server running at http://localhost:3000/');
