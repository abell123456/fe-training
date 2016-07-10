# fe-training
web前端开发实战~

## 开发步骤

1. 首先在项目根目录下执行:`npm install`安装本地模块；
2. 执行:`npm run start`启用本地服务。
    我们使用了Node.js的`express`服务器模块来启用本地服务器；使用`webpack`来作为代码的执行构建。此时，会将代码构建到电脑内存中。通过本地服务器，我们只需要在浏览器中打开网址：`http://localhost:3000/`即可做本地的开发。修改本地代码，webpack会自动执行构建，刷新浏览器即可看到新的效果。


## 目录结构

    fe-training                           # 应用名称，业务代码仓库根目录
        .editorconfig                     # 代码格式配置
        .gitignore                        # 过滤不需要提交到git的本地文件
        .npmignore                        # 过滤不需要发布到线上的文件
        package.json                      # 应用信息与依赖配置
        README.md                         # 应用文档
        index.js                          # js入口文件
        index.html                        # html文件
        training.md                       # 培训计划说明书

## 须知
在本项目中，因为不需要最终发布到线上，所以我们只有开发环境的搭建，而没有将所有代码进行构建的功能。
