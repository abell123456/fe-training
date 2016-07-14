'use strict';

var path = require('path');

function getPath(jsPath) {
    return path.join(__dirname, jsPath);
}

module.exports = [{
    entry: {
        // 定义打包的模块(以后新加项目都要在这配置一下)
        'project-1/index': getPath('dev/project-1/index')
    },
    output: {
        path: getPath('dist/js/'),
        filename: '[name].js'
    }
}];
