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

### 开发环境介绍
不管是前端还是服务端、APP开发，都需要自己的开发环境。前端的开发环境配置会相对比较简单一些，有了好的开发环境，我们能更快速更高效进行开发工作。

### 开发环境搭建
要清楚的一件事是，前端的开发环境只需要搭建一次，后续就基本不需要再去管它，只需要开发我们自己的前端代码。所以，对前端开发环境是怎么回事了解即可，如果想深入，自己找个例子搭建一遍就知道了。

其实前端可以不需要任何的开发环境，只需要简单的写HTML、js、css就能直接在浏览器中查看效果并进行开发。但是，随着前端的发展，有了更多的框架和工具，例如：React.js的jsx、sacc/less等，这些在浏览器中是无法直接运行的，所以我们需要一个`构建工具`来将不能在浏览器中执行的代码进行实时的构建，构建成普通的js、css。

那为什么要起本地服务器呢？它的作用是：
1. 我们可以自己在本地基于Node.js写服务端代码，给前端的Ajax请求返回数据，这样就不需要服务端；
2. 起本地服务后，本地的服务会通过跟浏览器通信，这样可以做到：前端代码更改后浏览器自动刷新，甚至是浏览器不刷新但是会出来最新的效果，虽然现在我们并没有加入该功能；
3. 起本地服务后，我们就可以通过`localhost`直接访问到我们的页面，而不需要直接去打开html文件来浏览；
4. 最主要的是，本地服务可以与构建工具结合，构建的代码放于电脑内存中，这样通过本地服务请求的代码直接去内存中拿，速度会更快！

### 用到的工具
那么，我们需要用如下的工具：
> `express.js`: 基于Node.js写的服务器框架，我们项目中用于起本地服务器；
> `git`: 代码管理工具，功能类似于`svn`；
> `npm`: Node.js的包(或叫模块)管理工具，在`package.json`中依赖的模块，可以通过`npm install`来安装到本地，存放于`node_modules`文件夹中。
