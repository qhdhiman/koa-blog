# 在线博客项目 [后端项目]

> 在线博客项目。
<br>项目技术栈为: (vue2 + muse-ui) + (Node.js + Koa2 + JWT) + (MongoDB)
<br>欢迎喜欢的朋友下载使用
<br>项目前端: [vue-blog](https://github.com/qhdhiman/vue-blog)

## 目录结构
```

│  .gitignore // gitignore 配置文件
│  app.js // 启动文件
│  LICENSE // 授权说明 
│  package.json // 项目配置文件
│  README.md // 说明文件
│  
├─bin 
│      run //启动脚本
│      www
│      
├─controllers // 控制层
│      articleCtrl.js // 知识控制类
│      userCtrl.js // 用户控制类
│      
├─models // 实体层
│      articleModel.js // 知识实体
│      commentModel.js // 评论内容实体
│      index.js // 导出入口文件
│      likeModel.js // 点赞实体
│      tagModel.js // 标签实体
│      userModel.js // 用户实体       

├─routes // 路由层
│      article.js // 知识路由
│      home.js // 首页路由
│      index.js // 导出入口文件
│      user.js // 用户路由
│      
├─services // 服务层
│      articleServ.js // 知识服务类
│      commentServ.js // 平路服务类
│      likeServ.js // 点赞服务类
│      tagServ.js // 标签服务类
│      userServ.js // 用户服务类
│      
├─test
│      test.js // 测试文件
│      
├─utils // 公具库
│      jwtUtil.js // jwt工具类
│      resp.js // RESTFUL 返回类
│      settings.js // 公用配置类
│      
├─views // 视图层 jade 
│      error.jade
│      index.jade
│      layout.jade
│      
└─views-ejs // 视图层 ejs
        error.ejs
        index.ejs
```

## 演示

![知识库](./docs/index.png =320x240)

## 项目依赖
```
    "co": "^4.6.0",
    "debug": "^2.2.0",
    "jade": "~1.11.0",
    "jsonwebtoken": "^7.4.1",
    "kcors": "^2.2.1",
    "koa": "^2.0.0",
    "koa-bodyparser": "^2.0.1",
    "koa-convert": "^1.2.0",
    "koa-json": "^1.1.1",
    "koa-jwt": "^3.2.2",
    "koa-logger": "^1.3.0",
    "koa-onerror": "^1.2.1",
    "koa-router": "^7.0.0",
    "koa-static": "^1.5.2",
    "koa-unless": "^1.0.7",
    "koa-views": "^5.0.1",
    "mongoose": "^4.11.1",
    "runkoa": "^1.5.2"
```


## 启动项目

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm  start
```


