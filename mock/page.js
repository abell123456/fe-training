const fs = require('fs');
const fsp = require('fs-promise');
const path = require('path');


module.exports = function(app) {
    // pages
    app.get('/', function(req, res) {
        res.render('index');
    });

    app.get('/pro-1', function(req, res) {
        res.render('./project-1/index');
    });

    // 接口请求返回数据
    app.get('/server/*', function(req, res) {
        console.log('server req:', req.url);

        res.end(getDatabase(req.url));
    });
};

const noRes = {
    status: false,
    data: {},
    errorMessage: '请求地址有错误!'
};

function getDatabase(url) {
    const jsonName = url.split(/\//).slice(-1)[0];

    const jsonPath = getPath('../database/' + jsonName + '.json');

    let resData = noRes;

    if (fs.existsSync(jsonPath)) {
        resData = {
            status: true,
            data: {
                list: fsp.readJsonSync(jsonPath)
            },
            errorMessage: ''
        };
    }

    return JSON.stringify(resData);
}


function getPath(jsonPath) {
    return path.join(__dirname, jsonPath);
}
