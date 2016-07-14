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
        res.end(getDatabase(req));
    });

    // 接口请求返回数据
    app.post('/server/*', function(req, res) {
        console.log(req.body);

        res.end(postExec(req));
    });
};

const noRes = {
    status: false,
    data: {},
    errorMessage: '请求地址有错误!'
};

const getApis = ['list', 'add', 'delete'];
const postApis = getApis.map(item => '/server/' + item);

const jsonPath = getPath('../database/list.json');

// POST请求处理
function postExec(req) {
    let resData = noRes;

    const reqDataId = req.param('id');
    const reqDataName = req.param('name');

    if (postApis.includes(req.url)) {
        if (req.url === '/server/add') {
            if (!reqDataName || !reqDataId) {
                resData = {
                    status: false,
                    errorMessage: '参数不合法：请传入对应任务名:name以及任务标识：id',
                    data: {}
                };
            } else {
                const json = fsp.readJsonSync(jsonPath);

                json.push({
                    name: reqDataName,
                    id: reqDataId,
                    isComplete: false
                });

                fsp.outputJsonSync(jsonPath, json, {
                    spaces: 4
                });

                resData = {
                    status: true,
                    errorMessage: '',
                    data: {
                        message: 'Success!'
                    }
                };
            }

        } else if (req.url === '/server/delete') {
            if (!reqDataId) {
                resData = {
                    status: false,
                    errorMessage: '参数不合法：请传入对应任务标识：id',
                    data: {}
                };
            } else {
                const json = fsp.readJsonSync(jsonPath);

                let curOrder;

                json.some((item, index) => {
                    if (item.id == reqDataId) {
                        curOrder = index;

                        return true;
                    }
                });

                json.splice(curOrder, 1);

                fsp.outputJsonSync(jsonPath, json, {
                    spaces: 4
                });

                resData = {
                    status: true,
                    errorMessage: '',
                    data: {
                        message: 'Success!'
                    }
                };
            }
        }
    }

    return JSON.stringify(resData);
}

// GET请求
function getDatabase(req) {
    const jsonName = req.url.split(/\//).slice(-1)[0];

    let resData = noRes;

    if (getApis.includes(jsonName)) {
        if (jsonName === 'list' && fs.existsSync(jsonPath)) {
            resData = {
                status: true,
                data: {
                    list: fsp.readJsonSync(jsonPath)
                },
                errorMessage: ''
            };
        }
    }

    return JSON.stringify(resData);
}


function getPath(jsonPath) {
    return path.join(__dirname, jsonPath);
}
